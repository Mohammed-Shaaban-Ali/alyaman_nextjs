import request from "@/services/request";
import {
  IPaginatedReturnResponse,
  IPost,
  IReturnResponse,
} from "@/utils/types";

const postService = {
  getAllPosts: (): Promise<IReturnResponse<IPost[]>> => request.get(`posts`),

  getSinglePost: (postId: number): Promise<IReturnResponse<IPost>> =>
    request.get(`posts/${postId}`),
};

export default postService;
