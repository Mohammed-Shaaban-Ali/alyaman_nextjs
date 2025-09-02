import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const response = NextResponse.next();

  response.headers.set("x-lang", lang);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
