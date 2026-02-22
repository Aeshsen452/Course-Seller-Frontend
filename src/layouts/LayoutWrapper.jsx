import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
export default function LayoutWrapper() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
