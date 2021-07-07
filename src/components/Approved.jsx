import React, { useState } from "react";

function Approved(props) {
  const [showApproved, setShowApproved] = useState(false);
  return (
    <div>
      <div>
        <div className="APPROVED">
          <div className="ON">APPROVED (0)</div>
        </div>
        <div className="id-block">
          <div className="id">
            id: <span>123</span>
          </div>
          <div className="title">
            <span>title</span>
          </div>
        </div>
        {showApproved && (
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
                  setShowApproved(!showApproved);
                }}
              >
                ✖
              </div>
            </div>
          </div>
        )}
        {showApproved ? (
          ""
        ) : (
          <div className="add-card">
            <div className="card-plus">+</div>
            <div
              className="card-title"
              onClick={() => {
                setShowApproved(!showApproved);
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

export default Approved;
