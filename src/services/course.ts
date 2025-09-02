import request from "@/services/request";
import {
  ICourse,
  ICourseDetailsResponse,
  ICourseSpeficiations,
  IPaginatedReturnResponse,
  IReturnResponse,
} from "@/utils/types";

const courseService = {
  getCourses: (
    body: ICourseSpeficiations,
    page: number = 1
  ): Promise<IPaginatedReturnResponse<ICourse[]>> =>
    request.get(`courses`, { params: { ...body, page } }),

  getSingleCourse: (
    course_id: number
  ): Promise<IReturnResponse<ICourseDetailsResponse>> =>
    request.get(`courses/${course_id}`),
  attendStudent: (body: {
    lecture_code: string;
    student_code: string;
  }): Promise<IReturnResponse<ICourseDetailsResponse>> =>
    request.post(`courses/attendance`, body),
};

export default courseService;
