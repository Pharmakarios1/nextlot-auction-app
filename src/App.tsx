import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.js'
import Home from './pages/HomePage/index.js'
import About from './pages/About.js'
import Bidboard from './pages/BidPage/index.js'
import Login from './pages/Auth/Login.js'
import Signup from './pages/Auth/Signup.js'
import Dashboard, { Others } from './pages/UserDashboard/index.js'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import BidDetailPage from './pages/BidPage/_partials/BidDetailPage/Index.js'
import PlaceBid from './pages/BidPage/_partials/PlaceBid/PlaceBid.js'
import LotMatch from './pages/LotMatch/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'others', element: <Others /> },
      { path: '/bidlisting', element: <Bidboard /> },
      {
        path: '/bidlisting/:id',
        element: <BidDetailPage />,
      },
      {
        path: '/bidlisting/bid/:id',
        element: <PlaceBid />,
      },
      { path: '/lotmatch', element: <LotMatch /> },
      {
        path: '/login',
        element: (
         
         
            <Login />
         
        ),
      },
      {
        path: '/signup',
        element: (
        
            <Signup />
         
        ),
      },
      {
        path: '/dashboard',
        element: (
        
            <Dashboard />
         
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
