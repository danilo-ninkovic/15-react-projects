import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item">
            <p key={id} className="title">
              {title}
            </p>
            <div className="btn-container">
              <button onClick={() => editItem(id)} className="edit-btn">
                <FaEdit />
              </button>
              <button onClick={() => removeItem(id)} className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
