const initialState = {
  board: [],
  boardLoading: false,
};
export const board = (state = initialState, actions) => {
  switch (actions.type) {
    case "update/content":
      return {
        ...state,
        newTodo: actions.payload,
      };

    case "load/board/start":
      return {
        ...state,
        boardLoading: true,
      };

    case "load/board/success":
      return {
        ...state,
        board: actions.payload,
        boardLoading: false,
      };

    case "delete/load/success":
      return {
        ...state,
        board: state.board.filter((item) => item.id !== actions.payload),
        deleting: false,
      };

    case "add/load/success":
      return {
        ...state,
        board: [
          ...state.board,
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
