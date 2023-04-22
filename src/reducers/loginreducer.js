export const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: { token: action.payload },
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        auth: { token: null },
      };

    default:
      return state;
  }
};
