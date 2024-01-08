// import PDF from '../../assets/Anniel Valle Valera.pdf'

// export function Resume () {
//   return (
//     <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
//       <object data={PDF} type='application/pdf' width='100%' height='99%' />
//     </div>
//   )
// }

// import React from 'react'
// import PDF from '../../assets/Anniel Valle Valera.pdf'

// export const Resume = () => {
//   return (
//     <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
//       <iframe src={PDF} width='100%' height='100%' />
//     </div>
//   )
// }

import React from 'react'
import PDF from '../../assets/Anniel Valle Valera.pdf'

export const Resume = () => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <iframe src={PDF} name='demo' width='100%' height='100%' />
    </div>
  )
}
