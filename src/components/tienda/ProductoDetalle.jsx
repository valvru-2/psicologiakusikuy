import { Facebook, Instagram } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { useCarrito } from "../../utils/useCarrito"
import { Link, useParams } from "react-router"
import { useProductos } from "../../utils/useProductos"
import { useState } from "react"




export const ProductoDetalle = () => {

  const agregarProducto = useCarrito( (state) => state.agregarProducto )

  const [cantidad, setCantidad] = useState(1)
  const handleCantidad = ( {target} ) => {
    setCantidad(Number(target.value))
  }
  console.log(cantidad)
  
  const {productos, loading} = useProductos()
  const { id } = useParams()
  
  
  const producto = productos.find( product => product.id === Number(id) )
  
  
  if (loading) return <div>Cargando producto...</div>;


  
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* Botón de regreso */}
      <div className="mb-6">
        <Link
         to='/tienda' className="text-sm text-[#6CA6A0] hover:underline">
          ← Volver a la tienda
        </Link>
      </div>
      {/* Layout principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imagen del producto */}
        <div>
          <img
            src={producto.imagen_url}
            alt="Vela aromática de lavanda"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        

        <div>
          {/* Detalles del producto */}          
          <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
          <p className="text-sm text-gray-500 mb-4">Colección Aromaterapia</p>
          <p className="text-xl text-[#6CA6A0] font-semibold mb-6">S/ {producto.precio}.00</p>

          <p className="text-gray-700 mb-6">
            Vela natural con aroma a lavanda, ideal para relajación, meditación y descanso. Hecha a mano con esencias naturales y cera vegetal.
          </p>

          {/* Stock (opcional con Supabase) */}
          <p className="text-sm text-gray-600 mb-4">Stock disponible: 14 unidades</p>

          {/* Selector de cantidad */}
          <div className="flex items-center space-x-4 mb-6">
            <label htmlFor="cantidad" className="text-sm font-medium">
              Cantidad:
            </label>
            <input
            onChange={ (e) => handleCantidad(e) }
              id="cantidad"
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border px-3 py-2 rounded"
            />
          </div>

          <button 
            onClick={() => {
              if (cantidad < 1) return alert("La cantidad debe ser al menos 1");
              agregarProducto({ ...producto, cantidad });
            }}            
            className="w-full bg-[#6CA6A0] text-white text-center py-3 rounded-lg text-lg hover:bg-[#5e9c97]">
            Agregar al carrito
          </button>
          {/* Compartir en redes */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-2">Compartir este producto:</p>
            <div className="flex space-x-4 text-[#6CA6A0] text-xl">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` } target="_blank" rel="noopener noreferrer"
              ><Facebook /><i className="fab fa-facebook hover:text-[#3b5998]"></i></a>
              <a href={`https://wa.me/?text=${encodeURIComponent(`Mirá este producto: ${window.location.href}`)}`} target="_blank" rel="noopener noreferrer"
              ><Instagram /><i className="fab fa-instagram hover:text-[#E1306C]"></i></a>
              <a href={`https://wa.me/?text=${encodeURIComponent(`Mirá este producto: ${window.location.href}`)}`} target="_blank" rel="noopener noreferrer"
              ><SiWhatsapp /><i className="fab fa-whatsapp hover:text-green-500"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Productos relacionados */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">También te puede interesar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Tarjeta ejemplo */}
          {["rosas", "eucalipto", "vainilla", "menta"].map((fragancia) => (
            <div key={fragancia} className="bg-white shadow rounded p-4 text-center">
              <img
                src={`/vela-${fragancia}.jpg`}
                alt={`Vela de ${fragancia}`}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="font-medium capitalize">Vela de {fragancia}</p>
              <p className="text-sm text-gray-500">S/ 35.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
