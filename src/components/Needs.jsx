import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Block from './Block';

function Needs(props) {
  const [showNeeds, setShowNeeds] = useState(false);
  const todo = useSelector(state => state.board.board)
  return (
    <div>
      <div>
        <div className="NEEDS">
          <div className="ON">NEEDS REVIEW (0)</div>
        </div>
        {todo.map((item) => {
          return(
            <Block key={item.id} item={item}/>
          )
        })}
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
