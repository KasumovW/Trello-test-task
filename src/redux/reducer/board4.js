const initialState = {
  board4: [],
  board4Loading: false,
};
export const board4 = (state = initialState, actions) => {
  switch (actions.type) {
    case "load/board4/start":
      return {
        ...state,
        board4Loading: true,
      };

    case "load/board4/success":
      return {
        ...state,
        board4: actions.payload,
        board4Loading: false,
      };

    case "delete4/load/success":
      return {
        ...state,
        board4: state.board4.filter((item) => item.id !== actions.payload),
        deleting: false,
      };

    case "add4/load/success":
      return {
        ...state,
        board4: [
          ...state.board4,
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
