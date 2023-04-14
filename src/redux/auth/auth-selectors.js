export const isUserLogin = (state) => state.auth.isAuth;
export const getAuth = ({ auth }) => {
  const { isAuth, token, user } = auth;
  return { isAuth, token, user }, auth;
};

export const getUser = ({ auth }) => auth.user;

