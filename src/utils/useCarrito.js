import { create } from "zustand"
import { persist } from "zustand/middleware"


export const useCarrito = create( 
    persist(
        (set) => ({
            productosCarrito: [],
        
            agregarProducto: ( producto ) => 
                set( (state) => {
                    const existente = state.productosCarrito.find( (p) => p.id == producto.id )
                    
                    if( existente ) {
                        return {                    
                            productosCarrito: state.productosCarrito.map( (p) => 
                                p.id === producto.id
                                ? {...p, cantidad: p.cantidad + producto.cantidad}
                                : p
                             )
                        }
                    }
                    
                    return { productosCarrito: [...state.productosCarrito, {
                        id: producto.id,
                        nombre: producto.nombre,
                        precio: producto.precio,
                        cantidad: producto.cantidad,
                        imagen: producto.imagen_url}] };
                    } ),
            
            removerProducto: ( producto ) =>
                set( (state) => ({
                    productosCarrito: state.productosCarrito.filter( p => p.id !== producto.id )
                }) ),
            
            vaciarCarrito: () => set( {productosCarrito: []} )
        }),
        {
            name: "carrito-storage",
        }
    )
 )