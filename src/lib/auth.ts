import { APIUrl } from "./api";

/**
 * Redirect the user to the CAS login page
 */
const login = () => {
	if (typeof window === 'undefined')
		return;

	const redirect = window.location.origin + window.location.pathname;

  window.location.href = `${APIUrl('/auth/login')}?redirect=${encodeURIComponent(redirect)}`;
}

const getToken = (): string => {
	if (typeof window !== 'undefined') {
		const url = new URL(window.location.href);

		if (url.searchParams.has('token')) {
			const token = url.searchParams.get("token") as string

			sessionStorage.setItem('token', token);
			const now = new Date();
			now.setTime(now.getTime() + 1 * 3600 * 1000);
			document.cookie = `token=${token}; expires=${now}; SameSite=None; Secure`;
			window.location.href = window.location.origin + window.location.pathname;
			return token;
		}
	}

	// if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('token'))
	// 	return sessionStorage.getItem('token') as string;

	if (typeof document !== 'undefined') {

		const tokenMatch = document.cookie.match(/token=[a-zA-Z0-9\.\-_]+/);
		if (!tokenMatch)
			return "";

		return tokenMatch[0].replace(/token=/g, '');
	}

	return "";
}

/**
 * Logout the user
 */
const logout = () => {
  sessionStorage.removeItem("id");

  // if (AUTH_CALLBACK) {
  //   AUTH_CALLBACK(null);
  // }

  // window.location.reload();
}

const Auth = {
	getToken,
  login,
  logout
}

export default Auth;
