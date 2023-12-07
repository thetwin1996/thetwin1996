import './Works.css'
import { FormattedMessage } from 'react-intl'
import { useEffect, useState } from 'react'
import { Filter } from '../../components/filter/Filter.jsx'
import { Pagination } from '../../components/pagination/Pagination.jsx'
import jsonData from '../../assets/mock/data.js'
import { Modal } from '../../components/modal/Modal.jsx'
import { Projects } from '../../components/projects/Projects.jsx'

export function Works () {
  // Datos a listar.
  const [data, setData] = useState(jsonData)
  // Tamaño de data.
  const [dataLength, setDataLength] = useState(jsonData.length)
  // Página actual.
  const [currentPage, setCurrentPage] = useState(1)
  // Cantidad de proyectos por página.
  const productsPerPage = 6

  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  return (
    <div className='Wo_Works'>
      <div className='Wo_WorksContent container'>
        <div className='Wo_Content padding'>
          <div className='Wo_Titles'>
            <h3 className='Wo_Title1'><span>04.</span><FormattedMessage id='Wo_Title1' defaultMessage='' /></h3>
            <h3 className='Wo_Title2'><span><FormattedMessage id='Wo_Title2_1' defaultMessage='' /></span><FormattedMessage id='Wo_Title2_2' defaultMessage='' /></h3>
          </div>
          <Filter setData={setData} setDataLength={setDataLength} jsonData={jsonData} />
          <Projects data={data} currentPage={currentPage} productsPerPage={productsPerPage} />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage} dataLength={dataLength} />
          <Modal jsonData={jsonData} />
        </div>
      </div>
    </div>
  )
}
