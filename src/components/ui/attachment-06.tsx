import FileAttachment from "@/components/file-attachment";
import { XIcon } from "lucide-react";
import { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "./progress";

const Attachment06 = ({
  fileName,
  onClick,
  progress,
  className,
  isUploading,
  fileSizeInBytes,
}: {
  fileName?: string;
  fileSizeInBytes?: number;
  fileType?: string;
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
  className?: string;
  progress?: number;
  isUploading?: boolean;
}) => {
  return (
    <div className={cn("bg-main/10 z-50  rounded-lg  px-4 py-3", className)}>
      <div className="flex items-center gap-2">
        <div
          className="flex p-3 shrink-0 items-center justify-center rounded-lg border-0 bg-[#54248C0D]"
          aria-hidden="true"
        >
          <FileAttachment className="text-main" size={30} />
        </div>
        <div className="flex grow items-center gap-12">
          <div className="space-y-1">
            {isUploading ? (
              <p className="text-sm font-medium">Uploading...</p>
            ) : (
              <p className="text-sm font-medium">{fileName || "Title"}</p>
            )}
            {isUploading ? (
              <p className="text-xs">{fileName || "Title"}</p>
            ) : (
              <p className="text-xs">
                {fileSizeInBytes
                  ? (fileSizeInBytes / 1000).toString() + " KB"
                  : "320 KB"}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between content-between items-end flex-col">
          <XIcon
            onClick={onClick}
            size={24}
            className=" text-main cursor-pointer transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
          {fileName && Boolean(progress) && (
            <p className="text-sm mt-2 text-main">
              {fileName ? progress : 78}%
            </p>
          )}
          {!fileName && <p className="text-sm mt-2 text-main">{78}%</p>}
        </div>
      </div>
      {isUploading && (
        <div className="mt-4">
          <Progress
            value={progress}
            className=" data-[slot=progress-indicator]:bg-main"
          />
        </div>
      )}
    </div>
  );
};

export default Attachment06;
