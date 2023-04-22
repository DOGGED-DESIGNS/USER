export const adminReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("admin");
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};
