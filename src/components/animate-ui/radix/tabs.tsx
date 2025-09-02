"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { type HTMLMotionProps, type Transition, motion } from "motion/react";

import { cn } from "@/lib/utils";

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  activeClassName?: string;
  transition?: Transition;
};

function TabsList({
  ref,
  children,
  className,
  activeClassName,
  transition = {
    type: "spring",
    duration: 0.4,
  },
  ...props
}: TabsListProps) {
  const localRef = React.useRef<HTMLDivElement | null>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const [, setActiveValue] = React.useState<string | undefined>(undefined);
  const [activeTabRect, setActiveTabRect] = React.useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const getActiveValue = React.useCallback(() => {
    if (!localRef.current) return;
    const activeTab = localRef.current.querySelector<HTMLElement>(
      '[data-state="active"]'
    );
    if (!activeTab) return;

    const value = activeTab.getAttribute("data-value") ?? undefined;
    setActiveValue(value);

    // Get the position and dimensions of the active tab
    const listRect = localRef.current.getBoundingClientRect();
    const activeRect = activeTab.getBoundingClientRect();

    setActiveTabRect({
      left: activeRect.left - listRect.left,
      top: activeRect.top - listRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, []);

  React.useEffect(() => {
    getActiveValue();

    const observer = new MutationObserver(getActiveValue);

    if (localRef.current) {
      observer.observe(localRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [getActiveValue]);

  // Update active tab position on window resize
  React.useEffect(() => {
    const handleResize = () => {
      getActiveValue();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getActiveValue]);

  return (
    <div className="relative">
      <TabsPrimitive.List
        ref={localRef}
        data-slot="tabs-list"
        className={cn(
          "text-[#545454] inline-flex h-10 w-fit items-center justify-center gap-4 rounded-lg p-[4px] relative",
          "",
          className
        )}
        {...props}
      >
        {/* Animated background */}
        {activeTabRect && (
          <motion.div
            className={cn(
              "absolute bg-main px-4 rounded-3xl shadow-sm z-0",
              activeClassName
            )}
            initial={false}
            animate={{
              left: activeTabRect.left,
              top: activeTabRect.top,
              width: activeTabRect.width,
              height: activeTabRect.height,
            }}
            transition={transition}
            style={{
              height: "calc(100%)",
              top: "0px",
            }}
          />
        )}
        {children}
      </TabsPrimitive.List>
    </div>
  );
}

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex cursor-pointer border-[#0000001A] border data-[state=active]:border-main rounded-3xl md:min-w-[200px] sm:min-w-[150px]   items-center justify-center whitespace-nowrap  px-8 md:h-16 sm:h-12 h-10 sm:text-sm text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 z-[1] relative data-[state=active]:text-white data-[state=active]:shadow-none",
        className
      )}
      value={value}
      {...props}
    />
  );
}

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content> &
  HTMLMotionProps<"div"> & {
    transition?: Transition;
  };

function TabsContent({
  className,
  children,
  transition = {
    duration: 0.5,
    ease: "easeInOut",
  },
  ...props
}: TabsContentProps) {
  return (
    <TabsPrimitive.Content asChild {...props}>
      <motion.div
        data-slot="tabs-content"
        className={cn("flex-1 outline-none", className)}
        layout
        initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        transition={transition}
        {...props}
      >
        {children}
      </motion.div>
    </TabsPrimitive.Content>
  );
}

type TabsContentsProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
};

function TabsContents({
  children,
  className,
  transition = { type: "spring", stiffness: 200, damping: 25 },
  ...props
}: TabsContentsProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const newHeight = entries?.[0]?.contentRect.height;
      if (!newHeight) return;
      requestAnimationFrame(() => {
        setHeight(newHeight);
      });
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      const initialHeight = containerRef.current.getBoundingClientRect().height;
      setHeight(initialHeight);
    }
  }, [children]);

  return (
    <motion.div
      data-slot="tabs-contents"
      layout
      animate={{ height: height }}
      transition={transition}
      className={className}
      {...props}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
  type TabsContentsProps,
};
