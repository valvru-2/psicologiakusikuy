import { useCarrito } from "../../utils/useCarrito"



export const ProductCard = ( {producto} ) => {
  
  const agregarProducto = useCarrito( (state) => state.agregarProducto )

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={producto.imagen_url} alt="Producto" className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
            <p className="text-sm text-gray-600">{producto.beneficios}</p>
            <p className="mt-2 text-[#6CA6A0] font-bold text-lg">S/ {producto.precio}.00</p>
            <button 
              onClick={ () => agregarProducto({ ...producto, cantidad: 1 }) }
              className="mt-4 w-full bg-[#6CA6A0] text-white py-2 rounded hover:bg-[#5e9c97]">
            Agregar al carrito
            </button>
        </div>
    </div>
  )
}
