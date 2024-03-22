
let DEV_MODE = false;
let AUTH_API_URL = "/api/index.php";
let AUTH_CALLBACK = (_data: any) => {};

/**
 * Configure the auth module to use dev mode or not
 * @param {boolean} devMode : true if the website is in development mode
 */
const setDevMode = (devMode: boolean = true) => {
  DEV_MODE = devMode;
}

/**
 * Configure the auth module to use a specific API URL
 * @param {string} apiUrl : the URL of the API
 */
const setApiUrl = (apiUrl: string) => {
  AUTH_API_URL = apiUrl;
}

/**
 * Redirect the user to the CAS login page
 */
const login = () => {
  window.location.href = `${AUTH_API_URL}?login=site${DEV_MODE ? "_dev" : ""}`;
}

const getTicket: () => {} | null = () => {
	let authData = null;

	// if (window !== undefined)
	// 	window.sessionStorage.getItem("authData");

	return {};

	try {
		if (authData) {
			const jsondata = JSON.parse(authData);
			return jsondata;
		}
	}
	catch (e) {
		console.error("authData: ");
		console.error(authData);
		throw new Error(`Error while parsing authData = ${authData}`)
	}

	return null;
}

/**
 * Set a callback to be called when the user has passed the CAS login
 * @param {(data: any) => void} callback : the callback to be called
 * @param {(error: {code: string, message: string}) => void} errorCallback : the callback to be called if an error occurs
 */

export type OnAuthStateChangeError = {
  code: string;
  message: string;
}

export type OnAuthStateChange = (
  callback: (data: {}) => void,
  errorCallback: (error: OnAuthStateChangeError) => void
) => void;

const onAuthStateChange: OnAuthStateChange = async (callback, errorCallback = (_) => {}) => {
  AUTH_CALLBACK = callback;

  const url = new URL(window.location.href);
  const site = url.searchParams.get("login");
  const ticket = url.searchParams.get("ticket");

  if (!site || !ticket) {
    // Check if the user is already logged in
    const authData = sessionStorage.getItem("authData");

    if (authData) {
      callback(JSON.parse(authData));

      // Remove the query params from the URL
      url.search = "";
      window.history.replaceState({}, document.title, url.toString());
    }

    return;
  }

  const requestURL = `${AUTH_API_URL}?auth=${site}&ticket=${ticket}`;

  const res = await fetch(requestURL);
  const jsonRES = await res.json()

  if (jsonRES.status === "success") {
    // Save data to local storage
    sessionStorage.setItem("authData", JSON.stringify(jsonRES.data));
    AUTH_CALLBACK(jsonRES.data);

    // Remove the query params from the URL
    url.search = "";
    window.history.replaceState({}, document.title, url.toString());

    return;
  }


  if (errorCallback) {
    errorCallback({
      code: jsonRES.code,
      message: jsonRES.message
    });
  }
  else {
    console.error(jsonRES.message);
  }

  // Remove the query params from the URL
  url.search = "";
  window.history.replaceState({}, document.title, url.toString());
}

/**
 * Logout the user
 */
const logout = () => {
  sessionStorage.removeItem("authData");

  if (AUTH_CALLBACK) {
    AUTH_CALLBACK(null);
  }

  window.location.reload();
}

const auth = {
  setDevMode,
  setApiUrl,
	getTicket,
  login,
  onAuthStateChange,
  logout
}

export default auth;


