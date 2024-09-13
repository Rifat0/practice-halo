import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { HOME, LOGIN, PUBLIC_ROUTES, ROOT } from "./lib/routes";


const { auth } = NextAuth(authConfig);

export default auth((req) => {
   const { nextUrl } = req;
   const isAuthenticated = !!req.auth;
   console.log('isAuthenticated', isAuthenticated);

   const isPublicRoute = (PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route)));
   
   if (!isAuthenticated && !isPublicRoute ){
      return Response.redirect(new URL(LOGIN, nextUrl));
   }else if(isAuthenticated && ((nextUrl.pathname === LOGIN) || (nextUrl.pathname === ROOT))) {
      return Response.redirect(new URL(HOME, nextUrl));
   }
   
 });

 export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
 };