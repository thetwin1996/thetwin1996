import { Link } from 'react-router-dom'
import './Button.css'
import PDF from '../../assets/Anniel Valle Valera.pdf'

export function Button ({ children, isDownload }) {
  return isDownload
    ? <a href={PDF} className='B_Button' download='Anniel Valle Valera.pdf'>{children}</a>
    : <Link to='/resume' className='B_Button' target='_blank'>{children}</Link>
}
