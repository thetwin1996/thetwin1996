import './Pagination.css'
import { FormattedMessage } from 'react-intl'
import { Next, Previous } from '../../elements/pagination-icons/PaginationIcons.jsx'

export function Pagination ({ currentPage, setCurrentPage, productsPerPage, dataLength }) {
  // Páginas.
  const pageNumbres = []
  // Cantidad de páginas.
  const pages = Math.ceil(dataLength / productsPerPage)
  // Poner los números de páginas.
  for (let i = 1; i <= pages; i++) {
    pageNumbres.push(i)
  }
  // Funciones para los botones siguiente y anterior.
  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  // Función para cambiar la página al hacer click en el númenor específico de página de la paginación.
  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }

  return (
    <>
      {
        dataLength > productsPerPage
          ? (
            <nav className='Pa_Paginations'>
              {
                currentPage === 1
                  ? (
                    <button className='Pa_Pagination-Previous' onClick={onPreviusPage} disabled><Previous /><FormattedMessage id='Pa_Previous' defaultMessage='' /></button>)
                  : (
                    <button className='Pa_Pagination-Previous' onClick={onPreviusPage}><Previous /><FormattedMessage id='Pa_Previous' defaultMessage='' /></button>)
              }
              <ul className='Pa_Pagination-List'>
                {pageNumbres.map(noPage => (
                  <li key={noPage}><a className={`Pa_Pagination ${noPage === currentPage ? 'Pa_ActivePagination' : ''}`} onClick={() => onSpecificPage(noPage)}>{noPage}</a></li>
                ))}
              </ul>
              {
                currentPage >= pageNumbres.length
                  ? (
                    <button className='Pa_Pagination-Next' onClick={onNextPage} disabled><FormattedMessage id='Pa_Next' defaultMessage='' /><Next /></button>)
                  : (
                    <button className='Pa_Pagination-Next' onClick={onNextPage}><FormattedMessage id='Pa_Next' defaultMessage='' /><Next /></button>)
              }
            </nav>)
          : ('')
      }
    </>
  )
}
