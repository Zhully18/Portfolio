import React, { useEffect, useState } from 'react'
import { themes } from '../Assets/data'
import ThemeItem from './ThemeItem'
import { FaCog } from 'react-icons/fa'
import {BsSun, BsMoon} from 'react-icons/bs'
import './Theme.css'

// Store the color in the local storage so when user refresh, it maintains same color as the previous color before refreshing
const getStorageColor= () => {
  let color = 'hsl(252, 35%, 51%)';
  if(localStorage.getItem('color')) {
    color =localStorage.getItem('color')
  }
  return color;
}

// Store the color in the local storage so when user refresh, it maintains same theme (either dark theme or light theme)
const getStorageTheme= () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme =localStorage.getItem('theme')
  }
  return theme;
};

const Theme = () => {
  const [showSwitcher, setShowSwicther] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme);

  const changeColor= (color) =>{
    setColor(color);
  };

  const toggleTheme = () => {
    if(theme=== 'light-theme'){
      setTheme('dark-theme');
    }
    else{
      setTheme('light-theme');
    } 
  };
  

  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color);
    localStorage.setItem('color' , color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme' , theme);
  }, [theme]);

  return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : ''} style_switcher`}>
            <div className="style_switcher-toggler"
             onClick={() => setShowSwicther(!showSwitcher)}>
               <FaCog />
            </div>

            <div className="theme_toggler" onClick={toggleTheme} >
               {theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
            </div>

            <h3 className="style_switcher-title">Style Swicther</h3>
            <div className="style_switcher-items">
                {themes.map((themes, index) => {
                    return <ThemeItem key={index} {...themes} changeColor={changeColor}/>
                })}
            </div>
  
          {/* The onClick will close when you click on the X icon */}
            <div className="style_switcher-close" onClick={() => setShowSwicther(!showSwitcher)}>&times;</div>
        </div>
    </div>
  )
}

export default Theme