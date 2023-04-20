import React from 'react'
import './button.css'

type Props = {
    name: string;
    bgColor: string;
    out?: string;
    txColor: string;
}

function Button({name, bgColor, out, txColor}: Props) {
  return (
    <button style={{backgroundColor:bgColor, borderColor:out, color:txColor}} className="btn">{name}</button>
  )
}

export default Button