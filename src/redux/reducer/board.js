const initialState = {
  board: [],
  boardLoading: false,
}
export const board = (state = initialState, actions) => {
  switch (actions.type) {
    case 'load/board/start':
      return {
        ...state,
        boardLoading: true,
      }

    case 'load/board/success':
      return {
        ...state,
        board: actions.payload,
        boardLoading: false,
      }

    case 'delete/load/start':
      return {
        ...state,
        board: state.board.map((item) => {
          if (item.id === actions.payload) {
            return {
              ...item,
              deleting: true,
            }
          }
          return item;
        })
      }

    case 'delete/load/success':
      return {
        ...state,
        board: state.board.filter(
          (item) => item.id !== actions.payload,
        ),
      };

    default:
      return state;
  }
}