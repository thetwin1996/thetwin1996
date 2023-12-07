import './Footer.css'
import { useEffect } from 'react'
import { Website } from '../../assets/scripts/SetGlobalVariables.js'
import { FormattedMessage } from 'react-intl'
import { Logo } from '../../elements/logo/Logo.jsx'
import { Link } from 'react-scroll'

export function Footer () {
  useEffect(() => {
    Website()
  }, [])

  return (
    <div className='Fo_Footer'>
      <div className='container'>
        <div className='Fo_Content padding'>
          <a href='' className='Fo_Logo Website'>
            <Logo />
          </a>
          <ul className='N_links Fo_Links'>
            <li className='N_link'><Link to='home' spy smooth offset={0} duration={50}><span>01.</span><FormattedMessage id='N_menuHome' defaultMessage='' /></Link></li>
            <li className='N_link'><Link to='about' spy smooth offset={0} duration={50}><span>02.</span><FormattedMessage id='N_menuAbout' defaultMessage='' /></Link></li>
            <li className='N_link'><Link to='skills' spy smooth offset={0} duration={50}><span>03.</span><FormattedMessage id='N_menuSkill' defaultMessage='' /></Link></li>
            <li className='N_link'><Link to='works' spy smooth offset={0} duration={50}><span>04.</span><FormattedMessage id='N_menuWork' defaultMessage='' /></Link></li>
            <li className='N_link'><Link to='contact-us' spy smooth offset={0} duration={50}><span>05.</span><FormattedMessage id='N_menuContactUs' defaultMessage='' /></Link></li>
          </ul>
          <div className='Fo__CopyIight'>
            <small>&copy; Anniel Valle Valera. <FormattedMessage id='Fo_CopyRightText' defaultMessage='' /></small>
          </div>
        </div>
      </div>
    </div>
  )
}
