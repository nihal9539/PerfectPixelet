import { clerkMiddleware ,authMiddleware} from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware()
// export default authMiddleware({
//   ignoredRoutes: ["/api/webhooks(.*)"],
// });
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};