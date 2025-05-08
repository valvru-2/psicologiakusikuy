import { Link } from "react-router"


export const Footer = () => {
  return (
    <footer className="bg-[#F4E3CF] text-[#1E293B] px-6 md:px-16 py-12 mt-24">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Info general */}
        <div>
          <h2 className="font-serif text-xl text-[#003c58] mb-2">Centro Terapeutico <br/> Kusikuy Yachay</h2>
          <p className="font-sans text-sm text-gray-700">
            Psicoterapia profesional y acompañamiento emocional desde el respeto y la empatía.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="font-serif text-lg mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm font-sans">
            {[
              { nombre: 'Psicoterapia', path: '/psicoterapia' },
              { nombre: 'Informes psicológicos', path: '/psicoterapia' },
              { nombre: 'Charlas', path: '/institucional' },
              { nombre: 'Aromaterapia', path: '/aromaterapia' },
              { nombre: 'Contacto', path: '/contacto' }
            ]
            .map( i => {
              return (<li key={`footer-${i.nombre}`}><a href={i.path} className="hover:text-[#6CA6A0]">{i.nombre}</a></li>)              
            } )}
          </ul>
        </div>

        {/* Contacto / WhatsApp */}
        <div>
          <h3 className="font-serif text-lg mb-2">Contacto</h3>
          <p className="text-sm font-sans mb-2">+51 987 654 321</p>
          <p className="text-sm font-sans mb-4">Lunes a viernes de 9:00 a 18:00</p>
          <a
            href="https://wa.me/51987654321"
            target="_blank"
            className="inline-block bg-[#6CA6A0] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5e9c97] transition"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Centro Terapeutico. Todos los derechos reservados.
      </div>
    </footer>
  )
}

