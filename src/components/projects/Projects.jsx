import './Projects.css'
import { FormattedMessage } from 'react-intl'
// import { GithubIcon, LinkIcon } from '../../elements/project-icons/ProjectIcons.jsx'
import { GithubIcon } from '../../elements/project-icons/ProjectIcons.jsx'

export function Projects ({ data, currentPage, productsPerPage }) {
  // Posición final de cada página.
  const lastIndex = currentPage * productsPerPage // 1 * 6 = 6
  // Posición inicial de cada página.
  const firstIndex = lastIndex - productsPerPage // 6 - 6 = 0

  return (
    <div className='Project_Projects'>
      {data && data.map(d => (
        <div id={d.id} key={d.id} className='Project_Project'>
          {d.image.map(i => i.cover === true && (<img key={i.id} className='Project_Image' src={i.url} alt='Project Image' loading='lazy' />))}
          <div className='Project_Texts'>
            <div className='Project_Name'>
              <h4><FormattedMessage id={d.name + `${d.id}`} defaultMessage='' /></h4>
            </div>
          </div>
          <p className='Project_Description'><FormattedMessage id={d.description + `${d.id}`} defaultMessage='' /></p>
          <div className='Project_Texts2'>
            <span className='Project_Role'><FormattedMessage id={d.role + `${d.id}`} defaultMessage='' /></span>
            <div className='Project_BuiltsWith'>{d.builtWith.map(bw => (<span key={bw.id} className='Project_BuiltWith'>{bw.name}</span>))}</div>
            <div className='Project_Links'>
              <a className='Project_GitHub' href={d.github}><GithubIcon /></a>
              {/* <a className='Project_Link' href={d.link}><LinkIcon /></a> */}
            </div>
          </div>
        </div>
      )).slice(firstIndex, lastIndex)}
    </div>
  )
}
