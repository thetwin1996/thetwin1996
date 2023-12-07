import PDF from '../../assets/Anniel Valle Valera.pdf'

export function Resume () {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <object data={PDF} type='application/pdf' width='100%' height='99%' />
    </div>
  )
}
