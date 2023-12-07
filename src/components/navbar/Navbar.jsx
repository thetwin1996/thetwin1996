import './Navbar.css'
import { useEffect } from 'react'
import { ToggleMenu } from '../../assets/scripts/ToggleMenu.js'
import { DetectingScrolling } from '../../assets/scripts/SmallerMenuBar.js'
import { Facebook, Github, Instagram, Linkedin, Twitter, Website } from '../../assets/scripts/SetGlobalVariables.js'
import { Logo } from '../../elements/logo/Logo.jsx'
import { Button } from '../../elements/button/Button.jsx'
import { CloseMenuIcon, OpenMenuIcon } from '../../elements/close-open-menu-icons/CloseOpenMenuIcons.jsx'
import { FormattedMessage } from 'react-intl'
import { SetLanguageButton } from '../../components/control-buttons/set-language-button/SetLanguageButton.jsx'
// import { SoundIcon } from '../../elements/control-button-icons/ControlButtonIcons.jsx'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../../elements/media-button-icons/MediaButtonIcons.jsx'
import { SetDarkModeButton } from '../control-buttons/set-dark-mode-button/SetDarkModeButton.jsx'
import { SetColorPaletteButton } from '../control-buttons/set-color-palette-button/SetColorPaletteButton'
import { Link } from 'react-scroll'

export function Navbar () {
  useEffect(() => {
    ToggleMenu()
    DetectingScrolling()
    Website()
    Instagram()
    Github()
    Linkedin()
    Twitter()
    Facebook()
  }, [])

  return (
    <div className='N_navbar'>
      <a href='' className='Website'><Logo /></a>
      <div className='N_navbarMenu'>
        <button className='N_buttonCloseMenu'><CloseMenuIcon /></button>
        <ul className='N_links'>
          <li className='N_link'><Link to='home' spy smooth offset={0} duration={50}><span>01.</span><FormattedMessage id='N_menuHome' defaultMessage='' /></Link></li>
          <li className='N_link'><Link to='about' spy smooth offset={0} duration={50}><span>02.</span><FormattedMessage id='N_menuAbout' defaultMessage='' /></Link></li>
          <li className='N_link'><Link to='skills' spy smooth offset={0} duration={50}><span>03.</span><FormattedMessage id='N_menuSkill' defaultMessage='' /></Link></li>
          <li className='N_link'><Link to='works' spy smooth offset={0} duration={50}><span>04.</span><FormattedMessage id='N_menuWork' defaultMessage='' /></Link></li>
          <li className='N_link'><Link to='contact-us' spy smooth offset={0} duration={50}><span>05.</span><FormattedMessage id='N_menuContactUs' defaultMessage='' /></Link></li>
        </ul>
        <Button isDownload={false}><FormattedMessage id='N_buttonResume' defaultMessage='' /></Button>
        <div className='N_controlButtons'>
          <SetDarkModeButton />
          {/* <button className='N_controlIcon'><SoundIcon /></button> */}
          <SetLanguageButton />
          <SetColorPaletteButton />
        </div>
        <div className='N_medias'>
          <a href='' className='N_socialIcon Instagram'><InstagramIcon /></a>
          <a href='' className='N_socialIcon Github'><GithubIcon /></a>
          <a href='' className='N_socialIcon Linkedin'><LinkedinIcon /></a>
          <a href='' className='N_socialIcon Twitter'><TwitterIcon /></a>
          <a href='' className='N_socialIcon Facebook'><FacebookIcon /></a>
        </div>
      </div>
      <button className='N_buttonOpenMenu'><OpenMenuIcon /></button>
    </div>
  )
}
