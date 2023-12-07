import './Main.css'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { About } from '../../pages/about/About.jsx'
import { Wave } from '../../elements/wave/Wave.jsx'
import { Skills } from '../../pages/skills/Skills.jsx'
import { Works } from '../../pages/works/Works.jsx'
import { useContext, useEffect } from 'react'
import { Context } from '../../contexts/useLanguage.jsx'
import { ContactUs } from '../../pages/contact-us/ContactUs.jsx'
import { Footer } from '../../pages/footer/Footer.jsx'
import { Home } from '../../pages/home/Home.jsx'

export default function MainPage () {
  const language = useContext(Context)

  useEffect(() => {
    const localLangguage = window.localStorage.getItem('language')
    if (!localLangguage) {
      language.setLanguage('en-US')
    }
  }, [])

  return (
    <div className='MP_mainPage'>
      <header className='MP_header'>
        <nav className='MP_nav'>
          <Navbar />
        </nav>
      </header>
      <main className='MP_main'>
        <section id='home' className='MP_sectionHome'>
          <Home />
        </section>
        <section id='about' className='MP_sectionAbout'>
          <Wave style={{ position: 'relative', top: '6px' }} />
          <About />
        </section>
        <section id='skills' className='MP_sectionSkills'>
          <Wave style={{ position: 'relative', top: '-6px', transform: 'rotate(180deg)', transformOrigin: 'center' }} />
          <Skills />
        </section>
        <section id='works' className='MP_sectionWorks'>
          <Wave style={{ position: 'relative', top: '6px' }} />
          <Works />
        </section>
        <section id='contact-us' className='MP_sectionContactUs'>
          <Wave style={{ position: 'relative', top: '-6px', transform: 'rotate(180deg)', transformOrigin: 'center' }} />
          <ContactUs />
        </section>
      </main>
      <footer className='MP_footer'>
        <Wave style={{ position: 'relative', top: '6px' }} />
        <Footer />
      </footer>
    </div>
  )
}
