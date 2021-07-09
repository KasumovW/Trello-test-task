const initialState = {
  board3: [],
  board3Loading: false,
};
export const board3 = (state = initialState, actions) => {
  switch (actions.type) {
    case "load/board3/start":
      return {
        ...state,
        board3Loading: true,
      };

    case "load/board3/success":
      return {
        ...state,
        board3: actions.payload,
        board3Loading: false,
      };

    case "delete3/load/success":
      return {
        ...state,
        board3: state.board3.filter((item) => item.id !== actions.payload),
        deleting: false,
      };

    case "add3/load/success":
      return {
        ...state,
        board3: [
          ...state.board3,
          {
            id: actions.payload.random,
            title: actions.payload.value,
          },
        ],
      };

    default:
      return state;
  }
};
