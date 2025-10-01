import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.js'
import Home from './pages/HomePage/Home.js'
import About from './pages/About.js'
import Bidboard from './pages/BidPage/index.js'
import Compare from './pages/Compare.js'
import Login from './pages/Auth/Login.js'
import Signup from './pages/Auth/Signup.js'
import Dashboard from './pages/UserDashboard/Dashboard.js'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import BidsPage from './pages/BidPage/_partials/BidListing/index.js'
import BidDetailPage from './pages/BidPage/_partials/BidDetailPage/Index.js'
import PlaceBid from './pages/BidPage/_partials/PlaceBid/PlaceBid.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: '/bidboard', element: <Bidboard /> },
      { path: '/compare', element: <Compare /> },
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
      {
        path: '/bids',
        element: <PlaceBid />,
      },
      {
        path: '/bids/:id',
        element: <BidDetailPage />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
