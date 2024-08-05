import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Technosignia logo.jpeg'
import gallery_2 from '../../assets/Technosignia13.jpeg'
import gallery_3 from '../../assets/Technosignia13.jpeg'
import gallery_4 from '../../assets/Technosignia-14.jpeg'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className='gellery'>
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
