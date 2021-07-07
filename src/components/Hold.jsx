import React, { useState } from "react";

function Hold(props) {
  const [showHold, setShowHold] = useState(false);
  return (
    <div>
      <div className="center">
        <div className="ON-block">
          <div className="ON">ON HOLD (0)</div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
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
