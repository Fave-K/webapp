//#region login
export const getLoginProcess = ({ authentication }) =>
  authentication._loginProcess;
export const getAuth = ({ authentication }) => authentication.auth;
export const getIsUserAuthenticated = ({ authentication }) =>
  authentication.auth.isUserAuthenticated;
export const getAuthToken = ({ authentication }) => authentication.auth.token;
//#endregion
