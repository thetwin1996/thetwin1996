import './Filter.css'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

export function Filter ({ setData, setDataLength, jsonData }) {
  const filter = () => {
    let newData = []
    const elements = document.querySelectorAll('.F_Filter')
    elements.forEach(element => {
      element.addEventListener('click', () => {
        // Filtar los datos correspondientemente al filtro seleccionado.
        const type = element.getAttribute('data-filter')
        if (type === 'all') {
          newData = jsonData
          setDataLength(newData.length)
          setData(newData)
        } else {
          newData = jsonData.filter((d) => d.type === type)
          setDataLength(newData.length)
          setData(newData)
        }
        // Poner ACTIVO el filtro seleccionado.
        elements.forEach(element => {
          element.classList.remove('F_ActiveFilter')
        })
        element.classList.add('F_ActiveFilter')
      })
    })
  }

  useEffect(() => {
    filter()
  }, [])

  return (
    <div className='F_Filters'>
      <button data-filter='all' className='F_Filter F_ActiveFilter'><FormattedMessage id='F_Filter1' defaultMessage='' /></button>
      <button data-filter='full-stack' className='F_Filter'><FormattedMessage id='F_Filter2' defaultMessage='' /></button>
      <button data-filter='frontend' className='F_Filter'><FormattedMessage id='F_Filter3' defaultMessage='' /></button>
      <button data-filter='backend' className='F_Filter'><FormattedMessage id='F_Filter4' defaultMessage='' /></button>
      <button data-filter='design' className='F_Filter'><FormattedMessage id='F_Filter5' defaultMessage='' /></button>
    </div>
  )
}
