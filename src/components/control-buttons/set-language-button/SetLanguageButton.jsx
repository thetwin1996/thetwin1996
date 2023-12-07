import './SetLanguageButton.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../contexts/useLanguage.jsx'
import { EnglishIcon, SpanishIcon } from '../../../elements/control-button-icons/ControlButtonIcons.jsx'

export function SetLanguageButton () {
  // Contener el idioma siguiente a setear.
  const [language, setLang] = useState('en-US')
  // Importando el contexto del idioma.
  const pageLanguage = useContext(Context)

  const handleClick = (l) => {
    // Poner el idioma seleccionado.
    pageLanguage.setLanguage(l)

    if (l === 'en-US') {
      setLang('en-US')
    } else if (l === 'es-ES') {
      setLang('es-ES')
    }
  }

  useEffect(() => {
    const localLanguage = window.localStorage.getItem('language')
    if (localLanguage === 'es-ES') {
      setLang('es-ES')
    } else if (localLanguage === 'en-US') {
      setLang('en-US')
    }
  }, [language])

  return (
    <>
      {language === 'en-US' && (<button className='SLB_controlIcon' onClick={() => handleClick('es-ES')}><SpanishIcon /></button>)}
      {language === 'es-ES' && (<button className='SLB_controlIcon' onClick={() => handleClick('en-US')}><EnglishIcon /></button>)}
    </>
  )
}
