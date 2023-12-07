import './Loading.css'
import 'animate.css'
import { Logo } from '../../elements/logo/Logo.jsx'

export default function Loading () {
  return (
    <div className='Loading_Loading'>
      <div className='animate__animated animate__zoomInDown'>
        <Logo />
      </div>
    </div>
  )
}
