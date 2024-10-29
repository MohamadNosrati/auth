import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await request.cookies.get("token")?.value;
  if (!token && request.url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return;
}

