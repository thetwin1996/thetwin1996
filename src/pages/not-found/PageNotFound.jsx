import { Button } from '../../elements/button/Button'
import { FormattedMessage } from 'react-intl'
import './PageNotFound.css'
import { Link } from 'react-router-dom'

export default function PageNotFound () {
  return (
    <div className='PNF_PageNotFound'>
      <h1 className='PNF_404'>404</h1>
      <h2><FormattedMessage id='PNF_PageNotFound' defaultMessage='' /></h2>
      <div className='PNF_Button'>
        <Link className='B_Button PNF_Button1' to='/'><FormattedMessage id='PNF_buttonResume' defaultMessage='' /></Link>
        <Button className='PNF_Button2' isDownload={false}><FormattedMessage id='N_buttonResume' defaultMessage='' /></Button>
      </div>
    </div>
  )
}
