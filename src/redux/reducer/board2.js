const initialState = {
  newTodo2: "",
  board2: [],
  board2Loading: false,
};

export const board2 = (state = initialState, actions) => {
  switch (actions.type) {
    case "load/board2/start":
      return {
        ...state,
        board2Loading: true,
      };

    case "load/board2/success":
      return {
        ...state,
        board2: actions.payload,
        board2Loading: false,
      };

    case "delete2/load/success":
      return {
        ...state,
        board2: state.board2.filter((item) => item.id !== actions.payload),
        deleting: false,
      };

    case "add2/load/success":
      return {
        ...state,
        board2: [
          ...state.board2,
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
