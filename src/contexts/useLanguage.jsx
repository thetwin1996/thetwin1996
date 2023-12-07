import { createContext, useState } from 'react'
// Paquete de npm para para proveer la internacionalización en un proyecto.
import { IntlProvider } from 'react-intl'
// JSON con los textos en los diferentes idiomas.
import textsInEnglish from '../assets/languages/en-US.json'
import textsInSpanish from '../assets/languages/es-ES.json'
// Import the language codes.
import { es, en } from '../assets/const.js'
// Crear el contexto: el estado global de los idiomas.
const Context = createContext()
// Definiendo el contenedor que proveerá los idiomas. Hay que pasarle la propiedad: children la cual contiene.
const Provider = ({ children }) => {
  // Variables para los valores por defecto, según el almacenamiento local.
  let defaultLocalLanguage
  let textLanguage
  // Obtener el valor del idioma del almacenamiento local del navegador.
  const language = window.localStorage.getItem('language')
  // Para establecer los valores por defecto, según el almacenamiento local.
  if (language) {
    defaultLocalLanguage = language
    if (language === es) {
      textLanguage = textsInSpanish
    } else if (language === en) {
      textLanguage = textsInEnglish
    } else {
      defaultLocalLanguage = en
      textLanguage = textsInEnglish
    }
  } else {
    defaultLocalLanguage = en
    textLanguage = textsInEnglish
  }
  // Variable de estado que contendrá los mensajes de toda la app en el idioma correspondientes.
  const [texts, setTexts] = useState(textLanguage)
  // Variable de estado que contendrá el idioma configurado localmente.
  const [locale, setLocale] = useState(defaultLocalLanguage)
  // Función para establecer el idioma.
  const setLanguage = (language) => {
    switch (language) {
      case es:
        setTexts(textsInSpanish)
        setLocale(es)
        window.localStorage.setItem('language', es)
        break
      case en:
        setTexts(textsInEnglish)
        setLocale(en)
        window.localStorage.setItem('language', en)
        break
      default:
        setTexts(textsInEnglish)
        setLocale(en)
        window.localStorage.setItem('language', en)
    }
  }
  return (
    // Acceder al contexto.
    // La propiedad: setLanguage es lo que queremos pasar a toda la app.
    <Context.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={texts}>
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { Provider, Context }
