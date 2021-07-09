import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBord, loadBoardData } from "../redux/action";
import Block from "./Block";

function Hold({ item }) {
  const dispatch = useDispatch();
  const [showNeeds, setShowNeeds] = useState(false);
  const [value, setValue] = useState("");
  const todo = useSelector((state) => state.board.board);
  const loading = useSelector((state) => state.board.boardLoading);
  const handleAdd = () => {
    dispatch(addBord(value));
  };
  useEffect(() => {
    dispatch(loadBoardData());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="ON-block">
          <div className="ON">ON-HOLD (0)</div>
        </div>
        {loading ? (
          <div className="loading-spinner">
            Loading <i className="fas fa-sync-alt"></i>
          </div>
        ) : (
          todo.map((item) => {
            return <Block key={item.id} item={item} />;
          })
        )}
        {showNeeds && (
          <div>
            <div className="block-show">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="show-input"
                placeholder="Введите заголовок для этой карточки"
              />
            </div>
            <div className="add-card-block">
              <div className="add-card-btn" onClick={() => handleAdd()}>
                Добавить карточку
              </div>
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

export default Hold;
