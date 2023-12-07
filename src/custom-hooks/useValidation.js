import { useState } from 'react'

export function useValidation () {
  const [validForm, setValidForm] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

  const [name, setName] = useState({ value: '', valid: null })
  const [email, setEmail] = useState({ value: '', valid: null })
  const [message, setMessage] = useState({ value: '', valid: null })

  const expressions = {
    // name: { e: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, m: 'CU_Error1' },
    // email: { e: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, m: 'CU_Error2' },
    // message: { e: /^[a-zA-Z0-9,.]{4,300}$/, m: 'CU_Error3' },
    name: { e: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, m: 'CU_Error1' },
    email: { e: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, m: 'CU_Error2' },
    message: { e: /^[a-zA-ZÀ-ÿ\s0-9,.]{4,1500}$/, m: 'CU_Error3' }
  }

  const onChange = (event) => {
    const v = event.target.value
    const n = event.target.name

    if (v.startsWith(' ')) return

    if (n === 'name') {
      setName({ ...name, value: v })
    }

    if (n === 'email') {
      setEmail({ ...email, value: v })
    }

    if (n === 'message') {
      setMessage({ ...message, value: v })
    }
  }

  const validation = (event) => {
    const v = event.target.value
    const n = event.target.name

    if (n === 'name' && v !== '') {
      if (expressions.name.e.test(name.value)) {
        setName({ ...name, valid: 'true' })
      } else {
        setName({ ...name, valid: 'false' })
        setShowMessage(true)
        setValidForm(null)
      }
    }

    if (n === 'email' && v !== '') {
      if (expressions.email.e.test(email.value)) {
        setEmail({ ...email, valid: 'true' })
      } else {
        setEmail({ ...email, valid: 'false' })
        setShowMessage(true)
        setValidForm(null)
      }
    }

    if (n === 'message' && v !== '') {
      if (expressions.message.e.test(message.value)) {
        setMessage({ ...message, valid: 'true' })
      } else {
        setMessage({ ...message, valid: 'false' })
        setShowMessage(true)
        setValidForm(null)
      }
    }

    if (n === 'name' && v === '') {
      setName({ ...name, valid: null })
    }

    if (n === 'email' && v === '') {
      setEmail({ ...email, valid: null })
    }

    if (n === 'message' && v === '') {
      setMessage({ ...message, valid: null })
    }
  }

  const clean = () => {
    setName({ value: '', valid: null })
    setEmail({ value: '', valid: null })
    setMessage({ value: '', valid: null })
  }

  return { name, email, message, onChange, validation, clean, validForm, setValidForm, showMessage, setShowMessage }
}
