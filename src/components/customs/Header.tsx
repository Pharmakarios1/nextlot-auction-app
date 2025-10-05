import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//react-icons
import { FiUser } from 'react-icons/fi'
import { SiHandshakeProtocol } from 'react-icons/si'
import { Ellipsis, Home, Scale, Trophy, User } from 'lucide-react'
import { FcAbout } from 'react-icons/fc'
//third party library
import { cn } from '@/lib/utils.js'
import { Button } from '../ui/button.js'
import { ThemeToggle } from '@/context/Theme/Theme.js'
import useHome from '@/hooks/useHome.js'

const Header = () => {
  const [active, setActive] = useState('home')
  const isHome = useHome()
  const isAuthenticated = true

  const tabs = [
    { id: 'home', label: 'Home', icon: <Home size={22} />, href: '/' },
    { id: 'bidboard', label: 'Bidboard', icon: <Trophy size={22} />, href: '/bidlisting' },
    { id: 'lotmatch', label: 'Lotmatch', icon: <Scale size={22} />, href: '/lotmatch' },
    { id: 'about', label: 'About', icon: <FcAbout size={22} />, href: '/about' },
    // { id: 'others', label: 'Others', icon: <Ellipsis size={22} />, href: '/others' },
  ]
  return (
    <>
      <header className="h-16 sticky top-0 left-0 z-50  shadow-sm border-b-[1px] border-gray-200 dark:border-gray-500  backdrop-blur-2xl bg-white dark:bg-slate-950 ">
        <div className="header-layout">
          <Link to={'/'} className="flex place-items-center gap-2">
            <span className="w-8 h-8 border-[1px] border-gray-400  rounded-full grid place-content-center">
              <SiHandshakeProtocol className="text-green-400 text-md md:text-2xl" />
            </span>{' '}
            <p className="text-gradient text-xl ">NextLot</p>
          </Link>
          <nav className="hidden   md:block">
            <ul className="header-layout gap-3 p-2 ">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <NavLink
                    to={tab.href}
                    onClick={() => setActive(tab.id)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-500'
                    }
                  >
                    <span>{tab.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex place-items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" className="border-[1px]">
              <Link to={'/login'}>
                <FiUser />
                <p className="hidden md:block">Sign In</p>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <footer className="fixed bottom-0 left-0 w-full header-layout md:hidden shadow-sm border-t border-gray-200 dark:border-none z-1 bg-white dark:bg-slate-950">
        <ul className="header-layout gap-3 p-2 ">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <NavLink
                to={tab.href}
                onClick={() => setActive(tab.id)}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center  text-[10px] font-head transition min-w-[50px] w-fit h-fit rounded-md p-1',
                    isActive ? 'bg-gradient  text-white' : 'text-gray-600 hover:bg-gray-200',
                  )
                }
              >
                <div className="text-[6px]"> {tab.icon}</div>
                <span>{tab.label}</span>
              </NavLink>
            </li>
          ))}
          {/* {isAuthenticated && <Button variant='ghost' className='cursor-pointer flex flex-col gap-0 text-[10px] text-gray-500 '> <User size={22} />Other</Button>} */}
        </ul>
      </footer>
    </>
  )
}

export default Header
