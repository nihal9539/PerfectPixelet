import { clerkMiddleware ,authMiddleware, createRouteMatcher} from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware()
// export default authMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};