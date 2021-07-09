export const loginStart = (login, pass) => (dispatch) => {
  dispatch({ type: "auth/started" });

  fetch("/admin")
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

  fetch("/todo")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "load/board/success", payload: json });
    });
};

export const deleting = (id) => (dispatch) => {
  dispatch({ type: "delete/load/start" });

  fetch(`/todo/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({ type: "delete/load/success", payload: id });
    });
};

export const addBord = (value) => (dispatch) => {
  const random = Math.random();
  dispatch({
    type: "add/load/start",
  });

  fetch("/todo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: random,
      title: value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: "add/load/success",
        payload: { value, random },
      });
    });
};

export const loadBoard2Data = () => (dispatch) => {
  dispatch({ type: "load/board2/start" });

  fetch("/todo2")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "load/board2/success", payload: json });
    });
};

export const deleting2 = (id) => (dispatch) => {
  dispatch({ type: "delete2/load/start", payload: id });

  fetch(`/todo2/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({ type: "delete2/load/success", payload: id });
    });
};

export const addBoard2 = (value) => (dispatch) => {
  const random = Math.random();
  dispatch({ type: "add2/load/start" });

  fetch("/todo2", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: random,
      title: value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: "add2/load/success",
        payload: { value, random },
      });
    });
};

export const loadBoard3Data = () => (dispatch) => {
  dispatch({ type: "load/board3/start" });

  fetch("/todo3")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "load/board3/success", payload: json });
    });
};

export const deleting3 = (id) => (dispatch) => {
  dispatch({ type: "delete3/load/start", payload: id });

  fetch(`/todo3/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({ type: "delete3/load/success", payload: id });
    });
};

export const addBoard3 = (value) => (dispatch) => {
  const random = Math.random();
  dispatch({ type: "add3/load/start" });

  fetch("/todo3", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: random,
      title: value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: "add3/load/success",
        payload: { value, random },
      });
    });
};

export const loadBoard4Data = () => (dispatch) => {
  dispatch({ type: "load/board4/start" });

  fetch("/todo4")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "load/board4/success", payload: json });
    });
};

export const deleting4 = (id) => (dispatch) => {
  dispatch({ type: "delete4/load/start", payload: id });

  fetch(`/todo4/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({ type: "delete4/load/success", payload: id });
    });
};

export const addBoard4 = (value) => (dispatch) => {
  const random = Math.random();
  dispatch({ type: "add4/load/start" });

  fetch("/todo4", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: random,
      title: value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: "add4/load/success",
        payload: { value, random },
      });
    });
};
