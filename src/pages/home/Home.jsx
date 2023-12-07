import './Home.css'
import { SocialNetworkIcons } from '../../components/social-buttons/SocialNetworkIcons.jsx'
import { ControlButtonsAndEmail } from '../../components/control-buttons/ControlButtons.jsx'
import { MainContent } from '../../components/main-content/MainContent.jsx'

export function Home () {
  return (
    <div className='H_home'>
      <div className='container H_homeContent'>
        <aside className='H_socialNetworkIcons'>
          <SocialNetworkIcons />
        </aside>
        <article className='H_mainContent '>
          <MainContent />
        </article>
        <aside className='H_controlOptionButtons'>
          <ControlButtonsAndEmail />
        </aside>
      </div>
    </div>
  )
}
