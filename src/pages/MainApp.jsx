import { StrictMode } from 'react'
import '../styles/global.css'
import { HeroSection, Navbar, Testimonios, Profesionales, Psicoterapia, Footer, Contacto, Aromaterapia, CharlasInstitucionales } from '../components'
import { UserProvider } from '../context/UserProvider.jsx'
import { Route, Routes, useLocation } from 'react-router'
import { Checkout, FooterTienda, HeaderTienda, ProductoDetalle, Tienda } from '../components/tienda'
import { Gracias } from './Gracias.jsx'

export const MainApp = () => {

  const location = useLocation()
  const isTiendaRoute = location.pathname.includes('/tienda')

  return (

    
    <UserProvider>
      { isTiendaRoute? <HeaderTienda /> : <Navbar /> }      

      <Routes>
        <Route path="/" element={ <HeroSection /> } ></Route>
        <Route path="/psicoterapia" element={ <Psicoterapia /> } ></Route>
        <Route path="/institucional" element={ <CharlasInstitucionales /> } ></Route>
        <Route path="/profesionales" element={ <Profesionales /> } ></Route>
        <Route path="/aromaterapia" element={ <Aromaterapia /> } ></Route>
        <Route path="/testimonios" element={ <Testimonios /> } ></Route>
        <Route path="/contacto" element={ <Contacto /> } ></Route>
        <Route path="/tienda" element={ <Tienda /> } ></Route>
        <Route path="/tienda/productos/:id" element={ <ProductoDetalle /> } ></Route>
        <Route path="/tienda/checkout" element={ <Checkout /> } ></Route>
        <Route path="/gracias" element={ <Gracias /> } ></Route>
      </Routes>
      
      {isTiendaRoute?  <FooterTienda /> : <Footer /> }      
    </UserProvider>
  )
}