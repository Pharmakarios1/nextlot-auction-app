import { Outlet } from 'react-router-dom'
import Footer from '@/components/customs/Footer.js'
import Header from '@/components/customs/Header.js'
import Breadcrumbs from '@/components/customs/Breadcrumb.js'

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="main-layout">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
