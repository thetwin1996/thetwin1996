import './About.css'
import { FormattedMessage } from 'react-intl'
import AboutProfilePhoto from '../../assets/images/profile-photos/photo.png'
import { Button } from '../../elements/button/Button.jsx'
import { Email, Whatsapp, Certificate } from '../../assets/scripts/SetGlobalVariables.js'
import { useEffect } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

export function About () {
  useEffect(() => {
    Email()
    Whatsapp()
    Certificate()
  }, [])

  return (
    <div className='A_About '>
      <div className='A_AboutContent container'>
        <div className='A_Content padding'>
          <div className='A_Titles'>
            <h3 className='A_Title1'><span>02.</span><FormattedMessage id='A_Title1' defaultMessage='' /></h3>
            <h3 className='A_Title2'><span><FormattedMessage id='A_Title2_1' defaultMessage='' /></span><FormattedMessage id='A_Title2_2' defaultMessage='' /></h3>
          </div>
          <div className='A_ImageAndTexts'>
            <div className='A_ProfilePhoto'><img src={AboutProfilePhoto} alt='Abouts profile photo' loading='lazy' /></div>
            <h2 className='A_Text1'><FormattedMessage id='A_Text1' defaultMessage='' /><span className='A_Text1_1'><FormattedMessage id='A_Text1_1' defaultMessage='' /></span></h2>
            <p className='A_Text2'><FormattedMessage id='A_Text2' defaultMessage='' /></p>
            <p className='A_Text3'><FormattedMessage id='A_Text3' defaultMessage='' /></p>
            <p className='A_Text4'><FormattedMessage id='A_Text4' defaultMessage='' /></p>
            <p className='A_Text5'><FormattedMessage id='A_Text5' defaultMessage='' /></p>
            {/* <p className='A_Text6'><FormattedMessage id='A_Text6' defaultMessage='' />
              <a className='A_Text6_1 Certificate' href='' target='_blank'> <FormattedMessage id='A_Text6_1' defaultMessage='' /></a>
            </p> */}
          </div>
          <div className='A_ButtonResume'>
            <Button isDownload><FormattedMessage id='A_buttonResume' defaultMessage='' /></Button>
          </div>
          <div className='A_ContactInformation'>
            <a className='A_ContactOption Email' href=''>
              <MdOutlineEmail className='A_ContactOptionIcon' />
              <h4>Email</h4>
              <span className='A_ContactOptionText'><FormattedMessage id='Email' defaultMessage='' /></span>
            </a>
            <a className='A_ContactOption Whatsapp' href='' target='_blank'>
              <BsWhatsapp className='A_ContactOptionIcon' />
              <h4>Whatsapp</h4>
              <span className='A_ContactOptionText'><FormattedMessage id='Whatsapp' defaultMessage='' /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
