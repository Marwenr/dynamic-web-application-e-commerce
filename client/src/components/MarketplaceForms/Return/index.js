import React from 'react'
import { GrFormPreviousLink } from "react-icons/gr"


const Return = ({title, handleCheck}) => {

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2 className="p-3">{title}</h2>
      <GrFormPreviousLink style={{ fontSize: "30px", marginRight: "30px", cursor: "pointer" }} onClick={() => handleCheck()} />
    </div>

  )
}

export default Return