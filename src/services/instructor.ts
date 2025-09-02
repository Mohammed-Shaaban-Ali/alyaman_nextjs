import {
  ICourseTeacher,
  IPaginatedReturnResponse,
  IReturnResponse,
} from "@/utils/types";
import request from "./request";

const InstructorService = {
  getInstructors: (
    page: number = 1
  ): Promise<IPaginatedReturnResponse<ICourseTeacher[]>> =>
    request.get(`teachers`, { params: { page } }),

  getSingleInstructor: (
    instructor_id: number
  ): Promise<IReturnResponse<ICourseTeacher>> =>
    request.get(`teachers/${instructor_id}`),
};

export default InstructorService;
