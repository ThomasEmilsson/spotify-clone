import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export const middleware = (req) => {
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
};
