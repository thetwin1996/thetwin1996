export function ToggleMenu () {
  // Obtener el menú.
  const menu = document.querySelector('.N_navbarMenu')

  // Obtener el botón de abrir el menú.
  const buttonOpenMenu = document.querySelector('.N_buttonOpenMenu')
  // Obtener el botón de cerrar el menú.
  const buttonCloseMenu = document.querySelector('.N_buttonCloseMenu')

  // Función que ejecutará la acción de abrir o cerrar el menú en cada caso.
  const Toggle = () => {
    // Abir o cerrar el menú.
    menu.classList.toggle('N_menuOpened')
  }
  // Escuchar, en los botones close y open, el evento click.
  buttonOpenMenu.addEventListener('click', () => { Toggle() })
  buttonCloseMenu.addEventListener('click', () => { Toggle() })
}
