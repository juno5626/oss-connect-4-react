import React from "react";

const RestartButton = (props) => {
  return (
    <button
      type='button'
      className='btn btn-success'
      onClick={props.restart}
      style={{ marginTop: '20px', fontWeight: 'bold' }}
    >
      재입학??
    </button>
  )
}

export default RestartButton;