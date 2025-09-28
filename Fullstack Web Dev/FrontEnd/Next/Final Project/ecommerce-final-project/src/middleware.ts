import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;
    const tkn = await getToken({ req: request })
    const authPage = ["/signin", "signup"];
    const routes = ["/", "/brands", "/cart", "/categories", "/products", "/productDetails"];

    if (tkn && authPage.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!tkn && routes.includes(pathname)) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/brands", "/cart", "/categories", "/products", "/productDetails", "/signin", "/signup"],
}