import './SetDarkModeButton.css'
import { MoonIcon, SunIcon } from '../../../elements/control-button-icons/ControlButtonIcons.jsx'
import { useEffect, useState } from 'react'
import { DarkMode } from '../../../assets/scripts/SetGlobalStyles.js'

export function SetDarkModeButton () {
  const [darkMode, setDarkMode] = useState(window.localStorage.getItem('dark-mode'))

  const handleClick = (l) => {
    DarkMode(l)
    setDarkMode(l)
  }

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('dark-mode'))
  }, [])

  return (
    <>
      {darkMode === 'light' && (<button className='SDMB_controlIcon' onClick={() => handleClick('dark')}><MoonIcon /></button>)}
      {darkMode === 'dark' && (<button className='SDMB_controlIcon' onClick={() => handleClick('light')}><SunIcon /></button>)}
      {darkMode !== 'dark' && darkMode !== 'light' && (<button className='SDMB_controlIcon' onClick={() => handleClick('dark')}><MoonIcon /></button>)}
    </>
  )
}
