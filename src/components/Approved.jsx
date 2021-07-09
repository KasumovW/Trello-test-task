import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard4, loadBoard4Data } from "../redux/action";
import BlockApproved from "./BlockApproved";

function Approved() {
  const dispatch = useDispatch();
  const [showApproved, setShowApproved] = useState(false);
  const [value, setValue] = useState("");
  const todo4 = useSelector((state) => state.board4.board4);
  const loading = useSelector((state) => state.board4.board4Loading);

  useEffect(() => {
    dispatch(loadBoard4Data());
  }, [dispatch]);

  const handleAdd4 = () => {
    dispatch(addBoard4(value));
  };

  return (
    <div>
      <div>
        <div className="APPROVED">
          <div className="ON">APPROVED ({todo4.length})</div>
        </div>
        <div className="itDD">
          {loading ? (
            <div className="loading-spinner">
              Loading <i className="fas fa-sync-alt"></i>
            </div>
          ) : (
            todo4.map((item) => {
              return <BlockApproved item={item} key={item.id} />;
            })
          )}
        </div>
        {showApproved && (
          <div>
            <div className="block-show">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="show-input"
                placeholder="Введите заголовок для этой карточки"
              />
            </div>
            <div className="add-card-block">
              <div className="add-card-btn" onClick={() => handleAdd4()}>
                Добавить карточку
              </div>
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
