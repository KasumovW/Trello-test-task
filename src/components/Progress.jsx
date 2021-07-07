import React, { useState } from "react";

function Progress(props) {
  const [showProgress, setShowProgress] = useState(false);
  return (
    <div>
      <div>
        <div className="IN-progress">
          <div className="ON">IN PROGRESS (0)</div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
        {showProgress && (
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
                  setShowProgress(!showProgress);
                }}
              >
                ✖
              </div>
            </div>
          </div>
        )}
        {showProgress ? (
          ""
        ) : (
          <div className="add-card">
            <div className="card-plus">+</div>
            <div
              className="card-title"
              onClick={() => {
                setShowProgress(!showProgress);
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

export default Progress;
