import React from 'react'
import './button.css'

const Button = ({classnames, value}) => {
  return (
    <>
        <button className='btn' id={classnames}>{value}</button>
    </>
  )
}

export default Button