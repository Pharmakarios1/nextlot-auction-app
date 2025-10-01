import { useLocation } from 'react-router-dom'

const useHome = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return {isHome}
 
}

export default useHome