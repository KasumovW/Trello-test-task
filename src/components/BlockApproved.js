import React from "react";
import { useDispatch } from "react-redux";
import { deleting4 } from "../redux/action";

function BlockApproved({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleting4(id));
  };

  return (
    <div className="id-block" draggable={true}>
      <div className="delete" onClick={() => handleDelete(item.id)}>
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

export default BlockApproved;
