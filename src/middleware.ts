import { auth } from "@/auth"
 
export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/signIn") {
    const newUrl = new URL("/signIn", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})