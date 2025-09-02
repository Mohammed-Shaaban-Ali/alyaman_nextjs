import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/app/courses/mock-courses";
import * as assets from "@/assets";
import { instructors } from "../mock-instructors";

interface PageProps {
  params: {
    id: string;
  };
}
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const instructor = instructors.find((i) => i.id === id);
  if (!instructor) return notFound();
  const imgSrc = (assets as any)[instructor.image];
  const instructorCourses = courses.filter((c) =>
    instructor.courses.includes(c.id)
  );
  return (
    <div className="container mx-auto mt-30 py-12 max-w-3xl">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-main-yellow">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={instructor.name}
              fill
              className="object-cover"
            />
          )}
        </div>
        <h1 className="text-3xl font-bold">{instructor.name}</h1>
        <div className="text-main-yellow font-medium">
          {instructor.expertise}
        </div>
        <p className="text-center text-gray-700 max-w-xl">{instructor.bio}</p>
        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4">Courses Taught</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {instructorCourses.map((course) => (
              <li key={course.id} className="bg-gray-50 rounded-lg p-4 border">
                <div className="font-semibold text-lg">{course.title}</div>
                <div className="text-sm text-gray-600 line-clamp-2">
                  {course.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
