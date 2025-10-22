import React from 'react';
import './Box.css';

export const Box = ({ value, onClick }) => {
  const style = value === "X" ? "Box X" : value === "O" ? "Box O" : "Box";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
