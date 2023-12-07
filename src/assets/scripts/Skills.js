export function ToggleSkills () {
  const tabs = document.querySelectorAll('[data-target]')
  const tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Guardar todo el elemento HTML clikeado, incluyendo su contenido.
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('Sk_Active')
      })

      target.classList.add('Sk_Active')

      tabs.forEach(tab => {
        tab.classList.remove('Sk_Active')
      })
      tab.classList.add('Sk_Active')
    })
  })
}
