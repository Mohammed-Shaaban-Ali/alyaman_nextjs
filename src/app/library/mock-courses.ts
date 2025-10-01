// This is a mock data file for courses and workshops
export type CourseType = "course" | "workshop";

export interface Course {
  id: string;
  type: CourseType;
  title: string;
  description: string;
  image: string;
  priceType: "fixed" | "monthly" | "level";
  price?: number;
  monthlyPrice?: number;
  levelNote?: string;
}

export const courses: Course[] = [
  {
    id: "1",
    type: "course",
    title: "React for Beginners",
    description:
      "Learn the basics of React, including components, state, and props. This course is perfect for those new to frontend development and want to build interactive UIs.",
    image: "courseImg01",
    priceType: "fixed",
    price: 250,
  },
  {
    id: "2",
    type: "course",
    title: "Advanced Next.js",
    description:
      "Take your Next.js skills to the next level. Covers SSR, SSG, API routes, and advanced routing techniques for production-ready apps.",
    image: "courseImg01",
    priceType: "monthly",
    monthlyPrice: 99,
  },
  {
    id: "3",
    type: "workshop",
    title: "UI/UX Design Sprint",
    description:
      "A hands-on workshop to rapidly prototype and test user interfaces. Ideal for designers and developers working together.",
    image: "courseImg01",
    priceType: "level",
    levelNote: "Depends on the level",
  },
  {
    id: "4",
    type: "workshop",
    title: "Fullstack Bootcamp",
    description:
      "Intensive workshop covering both frontend and backend technologies. Includes real-world projects and mentorship.",
    image: "courseImg01",
    priceType: "fixed",
    price: 400,
  },
];
