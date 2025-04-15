import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const publicRoutes = createRouteMatcher([
  '/',
  '/help',
  '/sign-in(.*)',
  '/sign-up(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  if (!publicRoutes(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*))',
    '/(api|trpc)(.*)'
  ],
};