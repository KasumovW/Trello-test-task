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

    case 'load/board/success': {
      return {
        ...state,
        board: actions.payload,
        boardLoading: false,
      }
    }

    default:
      return state;
  }
}