import { useEffect, useState } from 'react'

export function useLoadingLogo () {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return { loaded }
}
