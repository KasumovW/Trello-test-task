import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard2, loadBoard2Data } from "../redux/action";
import BlockHold from "./BlockHold";
import Block from "./Block";

function Needs(props) {
  const [showHold, setShowHold] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBoard2Data());
  }, [dispatch]);

  const todo2 = useSelector((state) => state.board2.board2);
  const loading = useSelector((state) => state.board2.board2Loading);

  const handleAddBord2 = () => {
    dispatch(addBoard2(value));
  };

  return (
    <div>
      <div className="center">
        <div className="NEEDS">
          <div className="ON">NEEDS REVIEW (0)</div>
        </div>
        {loading ? (
          <div className="loading-spinner">
            Loading <i className="fas fa-sync-alt"></i>
          </div>
        ) : (
          todo2.map((item) => {
            return <BlockHold item={item} key={item} />;
          })
        )}
        {showHold && (
          <div>
            <div className="block-show">
              <input
                type={value}
                onChange={(e) => setValue(e.target.value)}
                className="show-input"
                placeholder="Введите заголовок для этой карточки"
              />
            </div>
            <div className="add-card-block">
              <div className="add-card-btn" onClick={() => handleAddBord2()}>
                Добавить карточку
              </div>
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

export default Needs;
