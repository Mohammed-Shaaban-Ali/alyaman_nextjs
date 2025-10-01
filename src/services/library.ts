import request from "@/services/request";
import {
  IBook,
  IPaginatedReturnResponseWithBooks,
  IReturnResponse,
} from "@/utils/types";

const libraryService = {
  // POST to get books
  getBooks: (body: {
    key_words?: string;
    page?: number;
    category_id?: number;
  }): Promise<IPaginatedReturnResponseWithBooks<IBook[]>> =>
    request.post(`books`, body),

  getSingleBook: (book_id: number): Promise<IReturnResponse<IBook>> =>
    request.get(`books/${book_id}`),
};

export default libraryService;
