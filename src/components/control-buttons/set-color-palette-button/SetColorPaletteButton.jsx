import './SetColorPaletteButton.css'
import { ColorPaletteIcon } from '../../../elements/control-button-icons/ControlButtonIcons.jsx'
import { SetColor } from '../../../assets/scripts/SetGlobalStyles.js'
import { colors } from '../../../assets/const.js'

export function SetColorPaletteButton () {
  const getIdByColor = (color) => {
    let results = null
    colors.forEach(c => {
      if (c.color === color) {
        results = c.id
      }
    })
    return results
  }

  const getColorById = (id) => {
    let results = ''
    colors.forEach(c => {
      if (c.id === id) {
        results = c.color
      }
    })
    return results
  }

  const handleClick = (n) => {
    const value = getIdByColor(window.localStorage.getItem('skin-color')) + 1
    if (value >= 1 && value <= colors.length) {
      SetColor(getColorById(value))
    } else {
      SetColor(getColorById(1))
    }
  }

  return (
    <>
      <button className='SDMB_controlIcon' onClick={() => handleClick()}><ColorPaletteIcon /></button>
    </>
  )
}
