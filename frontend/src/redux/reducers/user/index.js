const INITIAL_STATE = {
  currentUser: null,
};

export const userActionTypes = {
  ACTION: "ACTION",
};

export const action = () => ({
  type: "ACTION",
  //payload: this is data that may get passed through to update state
});

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.ACTION:
      return { ...state, currentUser: "NEW USER" };
    default:
      return state;
  }
};
