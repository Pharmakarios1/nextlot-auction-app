import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '@/components/customs/Footer.js'
import Header from '@/components/customs/Header.js'
import Breadcrumbs from '@/components/customs/Breadcrumb.js'

import ScrollToTop from '@/components/customs/ScrollToTop.js'

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="main-layout">
        <Breadcrumbs />
        <ScrollToTop />
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer />
    </>
  )
}

export default RootLayout
