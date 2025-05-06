import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router"



const handleAgendar = () => {
  if(window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/vimurci023?hide_gdpr_banner=1',
    });
  } else {
    alert('Calendly is still loading. Please try again in a moment.');
  }
  return false;
}

export const Navbar = () => {
  
  useEffect(() => {    

    if(window.Calendly) {
      console.log('Calendly loaded')
    }  
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Servicios',
      children: [
        {name: 'Psicoterapia', path: '/psicoterapia' },
        {name: 'Institucional', path: '/institucional' }
      ] },
    { name: 'Profesionales', path: '/profesionales' },
    { name: 'Aromaterapia', path: '/aromaterapia' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contacto', path: '/contacto' }
  ];


  const [mostrarMenu, setMostrarMenu] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  const handleHover = () => { mostrarMenu? setMostrarMenu(false) : setMostrarMenu(true) }
  
  
  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="px-6 md:px-16 py-4 flex justify-between items-center">
          {/* Logo o nombre */}
          <Link to='/' className="flex items-center">
            <img src="../../assets/react.svg" alt=""  className="mr-2" />
            <h1 className="font-serif text-2xl text-[#003c58]">Centro Terapeutico</h1>
          </Link>

          {/* Menú */}
          <ul className="hidden md:flex gap-6 font-sans text-sm text-[#1E293B]">
            { navItems.map( item => {

              if( item.children ) {
                return (
                  <div                 
                    key={item.name}
                    onMouseEnter={ handleHover }
                    onMouseLeave={ handleHover }
                  >
                    <li
                      className="hover:underline hover:text-[#6CA6A0] transition">
                      {item.name}
                    </li>
                    {mostrarMenu && (
                      <ul className="absolute top full bg-white shadow rounded py-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <NavLink
                              to={child.path}
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#6CA6A0] transition"
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )

              } else {
                return (
                  <NavLink
                    key={item.name}
                    className={ ({isActive}) => `${isActive? 'text-[#6CA6A0] font-semibold' : 'hover:text-[#6CA6A0] transition'}` }
                    to={item.path}
                  >{item.name}</NavLink>)
              }
            } ) }
          </ul>

          {/* CTA */}
          <a
            href="#agenda"
            className="ml-4 bg-[#6CA6A0] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5e9c97] transition hidden md:block text-center"
            onClick={ handleAgendar }
          >
            Agendar cita
          </a>
          <button
            className="md:hidden text-[#003c58]"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            {menuAbierto ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
        {menuAbierto && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 absolute top-full w-full z-40">
            <ul className="flex flex-col gap-4 font-sans text-sm text-[#1E293B]">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <details key={item.name} className="group">
                      <summary className="cursor-pointer hover:text-[#6CA6A0] font-semibold">
                        {item.name}
                      </summary>
                      <ul className="ml-4 mt-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <NavLink
                              to={child.path}
                              className="block py-1 hover:text-[#6CA6A0] transition"
                              onClick={() => setMenuAbierto(false)}
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `${isActive ? 'text-[#6CA6A0] font-semibold' : 'hover:text-[#6CA6A0] transition'} block`
                    }
                    onClick={() => setMenuAbierto(false)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </ul>

            <a
              href="#agenda"
              className="mt-4 block bg-[#6CA6A0] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5e9c97] transition text-center"
              onClick={() => {
                setMenuAbierto(false);
                handleAgendar();
              }}
            >
              Agendar cita
            </a>
          </div>
        )}

      </header>
    </>
  )
}

