import { Search } from "lucide-react"
import { CarritoSidebar } from "./CarritoSidebar"
import { Link, useLocation } from "react-router"


export const HeaderTienda = () => {

   const location = useLocation()
   const esCheckout = location.pathname === '/tienda/checkout'

  return (
    <>
        {/* Banner superior */}
        <div className="bg-black overflow-hidden">
          <div
            className="flex whitespace-nowrap text-white text-sm py-1"
            style={{
              animation: 'scroll-horizontal 25s linear infinite',
            }}
          >
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
            <span className="px-8">DELIVERY GRATIS POR COMPRAS MAYORES A S/ 200</span>
          </div>
        </div>





        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4 shadow-md">
            <Link to='/tienda'>
              <h1 className="text-xl font-semibold tracking-tight">Tienda Aromática</h1>
            </Link>
            <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-[#6CA6A0]">Aromaterapia</a>
            <a href="#" className="hover:text-[#6CA6A0]">Velas</a>
            <a href="#" className="hover:text-[#6CA6A0]">Aceites</a>
            <a href="#" className="hover:text-[#6CA6A0]">Contacto</a>
            </nav>
            <div className="flex items-center space-x-4">
            <button><Search /></button>
            { !esCheckout && <CarritoSidebar /> }            
            {/* <button><ShoppingCart /></button>           */}
            </div>
        </header>
    </>
  )
}
