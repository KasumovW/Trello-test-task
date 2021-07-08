import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/action";

function Login(props) {
  const error = useSelector((state) => state.user.errorMessage);
  const authorizing = useSelector((state) => state.user.authorizing);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const handleClick1 = () => {
    dispatch(loginStart(login, pass));
  };

  return (
    <div>
      <div className="block-login">
        <div className="auth">Авторизация</div>
        <div className="auth-login">
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="auth-login-input"
            placeholder="Введите логин"
          />
        </div>
        <div className="auth-password">
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="auth-password-input"
            placeholder="Введите пороль"
          />
        </div>
        {error && (
          <div className="error-text">
            Ошибка авторизации, повторите попытку
          </div>
        )}
        {authorizing ? <div className="auth-btn disabled" onClick={handleClick1}>
          Войти
        </div> : <div className="auth-btn" onClick={handleClick1}>
          Войти
        </div>}
      </div>
    </div>
  );
}

export default Login;
