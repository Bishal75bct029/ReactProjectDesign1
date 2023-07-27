import React from 'react'
import './box.css'
import Button from './Button'

const Box = () => {
  return (
    <div className='box'>
      <div className="col1">

      <div className='part1'>

      <h1>Your feet deserve the best</h1>
      </div>
      <div className="part2">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
      <div className="part3">
        <Button classnames = {"shop"} value = {"Shop Now"}/>
        <Button classnames = {"category"} value = {"Category"}/>
        </div>
      <div className="part4"><h2 style={{fontSize:'16px', fontWeight:'normal',color:'#5A5959',fontFamily:'Inter'}}>Also Available On</h2>
      <img src="../public/images/flipkart.png" alt=""  className='layout'/>
      <img src="../public/images/amazon.png" alt=""  className='layout'/>
      </div>
      </div>
      <img src="../public/images/hero-image.png" alt="shoe" className='shoe'/ >
    </div>
  )
}

export default Box