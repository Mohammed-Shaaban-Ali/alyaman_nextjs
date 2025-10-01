import request from "@/services/request";
import {
  IBook,
  IPaginatedReturnResponseWithBooks,
  IReturnResponse,
} from "@/utils/types";

const libraryService = {
  getBooks: (
    body: { key_words?: string },
    page: number = 1
  ): Promise<IPaginatedReturnResponseWithBooks<IBook[]>> =>
    request.post(`books`, { params: { ...body, page } }),

  getSingleBook: (book_id: number): Promise<IReturnResponse<IBook>> =>
    request.get(`books/${book_id}`),
};

export default libraryService;
