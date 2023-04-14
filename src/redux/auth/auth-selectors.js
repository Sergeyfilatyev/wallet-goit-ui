export const isUserLogin = (state) => state.auth.isAuth;
export const getAuth = ({ auth }) => {
  const { isAuth, token } = auth;
  return { isAuth, token };
};

export const getUser = ({ auth }) => auth.user;

