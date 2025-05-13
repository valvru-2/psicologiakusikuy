import { Link } from "react-router"
import { useCarrito } from "../../utils/useCarrito"



export const ProductCard = ( {producto} ) => {
  
  const agregarProducto = useCarrito( (state) => state.agregarProducto )

  return (
    // <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    //     <Link
    //       key={`link-product-cart-${producto.nombre}`}
    //       to={ `/tienda/productos/${producto.id}` }
    //     >
    //       <img src={producto.imagen_url} alt="Producto" className="w-full h-48 object-cover" />
    //     </Link>
    //     <div className="p-4">
    //         <h3 className="text-lg font-semibold">{producto.nombre}</h3>
    //         <p className="text-sm text-gray-600">{producto.beneficios}</p>
    //         <p className="mt-2 text-[#6CA6A0] font-bold text-lg">S/ {producto.precio}.00</p>
    //         <button 
    //           onClick={ () => agregarProducto({ ...producto, cantidad: 1 }) }
    //           className="mt-4 w-full bg-[#6CA6A0] text-white py-2 rounded hover:bg-[#5e9c97]">
    //         Agregar al carrito
    //         </button>
    //     </div>
    // </div>

  

    // <div className="bg-white border border-gray-200 rounded-xl p-4 transition-transform hover:shadow-md hover:-translate-y-1">
    //   <Link
    //     key={`link-product-cart-${producto.nombre}`}
    //     to={`/tienda/productos/${producto.id}`}
    //     className="block"
    //   >
    //     <div className="bg-white rounded-lg overflow-hidden">
    //       <img
    //         src={producto.imagen_url}
    //         alt={`Imagen de ${producto.nombre}`}
    //         className="w-full h-64 object-contain"
    //       />
    //     </div>
    //     <div className="mt-4">
    //       <h3 className="text-base font-medium text-gray-800 mb-1">{producto.nombre}</h3>
    //       <p className="text-sm text-gray-500 mb-2">{producto.beneficios}</p>
    //       <p className="text-[#6CA6A0] font-semibold text-base">S/ {producto.precio}.00</p>
    //     </div>
    //   </Link>

    //   <button
    //     onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
    //     className="mt-4 w-full bg-[#6CA6A0] text-white py-2 rounded-lg hover:bg-[#5e9c97] transition-colors duration-200"
    //   >
    //     Agregar al carrito
    //   </button>
    // </div>

    <div className="bg-white border border-gray-200 rounded-xl p-4 transition-transform hover:shadow-md hover:-translate-y-1">
      <Link
        key={`link-product-cart-${producto.nombre}`}
        to={`/tienda/productos/${producto.id}`}
        className="block"
      >
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={producto.imagen_url}
            alt={`Imagen de ${producto.nombre}`}
            className="w-full h-64 object-contain"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-base font-medium text-gray-800 mb-1">{producto.nombre}</h3>
          <p className="text-sm text-gray-500 mb-2">{producto.beneficios}</p>
          <p className="text-[#6CA6A0] font-semibold text-base">S/ {producto.precio}.00</p>
        </div>
      </Link>

      <button
        onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
        className="mt-4 w-full bg-[#6CA6A0] text-white py-2 rounded-lg hover:bg-[#5e9c97] transition-colors duration-200"
      >
        Agregar al carrito
      </button>
    </div>

  )
}
