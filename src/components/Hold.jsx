import React, { useState } from "react";

function Hold({ item }) {
  const [showHold, setShowHold] = useState(false);

  return (
    <div>
      <div className="center">
        <div className={item.color}>
          <div className="ON">{item.title} (0)</div>
        </div>
        {item.todo.map(todo => {
          return (
            <div className="id-block">
              <div className="delete">❌</div>
              <div className="id">
                ID: <span>{todo.id}</span>
              </div>
              <div className="title">
                <span>{todo.title}</span>
              </div>
            </div>
          )
        })}
        {showHold && (
          <div>
            <div className="block-show">
              <input
                type="text"
                className="show-input"
                placeholder="Введите заголовок для этой карточки"
              />
            </div>
            <div className="add-card-block">
              <div className="add-card-btn">Добавить карточку</div>
              <div
                className="add-card-x"
                onClick={() => {
                  setShowHold(!showHold);
                }}
              >
                ✖
              </div>
            </div>
          </div>
        )}
        {showHold ? (
          ""
        ) : (
          <div className="add-card">
            <div className="card-plus">+</div>
            <div
              className="card-title"
              onClick={() => {
                setShowHold(!showHold);
              }}
            >
              Добавить карточку
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hold;
