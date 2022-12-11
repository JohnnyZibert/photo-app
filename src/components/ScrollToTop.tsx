import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    // })
    window.scroll(0, 10)
  }, [pathname])
  return null
}
