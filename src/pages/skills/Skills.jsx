import './Skills.css'
import { FormattedMessage } from 'react-intl'
import HTML from '../../assets/images/skills/html.png'
import CSS from '../../assets/images/skills/css-3.png'
import JS from '../../assets/images/skills/java-script.png'
import ReactJS from '../../assets/images/skills/react-js.png'
import VueJS from '../../assets/images/skills/vue-js.png'
import DjangoPY from '../../assets/images/skills/django.png'
import NodeJS from '../../assets/images/skills/node-js.png'
import PHP from '../../assets/images/skills/php.png'
import Python from '../../assets/images/skills/python.png'
import MongoDB from '../../assets/images/skills/mongodb.png'
import PostgreSQL from '../../assets/images/skills/postgresql.png'
import Figma from '../../assets/images/skills/figma.png'
import Git from '../../assets/images/skills/git.png'
import GitHub from '../../assets/images/skills/github.png'
import Express from '../../assets/images/skills/express-js.png'
import Docker from '../../assets/images/skills/docker.png'
import SQL from '../../assets/images/skills/sql.png'
import { useEffect } from 'react'
import { ToggleSkills } from '../../assets/scripts/Skills.js'
import { ArrowIcon, BackendIcon, DesignIcon, FrontendIcon, VersionControlIcon } from '../../elements/skills-icons/SkillsIcons.jsx'

export function Skills () {
  useEffect(() => {
    ToggleSkills()
  }, [])

  return (
    <div className='Sk_Skills '>
      <div className='Sk_SkillsContent container'>
        <div className='Sk_Content padding'>
          <div className='Sk_Titles'>
            <h3 className='Sk_Title1'><span>03.</span><FormattedMessage id='Sk_Title1' defaultMessage='' /></h3>
            <h3 className='Sk_Title2'><span><FormattedMessage id='Sk_Title2_1' defaultMessage='' /></span><FormattedMessage id='Sk_Title2_2' defaultMessage='' /></h3>
          </div>
          <div className='Sk_IconsTextsArrowsImages'>
            <div className='Sk_IconsTextsArrows'>
              <div className='Sk_IconTextArrow Sk_Active' data-target='#frontend'>
                <FrontendIcon /><span className='Sk_Text'><FormattedMessage id='Sk_Text1' defaultMessage='' /></span><ArrowIcon />
              </div>

              <div className='Sk_IconTextArrow' data-target='#backend'>
                <BackendIcon /><span className='Sk_Text'><FormattedMessage id='Sk_Text2' defaultMessage='' /></span><ArrowIcon />
              </div>

              <div className='Sk_IconTextArrow' data-target='#design'>
                <DesignIcon /><span className='Sk_Text'><FormattedMessage id='Sk_Text3' defaultMessage='' /></span><ArrowIcon />
              </div>

              <div className='Sk_IconTextArrow' data-target='#versionControl'>
                <VersionControlIcon /><span className='Sk_Text'><FormattedMessage id='Sk_Text4' defaultMessage='' /></span><ArrowIcon />
              </div>
            </div>

            <div className='Sk_BoxsImagesTexts'>
              <div className='Sk_BoxImageText Sk_Active' data-content id='frontend'>
                <div className='Sk_ImageText one'>
                  <img loading='lazy' className='Sk_Image' src={HTML} alt='Logo of HTML' />
                  <p>HTML</p>
                </div>
                <div className='Sk_ImageText two'>
                  <img loading='lazy' className='Sk_Image' src={CSS} alt='Logo of CSS' />
                  <p>CSS</p>
                </div>
                <div className='Sk_ImageText eight'>
                  <img loading='lazy' className='Sk_Image' src={JS} alt='Logo of JS' />
                  <p>Javascript</p>
                </div>
                <div className='Sk_ImageText four'>
                  <img loading='lazy' className='Sk_Image' src={ReactJS} alt='Logo of ReactJS' />
                  <p>ReactJS</p>
                </div>
                <div className='Sk_ImageText five'>
                  <img loading='lazy' className='Sk_Image' src={VueJS} alt='Logo of VueJS' />
                  <p>VueJS</p>
                </div>
              </div>

              <div className='Sk_BoxImageText' data-content id='backend'>
                <div className='Sk_ImageText one'>
                  <img loading='lazy' className='Sk_Image' src={DjangoPY} alt='Logo of DjangoPY' />
                  <p>Django</p>
                </div>
                <div className='Sk_ImageText two'>
                  <img loading='lazy' className='Sk_Image' src={NodeJS} alt='Logo of NodeJS' />
                  <p>NodeJS</p>
                </div>
                <div className='Sk_ImageText three'>
                  <img loading='lazy' className='Sk_Image' src={SQL} alt='Logo of PHP' />
                  <p>SQL</p>
                </div>
                <div className='Sk_ImageText four'>
                  <img loading='lazy' className='Sk_Image' src={PHP} alt='Logo of PHP' />
                  <p>PHP</p>
                </div>
                <div className='Sk_ImageText five'>
                  <img loading='lazy' className='Sk_Image' src={Python} alt='Logo of Python' />
                  <p>Python</p>
                </div>
                <div className='Sk_ImageText eight'>
                  <img loading='lazy' className='Sk_Image' src={Express} alt='Logo of Express' />
                  <p>Express</p>
                </div>
              </div>

              <div className='Sk_BoxImageText' data-content id='design'>
                <div className='Sk_ImageText eight'>
                  <img loading='lazy' className='Sk_Image' src={Figma} alt='Logo of Figma' />
                  <p>Figma</p>
                </div>
              </div>

              <div className='Sk_BoxImageText' data-content id='versionControl'>
                <div className='Sk_ImageText one'>
                  <img loading='lazy' className='Sk_Image' src={Git} alt='Logo of Git' />
                  <p>Git</p>
                </div>
                <div className='Sk_ImageText four'>
                  <img loading='lazy' className='Sk_Image' src={GitHub} alt='Logo of GitHub' />
                  <p>GitHub</p>
                </div>
                <div className='Sk_ImageText two'>
                  <img loading='lazy' className='Sk_Image' src={PostgreSQL} alt='Logo of PostgreSQL' />
                  <p>PostgreSQL</p>
                </div>
                <div className='Sk_ImageText five'>
                  <img loading='lazy' className='Sk_Image' src={MongoDB} alt='Logo of MongoDB' />
                  <p>MongoDB</p>
                </div>
                <div className='Sk_ImageText eight'>
                  <img loading='lazy' className='Sk_Image' src={Docker} alt='Logo of GitHub' />
                  <p>Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
