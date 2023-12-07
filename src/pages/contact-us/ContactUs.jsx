import './ContactUs.css'
import { FormattedMessage } from 'react-intl'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsCheckCircle } from 'react-icons/bs'
import { Email, Whatsapp } from '../../assets/scripts/SetGlobalVariables.js'
import { useEffect, useRef } from 'react'
import { VscError } from 'react-icons/vsc'
import { useValidation } from '../../custom-hooks/useValidation.js'
import emailjs from '@emailjs/browser'

export function ContactUs () {
  const { name, email, message, onChange, validation, clean, validForm, setValidForm, showMessage, setShowMessage } = useValidation()
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    if (name.valid === 'true' && email.valid === 'true' && message.valid === 'true') {
      setShowMessage(true)
      setValidForm('true')
      emailjs.sendForm('service_hfwpa7d', 'template_ofpwppa', form.current, 'dxaBeP39qy3sgnZZL')
      clean()
    } else if (name.valid === 'false' || email.valid === 'false' || message.valid === 'false') {
      setValidForm(null)
      setShowMessage(true)
    } else {
      setValidForm('false')
      setShowMessage(true)
    }
  }

  useEffect(() => {
    Email()
    Whatsapp()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [showMessage])

  return (
    <div id='contact-us' className='CU_ContactUs'>
      <div className='container'>
        <div className='CU_Content padding'>
          <div className='CU_Titles'>
            <h3 className='CU_Title1'><span>05.</span><FormattedMessage id='CU_Title1' defaultMessage='' /></h3>
            <h3 className='CU_Title2'><span><FormattedMessage id='CU_Title2_1' defaultMessage='' /></span><FormattedMessage id='CU_Title2_2' defaultMessage='' /></h3>
          </div>
          <div className='CU_ContactAndForm'>
            <div className='CU_ContactInformation'>
              <a className='CU_ContactOption Email' href=''>
                <MdOutlineEmail className='CU_ContactOptionIcon' />
                <h4><FormattedMessage id='CU_Email' defaultMessage='' /></h4>
                <span className='CU_ContactOptionText'><FormattedMessage id='Email' defaultMessage='' /></span>
              </a>
              <a className='CU_ContactOption Whatsapp' href='' target='_blank'>
                <BsWhatsapp className='CU_ContactOptionIcon' />
                <h4><FormattedMessage id='CU_Whatsapp' defaultMessage='' /></h4>
                <span className='CU_ContactOptionText'><FormattedMessage id='Whatsapp' defaultMessage='' /></span>
              </a>
            </div>
            <form className='CU_Form' ref={form} onSubmit={sendEmail}>
              <input className='CU_Input' type='text' name='name' placeholder='Your Full Name' value={name.value} onChange={onChange} onKeyUp={validation} onBlur={validation} />
              <input className='CU_Input' type='text' name='email' placeholder='Your Email' value={email.value} onChange={onChange} onKeyUp={validation} onBlur={validation} />
              <textarea className='CU_Textarea' name='message' cols='40' rows='15' placeholder='Your Message' value={message.value} onChange={onChange} onKeyUp={validation} onBlur={validation} />
              <button type='submit' className='CU_Button'><FormattedMessage id='CU_FormButton' defaultMessage='' /></button>

              {name.valid === 'false' && showMessage === true && (
                <p className='EM_Alert'><VscError /><span className='EM_Text'><b><FormattedMessage id='CU_Name' defaultMessage='' /></b><FormattedMessage id='CU_Error1' defaultMessage='' /></span></p>
              )}

              {email.valid === 'false' && showMessage === true && (
                <p className='EM_Alert'><VscError /><span className='EM_Text'><b><FormattedMessage id='CU_Mail' defaultMessage='' /></b><FormattedMessage id='CU_Error2' defaultMessage='' /></span></p>
              )}

              {message.valid === 'false' && showMessage === true && (
                <p className='EM_Alert'><VscError /><span className='EM_Text'><b><FormattedMessage id='CU_Message' defaultMessage='' /></b><FormattedMessage id='CU_Error3' defaultMessage='' /></span></p>
              )}

              {validForm === 'false' && showMessage === true && (
                <p className='EM_Alert'><VscError /><span className='EM_Text'><b><FormattedMessage id='CU_Error' defaultMessage='' /></b><FormattedMessage id='CU_Error4' defaultMessage='' /></span></p>
              )}

              {validForm === 'true' && showMessage === true && (
                <p className='DM_Alert'><BsCheckCircle /><span className='DM_Text'><FormattedMessage id='CU_Done' defaultMessage='' /></span></p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
