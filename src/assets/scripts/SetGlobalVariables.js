const website = window.getComputedStyle(document.documentElement).getPropertyValue('--website')
export function Website () {
  document.querySelectorAll('.Website').forEach(e => {
    e.setAttribute('href', website)
  })
}

const email = window.getComputedStyle(document.documentElement).getPropertyValue('--email')
export function Email () {
  document.querySelectorAll('.Email').forEach(e => {
    e.setAttribute('href', `mailto:${email}`)
  })
}

const whatsapp = window.getComputedStyle(document.documentElement).getPropertyValue('--whatsapp')
export function Whatsapp () {
  document.querySelectorAll('.Whatsapp').forEach(e => {
    e.setAttribute('href', whatsapp)
  })
}

const instagram = window.getComputedStyle(document.documentElement).getPropertyValue('--instagram')
export function Instagram () {
  document.querySelectorAll('.Instagram').forEach(e => {
    e.setAttribute('href', instagram)
  })
}

const github = window.getComputedStyle(document.documentElement).getPropertyValue('--github')
export function Github () {
  document.querySelectorAll('.Github').forEach(e => {
    e.setAttribute('href', github)
  })
}

const linkedin = window.getComputedStyle(document.documentElement).getPropertyValue('--linkedin')
export function Linkedin () {
  document.querySelectorAll('.Linkedin').forEach(e => {
    e.setAttribute('href', linkedin)
  })
}

const twitter = window.getComputedStyle(document.documentElement).getPropertyValue('--twitter')
export function Twitter () {
  document.querySelectorAll('.Twitter').forEach(e => {
    e.setAttribute('href', twitter)
  })
}

const facebook = window.getComputedStyle(document.documentElement).getPropertyValue('--facebook')
export function Facebook () {
  document.querySelectorAll('.Facebook').forEach(e => {
    e.setAttribute('href', facebook)
  })
}

const certificate = window.getComputedStyle(document.documentElement).getPropertyValue('--certificate')
export function Certificate () {
  document.querySelectorAll('.Certificate').forEach(e => {
    e.setAttribute('href', certificate)
  })
}
