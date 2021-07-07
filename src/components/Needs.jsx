import React, { useState } from "react";

function Needs(props) {
  const [showNeeds, setShowNeeds] = useState(false);
  return (
    <div>
      <div>
        <div className="NEEDS">
          <div className="ON">NEEDS REVIEW (0)</div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
        {showNeeds && (
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
                  setShowNeeds(!showNeeds);
                }}
              >
                ✖
              </div>
            </div>
          </div>
        )}
        {showNeeds ? (
          ""
        ) : (
          <div className="add-card">
            <div className="card-plus">+</div>
            <div
              className="card-title"
              onClick={() => {
                setShowNeeds(!showNeeds);
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

export default Needs;
