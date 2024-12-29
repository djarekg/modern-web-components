import { parseCookies } from '@/utils/cookie-util.ts';
import type { RequestContext } from 'brisa';

export default function middleware({ headers, route, url }: RequestContext): undefined | Response {
  // early return for assets (no route) and api endpoints
  if (!route || route.name.startsWith('/api/')) return undefined;

  const cookies = parseCookies(headers.get('cookie'));
  const currentUser = cookies.get('currentUser');
  const pathname = route.pathname ?? '';

  if (currentUser && !pathname.startsWith('/dashboard')) {
    return new Response('', {
      status: 302,
      headers: {
        Location: new URL('/dashboard', url).toString(),
      },
    });
  }

  if (!currentUser && !pathname.startsWith('/login')) {
    return new Response('', {
      status: 302,
      headers: {
        Location: new URL('/login', url).toString(),
      },
    });
  }

  // default return to ensure all code paths return a value
  return undefined;
}
