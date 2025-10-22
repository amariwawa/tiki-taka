import React from 'react'

import "./Box.css"

export const Box = ({value, onClick }) => {
  const style = value === "X" ? "Box X" : "Box O"

  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}
