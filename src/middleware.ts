import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher:
    [
      '/', '/(pt|en)/:path*',
      // Match all pathnames except for
      // - … if they start with `/api`, `/_next` or `/_vercel`
      // - … the ones containing a dot (e.g. `favicon.ico`)
      '/((?!api|_next|_vercel|.*\\..*).*)',
      // However, match all pathnames within `/users`, optionally with a locale prefix
      // '/([\\w-]+)?/dashboard/(.+)',
      // '/([\\w-]+)?/auth/(.+)',

    ]
};