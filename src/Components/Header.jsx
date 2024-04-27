import React, { useState } from 'react'
import logo from '../assets/logo.webp'
import darkMode from '../assets/night.png'
import lightMode from '../assets/day.png'
import '../Styles/header.css'

function Header({theme,setTheme}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const themeMode = () =>{
      theme == 'light' ? setTheme('dark') : setTheme('light')

  }

  return (
    <>
        <div className='navBar'>
    
            <img className='navLogo' width={'155px'} src={logo} alt="LOGO" />

            { menuOpen ?
              <i className="menu fa-solid fa-xmark" onClick={()=>{
              setMenuOpen(!menuOpen)
              }}></i> 
            :
              <i className='menu fa-solid fa-bars' onClick={()=>{
              setMenuOpen(!menuOpen)
              }}></i>
              
              
            }
            <ul className={menuOpen ? 'open' : ''}>
                <li className='navbarLink' style={{cursor:'pointer', margin:'0 26px',maxWidth:'940px',fontSize:'18px',fontWeight:'700'}}><a href='#home'>Catalogue</a></li>
                <li className='navbarLink' style={{cursor:'pointer', margin:'0 26px',maxWidth:'940px',fontSize:'18px',fontWeight:'700'}}><a href='#arrivals'>Fashion</a></li>
                <li className='navbarLink' style={{cursor:'pointer', margin:'0 26px',maxWidth:'940px',fontSize:'18px',fontWeight:'700'}}><a href='#favourite'>Favourite</a></li>
                <li className='navbarLink' style={{cursor:'pointer', margin:'0 26px',maxWidth:'940px',fontSize:'18px',fontWeight:'700'}}><a href=''>Sign Up</a></li>
            </ul>
    
            <img className='mode' width={'31px'} onClick={themeMode} src={theme=='light'?darkMode:lightMode} alt="Mode-icon" />
          
        </div>
    </>
  )
}

export default Header
