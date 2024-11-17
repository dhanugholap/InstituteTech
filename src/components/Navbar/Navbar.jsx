import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { logDOM } from '@testing-library/react'
import logo from '../../assets/tec-icon.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link, ScrollLink } from 'react-scroll'


const Navbar = () => {
  const[sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]) 

const [mobileMenu, setMobileMenu] = useState(false);
const ToggleMenu = ()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Techers</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact usnpm</Link></li>
      </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={ToggleMenu} />
    </nav>
  )
}

export default Navbar
