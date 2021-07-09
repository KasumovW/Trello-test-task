import React from 'react';
import { useDispatch } from 'react-redux';
import { deleting } from '../redux/action';

function Block({ item }) {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleting(id))
  }

  return (
    <div className="id-block">
      <div className="delete" onClick={() => handleDelete(item.id)}>✖</div>
      <div className="id">
        ID: <span>{item.id}</span>
      </div>
      <div className="title">
        <span>{item.title}</span>
      </div>
    </div>
  );
}

export default Block;