import { useEffect } from "react";
import { Link } from "react-router"
import { BotonAgendar } from "./BotonAgendar";


export const HeroSection = () => {

  useEffect(() => {    

    if(window.Calendly) {
      console.log('Calendly loaded')
    }  
  }, []);

  return (
    <>
      <div className="bg-[#FAFAFA] text-[#1E293B] mt-14">
      {/* HERO */}
      <section
        className="relative px-6 md:px-16 py-20 text-center overflow-hidden h-120"
      >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://azlmyzhfvhsvsbdxarvt.supabase.co/storage/v1/object/public/productos.img//fondo4.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa para oscurecer ligeramente el video */}
      <div className="absolute inset-0 bg-[#F4E3CF]/30 z-0"></div>

        <div className="absolute inset-0 bg-[#F4E3CF]/80"></div> {/* Capa translúcida */}
        
        <div className="relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl text-[#003c58] mb-4">
            Un espacio de escucha, contención y transformación
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#3f3f3f] max-w-3xl mx-auto mb-6">
            Centro terapéutico integral. Acompañamos desde la comprensión, con psicoterapia profesional y herramientas que ayudan a sanar.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <BotonAgendar />
            <button className="bg-white text-[#6CA6A0] border border-[#6CA6A0] font-medium px-6 py-2 rounded-xl hover:bg-[#f5fdfc] transition">
              Conocer más
            </button>
          </div>
        </div>
      </section>
        {/* <section className="px-6 md:px-16 py-20 text-center bg-[#F4E3CF]">
          <h1 className="font-serif text-4xl md:text-5xl text-[#003c58] mb-4">
            Un espacio de escucha, contención y transformación
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#3f3f3f] max-w-3xl mx-auto mb-6">
            Centro terapéutico integral. Acompañamos desde la comprensión, con psicoterapia profesional y herramientas que ayudan a sanar.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a 
              href="#agenda"
              className="bg-[#6CA6A0] text-white font-medium px-6 py-2 rounded-xl shadow hover:bg-[#5e9c97] transition"
              onClick={ handleAgendar }
            >
              Agendar cita
            </a>
            <button className="bg-white text-[#6CA6A0] border border-[#6CA6A0] font-medium px-6 py-2 rounded-xl hover:bg-[#f5fdfc] transition">
              Conocer más
            </button>
          </div>
        </section> */}

        {/* SERVICIOS */}
        <section className="px-6 md:px-16 py-20 bg-white">
          <h2 className="font-serif text-3xl md:text-4xl text-[#003c58] text-center mb-10">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Psicoterapia */}
            <div className="bg-[#FCD5CE] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-serif text-xl mb-2 text-[#003c58]">Psicoterapia</h3>
              <p className="font-sans text-sm text-gray-700">
                Trastornos de ansiedad, depresión, duelo, relaciones, inseguridad, disfunciones y más.
              </p>
            </div>

            {/* Peritajes */}
            <div className="bg-[#F4E3CF] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-serif text-xl mb-2 text-[#003c58]">Informes Psicológicos</h3>
              <p className="font-sans text-sm text-gray-700">
                Evaluaciones profesionales para procesos legales o institucionales.
              </p>
            </div>

            {/* Charlas */}
            <div className="bg-[#D9E9E6] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-serif text-xl mb-2 text-[#003c58]">Charlas Institucionales</h3>
              <p className="font-sans text-sm text-gray-700">
                Intervenciones únicas en colegios o entidades sobre salud emocional y vínculos.
              </p>
            </div>

            {/* Aromaterapia */}
            <div className="bg-[#FFD6A5] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-serif text-xl mb-2 text-[#003c58]">Aromaterapia</h3>
              <p className="font-lora text-sm text-gray-700">
                Velas y aceites esenciales para el bienestar emocional. Tranquilidad, energía, enfoque.
              </p>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}