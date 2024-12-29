/**
 * Parses a cookie header string into a Map of cookie names and values.
 *
 * @param cookieHeader - The cookie header string to parse. If null, an empty Map is returned.
 * @returns A Map where the keys are cookie names and the values are cookie values.
 */
const parseCookies = (cookieHeader: string | null): Map<string, string> => {
  const cookies = new Map<string, string>();
  if (!cookieHeader) return cookies;

  cookieHeader.split(';').map(cookie => {
    const [name, ...rest] = cookie.split('=');
    const value = rest.join('=').trim();

    if (name && value) {
      cookies.set(name.trim(), decodeURIComponent(value));
    }
  });

  return cookies;
};

export { parseCookies };
