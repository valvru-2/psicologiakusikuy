import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { useCarrito } from "../../utils/useCarrito";
import { Link } from "react-router";

export const CarritoSidebar = () => {
  const [abierto, setAbierto] = useState(false);

  const productosCarrito = useCarrito( (state) => state.productosCarrito );
  const removerProducto = useCarrito( (state) => state.removerProducto );

  console.log('Productos en el carrito:', productosCarrito);
  const total = productosCarrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <>
      {/* Botón flotante */}
    <button
      className="fixed bottom-6 right-6 bg-[#6CA6A0] text-white p-3 rounded-full shadow-lg z-40 hover:bg-[#5c948f]"
      onClick={() => setAbierto(true)}
      aria-label="Abrir carrito"
    >
      <div className="relative">
        <ShoppingCart />
        { productosCarrito.reduce( (acc, p) => acc + p.cantidad, 0 ) > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            { (productosCarrito.reduce( (acc, p) => acc + p.cantidad, 0 )) }
          </span>
        )}
      </div>
    </button>

      {/* Sidebar animado */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-96 max-w-full h-full bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-lg font-semibold">Tu carrito</h2>
              <button onClick={() => setAbierto(false)} aria-label="Cerrar">
                <X className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {productosCarrito.map((producto) => (
                <div key={producto.id} className="flex items-center gap-4">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{producto.nombre}</p>
                    <p className="text-sm text-gray-500">
                      S/ {producto.precio} x {producto.cantidad}
                    </p>
                  </div>
                  <p className="font-semibold">S/ {producto.precio * producto.cantidad}</p>
                  <Trash2
                    onClick={ () => {
                        removerProducto(producto)
                        console.log(productosCarrito)
                    } }
                    className="text-sm text-red-500 hover:underline cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Total y acción */}
            <div className="border-t p-6">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-bold">S/ {total.toFixed(2)}</span>
              </div>
              <Link
                to='/tienda/checkout'
                className="block w-full bg-[#6CA6A0] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#5c948f]"
              >
                Ir al pago
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
