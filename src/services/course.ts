import request from "@/services/request";
import {
  ICourse,
  ICourseDetailsResponse,
  ICourseSpeficiations,
  IPaginatedProductsResponse,
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
};

export default courseService;
