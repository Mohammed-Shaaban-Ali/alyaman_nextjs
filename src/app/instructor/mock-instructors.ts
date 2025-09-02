// Mock data for instructors
export interface Instructor {
  id: string;
  name: string;
  bio: string;
  image: string;
  expertise: string;
  courses: string[]; // course ids
}

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    bio: "Sarah is a senior frontend engineer with 10+ years of experience in React and Next.js. She loves teaching and has mentored hundreds of students.",
    image: "userImg",
    expertise: "Frontend Development, React, Next.js",
    courses: ["1", "2"],
  },
  {
    id: "2",
    name: "Ahmed Al-Farsi",
    bio: "Ahmed specializes in UI/UX design and rapid prototyping. He has led multiple design sprints and workshops for startups and enterprises.",
    image: "userImg",
    expertise: "UI/UX Design, Prototyping, Workshops",
    courses: ["3"],
  },
];
