const initialState = {
  view: "list",
};

const ViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_VIEW":
      return {
        ...state,
        view: action.payload,
      };

    default:
      return state;
  }
};

export default ViewReducer;
