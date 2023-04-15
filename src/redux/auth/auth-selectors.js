export const isUserLogin = (state) => state.auth.isAuth;
export const getAuth = ({ auth }) => {
  const { isAuth, token } = auth;
  return { isAuth, token };
};

// export const getUser = (state) => state.auth.user.balance;
export const getName = (state) => state.auth.user.name;
