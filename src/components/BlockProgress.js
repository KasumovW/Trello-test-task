import React from "react";
import { useDispatch } from "react-redux";
import { deleting3 } from "../redux/action";

function BlockProgress({ item }) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleting3(id));
  };

  return (
    <div className="id-block">
      <div className="delete" onClick={() => handleClick(item.id)}>
        ✖
      </div>
      <div className="id">
        ID: <span>{item.id}</span>
      </div>
      <div className="title">
        <span>{item.title}</span>
      </div>
    </div>
  );
}

export default BlockProgress;
