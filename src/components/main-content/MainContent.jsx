import './MainContent.css'
import { FormattedMessage } from 'react-intl'
import HomeProfilePhoto from '../../assets/images/profile-photos/photo.png'
import { Link } from 'react-scroll'
import '../../elements/button/Button.css'

export function MainContent () {
  return (
    <div className='MC_Content padding'>
      <div className='MC_TextsButtonPhoto'>
        <div className='MC_TextsButton'>
          <div className='MC_Texts'>
            <span className='MC_HomeText1'><FormattedMessage id='MC_homeText1' defaultMessage='' /></span>
            <h1 className='MC_HomeText2'><FormattedMessage id='MC_homeText2' defaultMessage='' /></h1>
            <h2 className='MC_HomeText3'><FormattedMessage id='MC_homeText3' defaultMessage='' /></h2>
            <p className='MC_HomeText4'><FormattedMessage id='MC_homeText4' defaultMessage='' /></p>
          </div>
          <div className='MC_Button'>
            <Link className='B_Button' to='about' spy smooth offset={0} duration={50}><FormattedMessage id='MC_ButtonMoreAboutMe' defaultMessage='' /></Link>
          </div>
        </div>
        <div className='MC_HomeProfilePhoto'>
          <img src={HomeProfilePhoto} alt='Home profile photo' loading='lazy' />
        </div>
      </div>
      <div className='MC_Phrase'>
        <p><FormattedMessage id='MC_Phrase' defaultMessage='' /></p>
        <p><FormattedMessage id='MC_PhraseAuthor' defaultMessage='' /></p>
      </div>
    </div>
  )
}
