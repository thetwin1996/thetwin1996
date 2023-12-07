export function DetectingScrolling () {
  window.addEventListener('scroll', function () {
    // Capturar la Barra de Menú y ponerle un height más pequeño.
    const navbar = document.querySelector('.N_navbar')
    if (window.pageYOffset > 0) {
      navbar.classList.add('N_SmallerNavbar')
    } else {
      navbar.classList.remove('N_SmallerNavbar')
    }
    // Centrar verticalmente el botón de Cerrar el Menú en la vista Móvil.
    const buttonCloseMenu = document.querySelector('.N_buttonCloseMenu')
    if (window.pageYOffset > 0) {
      buttonCloseMenu.classList.add('N_buttonCloseMenuDetectingScrolling')
    } else {
      buttonCloseMenu.classList.remove('N_buttonCloseMenuDetectingScrolling')
    }
  })
}
