import { useEffect, useState } from 'react'
import './Modal.css'
import { Pagination } from '../pagination/Pagination.jsx'
import { CloseModalIcon } from '../../elements/close-modal-icon/CloseModalIcon.jsx'

export function Modal ({ jsonData }) {
  // Datos a listar.
  const [data, setData] = useState([])
  // Tamaño de data.
  const [dataLength, setDataLength] = useState(0)
  // Página actual.
  const [currentPage, setCurrentPage] = useState(1)
  // Cantidad de proyectos por página.
  const productsPerPage = 1
  // Posición final de cada página.
  const lastIndex = currentPage * productsPerPage // 1 * 6 = 6
  // Posición inicial de cada página.
  const firstIndex = lastIndex - productsPerPage // 6 - 6 = 0

  // Padado el elemento HTML, obtiene su atributo id.
  // Luego con el id se busca el arreglo imágenes y el tamaño del arreglo de imágenes del proyecto en cuestión.
  const projectImages = (element) => {
    const projectId = element.getAttribute('id')
    if (jsonData) {
      // Devuelve el arreglo de las imágenes del proyecto en cuestión, sin contar la primera pq es solo para la imagen de perfil del proyecto.
      const imageArray = jsonData[projectId].image.slice(0)
      setData(imageArray)
      setDataLength(imageArray.length)
    }
  }

  // Abrir el Modal
  const showMoreImages = () => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('Project_Image')) {
        // Capturar el elemento padre de la imagen para coger el id del proyecto.
        projectImages(e.target.parentElement)
        // Abrir el Modal.
        document.querySelector('.M_Modal').classList.add('M_Modal-open')
      }
    })
  }
  // Cerrar el Modal.
  const closeModal = () => {
    document.querySelector('.M_Modal-close').addEventListener('click', () => {
      document.querySelector('.M_Modal').classList.remove('M_Modal-open')
    })
  }

  useEffect(() => {
    showMoreImages()
    closeModal()
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  return (
    <div className='M_Modal'>
      <div className='M_Modal-inner'>
        <span className='M_Modal-close'><CloseModalIcon /></span>
        <div className='M_Modal-imgs'>
          {data && data.map(d => (
            <img key={d.id} className='M_Modal-img' src={d.url} alt='Project image' loading='lazy' />
          )).slice(firstIndex, lastIndex)}
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage} dataLength={dataLength} />
        </div>
      </div>
    </div>
  )
}
