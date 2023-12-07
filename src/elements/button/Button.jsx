import { Link } from 'react-router-dom'
import './Button.css'
import PDF from '../../assets/Anniel Valle Valera.pdf'

export function Button ({ children, isDownload }) {
  const onButtonClick = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Anniel Valle Valera.pdf'
        alink.click()
      })
    })
  }

  return isDownload
    ? <button id='download-button' className='B_Button' onClick={onButtonClick}>{children}</button>
    : <Link to='/resume' className='B_Button' target='_blank'>{children}</Link>
}
