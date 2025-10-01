import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IBook, ICourse } from "@/utils/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BooksList = ({ books }: { books: IBook[] | undefined }) => {
  const t = useTranslations();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <Card key={book.id} className="h-full pt-0 pb-0 flex flex-col">
            <CardHeader className="p-0">
              <Link href={`/library/book/${book.id}`}>
                <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-2 px-4">
              <Link
                href={`/library/book/${book.id}`}
                className="flex h-full flex-col justify-between"
              >
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {book.short_description}
                  </p>
                </div>
                <div className="mt-auto py-2 font-bold text-main-yellow text-sm">
                  <span className="aed-symbol">AED</span> {book.price}
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
