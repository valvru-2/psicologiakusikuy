// import { supabase } from '../lib/supabaseClient'

import { Link } from "react-router";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

  

export const Aromaterapia = () => {
  
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
  
    const fetchProductos = async() => {
      
      
      const { data, error } = await supabase.from('productos').select('*').limit(3);
  
      
    
      if (error) {
        console.error(error);
        return { props: { productos: [] } };
      } else {
        console.log(data)
        setProductos(data)
      }
  
    }
  
    fetchProductos()
  
  
  }, [])




    return (
      <section className="bg-[#FAFAFA] py-16 px-8 mt-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-4 text-[#1E293B]">
            Aromaterapia que acompaña tu bienestar
          </h2>
          <p className="text-[#1E293B] mb-12 max-w-xl">
            Explora nuestra línea de esencias y velas naturales diseñadas para acompañar procesos de calma, concentración y reconexión interior.
          </p>
  
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md overflow-hidden bg-white flex flex-col"
              >
                { producto.imagen? (
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="h-48 w-full object-cover"
                  />
                ) :
                ( <div className="w-full h-48 bg-gray-100 rounded-t-xl flex items-center justify-center text-sm text-gray-500">
                  Sin imagen
                </div> )
                }
                <div className="p-6 space-y-3 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-[#1E293B]">
                      {producto.nombre}
                    </h3>
                    <span className="bg-[#FFD6A5] text-[#1E293B] text-xs font-medium px-3 py-1 rounded-full">
                      {producto.emoji} {producto.beneficios}
                    </span>
                  </div>
                  <p className="text-sm text-[#1E293B] flex-grow">
                    {producto.descripcion}
                  </p>
                  <button className="bg-[#6CA6A0] hover:bg-[#55847F] text-white text-sm font-semibold px-4 py-2 rounded-xl w-fit">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-16">
            <p className="text-[#1E293B] text-lg mb-4">
              Descubrí todos nuestros productos pensados para tu bienestar diario.
            </p>
            <Link
              to='/tienda'
              className="bg-[#6CA6A0] hover:bg-[#55847F] text-white rounded-xl px-6 py-3 text-base font-medium"
            >
              Explorar tienda
            </Link>
            {/* <button className="bg-[#6CA6A0] hover:bg-[#55847F] text-white rounded-xl px-6 py-3 text-base font-medium">
            </button> */}
          </div>
        </div>
      </section>
    );
  }