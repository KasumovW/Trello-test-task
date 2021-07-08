export const loginStart = (login, pass) => (dispatch) => {
  dispatch({ type: "auth/started" });

  fetch("http://localhost:3010/admin")
    .then((response) => response.json())
    .then((json) => {
      const random = Math.random();

      if (random < 0.5) {
        dispatch({ type: "auth/error", payload: json });
      } else {
        localStorage.setItem("auth-token", json.token);
        dispatch({ type: "auth/success", payload: json });
      }
    });
};

export const loadBoardData = () => (dispatch) => {
    dispatch({ type: "load/board/start" });

    fetch("http://localhost:3010/todo")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "load/board/success", payload: json });
      });
};

export const deleting = (id) => (dispatch) => {
  dispatch({ type: "delete/load/start"})

  fetch(`http://localhost:3010/todo/${id}`, {
    method: 'DELETE',
  })
  .then((response) => response.json())
  .then((json) => {
    dispatch({ type: 'delete/load/success', payload: id })
  })
}
