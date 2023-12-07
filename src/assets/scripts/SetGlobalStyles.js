// Import the color constants.
import { colors, en, es } from '../const.js'

export const DarkMode = (darkmode) => {
  if (darkmode === 'light') {
    document.querySelector('body').classList.remove('dark')
    window.localStorage.setItem('dark-mode', 'light')
  } else if (darkmode === 'dark') {
    document.querySelector('body').classList.add('dark')
    window.localStorage.setItem('dark-mode', 'dark')
  }
}

export const SetColor = (c) => {
  document.documentElement.style.setProperty('--skin-color', c)
  window.localStorage.setItem('skin-color', c)
}

const isColor = (colors) => {
  // The return valor.
  let isValid = false
  // Is the color variable of the storage?
  const skinColor = window.localStorage.getItem('skin-color')
  // Is the color variable correct?
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].color === skinColor) {
      isValid = true
    }
  }
  return isValid
}

const isMode = () => {
  // The return valor.
  let isValid = false
  // Is the mode variable of the storage?
  const mode = window.localStorage.getItem('dark-mode')
  if (mode === 'dark') isValid = true
  if (mode === 'light') isValid = true
  return isValid
}

const isLanguage = () => {
  // The return valor.
  let isValid = false
  // Is the language variable of the storage?
  const language = window.localStorage.getItem('language')
  if (language === es) isValid = true
  if (language === en) isValid = true
  return isValid
}

export const SetGlobalStyles = () => {
  const darkMode = window.localStorage.getItem('dark-mode')
  if (!isLanguage()) {
    window.localStorage.setItem('language', en)
  }
  if (!isMode()) {
    DarkMode('light')
  }
  if (!isColor(colors) && darkMode === 'light') {
    SetColor(colors[0].color)
    DarkMode(darkMode)
  }
  if (!isColor(colors) && darkMode === 'dark') {
    SetColor(colors[0].color)
    DarkMode(darkMode)
  }
  if (!isColor(colors) && !darkMode) {
    SetColor(colors[0].color)
    DarkMode('light')
  }
  if (isColor(colors) && !darkMode) {
    SetColor(window.localStorage.getItem('skin-color'))
    DarkMode('light')
  }
  if (isColor(colors) && darkMode) {
    SetColor(window.localStorage.getItem('skin-color'))
    DarkMode(darkMode)
  }
}
