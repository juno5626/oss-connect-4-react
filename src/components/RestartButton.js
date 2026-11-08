import React from "react";

const RestartButton = (props) => {
  return (
    <button
      type='button'
      className='btn btn-success'
      onClick={props.restart}
      style={{ marginTop: '20px', fontWeight: 'bold' }}
    >
      N차 간담회 다시 시작
    </button>
  )
}

export default RestartButton;