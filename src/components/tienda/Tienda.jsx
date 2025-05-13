import { ListFilter } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useProductos } from "../../utils/useProductos";
import { Link } from "react-router";
import { useEffect, useState } from "react";


export const Tienda = () => {

   const {productos} = useProductos()
   const [productosOrdenados, setProductosOrdenados] = useState([])
   const [orden, setOrden] = useState('default')

   useEffect(() => {
    let copia = [...productos];

    if( orden === 'precio-mayor' ) {
      copia.sort( (a,b) => b.precio - a.precio )
    } else if ( orden === 'precio-menor') {
      copia.sort( (a,b) => a.precio - b.precio )
    }

    setProductosOrdenados(copia)

   }, [productos, orden])


  return (
    <div className="bg-white font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-[url('/banner-velas.jpg')] bg-cover bg-center h-100 flex items-center justify-center">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
        >
            <source src="https://azlmyzhfvhsvsbdxarvt.supabase.co/storage/v1/object/public/productos.img//tienda_fondo.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>
        <div className="absolute inset-0 bg-[#F4E3CF]/10 z-10"></div>

        <h2 className="text-4xl text-white font-bold bg-black/40 px-6 py-2 rounded-lg z-1">VELAS AROMÁTICAS</h2>
      </section>

      {/* Filtro + Orden */}
      <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-6 py-6 border-b bg-[#f9f9f9] shadow-sm">
        {/* Filtro */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm hover:shadow hover:border-[#6CA6A0] transition-all">
          <ListFilter className="w-5 h-5 text-[#6CA6A0]" />
          <span className="text-gray-700 font-medium">Filtrar</span>
        </button>

        {/* Contador de productos */}
        <span className="text-sm text-gray-600 font-medium hidden md:block">
          { productos.length } artículo{ productos.length !== 1 ? 's' : '' }
        </span>

        {/* Selector de orden */}
        <div className="flex items-center gap-2">
          <label htmlFor="orden" className="text-sm text-gray-600 font-medium hidden md:inline">Ordenar por:</label>
          <select
            id="orden"
            className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6CA6A0]"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="default">Características</option>
            <option value="precio-menor">Precio: menor a mayor</option>
            <option value="precio-mayor">Precio: mayor a menor</option>
          </select>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productosOrdenados.map( producto => (
          <ProductCard 
            key={`product-cart-${producto.nombre}`}
            producto = {producto}
          />
        ) ) }
      </section>
    </div>
  )
}
