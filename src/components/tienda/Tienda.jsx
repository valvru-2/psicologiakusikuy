import { ListFilter } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useProductos } from "../../utils/useProductos";
import { Link } from "react-router";


export const Tienda = () => {

   const {productos} = useProductos()


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
      <section className="flex justify-between items-center px-6 py-6 border-b text-center">
        <button className="flex items-center space-x-2 border px-3 py-2 rounded">
          <span><ListFilter /></span>
          <span>Filtrar</span>
        </button>
        <span className="hidden md:block">
          { productos.reduce( (acc) => acc + 1, 0 ) } artículos
        </span>
        <select className="border px-3 py-2 rounded">
          <option value="default">Características</option>
          <option value="precio-mayor">Precio: mayor a menor</option>
          <option value="precio-menor">Precio: menor a mayor</option>
        </select>
      </section>

      {/* Grid de productos */}
      <section className="px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos.map( producto => (
          <Link 
            key={`link-product-cart-${producto.nombre}`}
            to={ `/tienda/productos/${producto.id}` }>
            <ProductCard 
              key={`product-cart-${producto.nombre}`}
              producto = {producto}
            />
          </Link>
        ) ) }
      </section>
    </div>
  )
}
