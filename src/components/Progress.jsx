import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard3, loadBoard3Data } from "../redux/action";
import BlockProgress from "./BlockProgress";
import Block from "./Block";

function Progress(props) {
  const [showProgress, setShowProgress] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBoard3Data());
  }, [dispatch]);

  const todo3 = useSelector((state) => state.board3.board3);
  const loading = useSelector((state) => state.board3.board3Loading);

  const handleAddBoard3 = () => {
    dispatch(addBoard3(value));
  };

  return (
    <div>
      <div>
        <div className="IN-progress">
          <div className="ON">IN PROGRESS (0)</div>
        </div>
        {loading ? (
          <div className="loading-spinner">
            Loading <i className="fas fa-sync-alt"></i>
          </div>
        ) : (
          todo3.map((item) => {
            return <BlockProgress item={item} key={item.id} />;
          })
        )}
        {showProgress && (
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
              <div className="add-card-btn" onClick={() => handleAddBoard3()}>
                Добавить карточку
              </div>
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
