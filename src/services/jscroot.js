/**
 * JSCroot (CRootJS) Official Micro-Framework Integration
 * Developed by Rolly Maulana Awangga, S.T., M.T., CAIP.
 *
 * Provides ES Module imports for:
 * - jscroot/api: getJSON, postJSON, get, post
 * - jscroot/cookie: getCookie, setCookieWithExpireDay, deleteCookie
 * - jscroot/element: setInner, onClick, getValue, setValue
 * - jscroot/url: getHash, setHash, getUrl
 */

const fallbackCookie = {
  getCookie: (name) => {
    if (typeof document === 'undefined') return '';
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : '';
  },
  setCookieWithExpireDay: (name, value, days = 7) => {
    if (typeof document === 'undefined') return;
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
  },
  deleteCookie: (name) => {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`;
  }
};

export async function getJSCroot() {
  if (typeof window === 'undefined') return fallbackCookie;
  if (window.jscroot && window.jscroot.getJSON) return window.jscroot;

  try {
    const [api, cookie, element, url] = await Promise.all([
      import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js').catch(() => ({})),
      import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js').catch(() => ({})),
      import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js').catch(() => ({})),
      import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js').catch(() => ({}))
    ]);

    window.jscroot = {
      ...fallbackCookie,
      ...api,
      ...cookie,
      ...element,
      ...url,
      api,
      cookie,
      element,
      url
    };

    console.info('🚀 [JSCroot - NoteRoute Portal] Ready:', window.jscroot);
    return window.jscroot;
  } catch (e) {
    window.jscroot = { ...fallbackCookie };
    return window.jscroot;
  }
}

/**
 * Fetch latest release from GitHub API using JSCroot
 */
export function fetchLatestRelease(callback) {
  const GITHUB_RELEASES_API = 'https://api.github.com/repos/CRootAgent/noteroute/releases/latest';
  if (typeof window !== 'undefined' && window.jscroot?.getJSON) {
    window.jscroot.getJSON(GITHUB_RELEASES_API, '', '', (res) => {
      if (res?.data) {
        callback(res.data);
      }
    });
    return;
  }
  fetch(GITHUB_RELEASES_API)
    .then((r) => r.json())
    .then((data) => callback(data))
    .catch((err) => console.warn('Release fetch fallback:', err));
}
