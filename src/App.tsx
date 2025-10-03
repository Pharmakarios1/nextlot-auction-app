import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.js'
import Home from './pages/HomePage/index.js'
import About from './pages/About.js'
import Bidboard from './pages/BidPage/index.js'
import Login from './pages/Auth/Login.js'
import Signup from './pages/Auth/Signup.js'
import Dashboard from './pages/UserDashboard/Dashboard.js'
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
          <SignedOut>
            {' '}
            <Login />
          </SignedOut>
        ),
      },
      {
        path: '/signup',
        element: (
          <SignedOut>
            <Signup />
          </SignedOut>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <SignedIn>
            {' '}
            <Dashboard />
          </SignedIn>
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
