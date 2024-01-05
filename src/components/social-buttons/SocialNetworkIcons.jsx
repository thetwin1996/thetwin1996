// Importar el archivo de los estilos.
import './SocialNetworkIcons.css'
import { InstagramIcon, GithubIcon, LinkedinIcon } from '../../elements/media-button-icons/MediaButtonIcons.jsx'
// import { InstagramIcon, GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from '../../elements/media-button-icons/MediaButtonIcons.jsx'
import { useEffect } from 'react'
import { Facebook, Github, Instagram, Linkedin, Twitter } from '../../assets/scripts/SetGlobalVariables.js'

export function SocialNetworkIcons () {
  useEffect(() => {
    Instagram()
    Github()
    Linkedin()
    Twitter()
    Facebook()
  }, [])

  return (
    <div className='SNI_mediaNetworkIcons'>
      <div className='SNI_icons'>
        <div className='SNI_medias'>
          <a href='' className='SNI_socialIcon Instagram'><InstagramIcon /></a>
          <a href='' className='SNI_socialIcon Github'><GithubIcon /></a>
          <a href='' className='SNI_socialIcon Linkedin'><LinkedinIcon /></a>
          {/* <a href='' className='SNI_socialIcon Twitter'><TwitterIcon /></a> */}
          {/* <a href='' className='SNI_socialIcon Facebook'><FacebookIcon /></a> */}
        </div>
        <span className='SNI_dashedLine1' />
      </div>
    </div>
  )
}
