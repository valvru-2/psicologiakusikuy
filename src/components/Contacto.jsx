import {  useState } from "react"
import { useNavigate } from "react-router";


export const Contacto = () => {

  const [formState, setFormState] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();

  const onChangeInput = ({target}) => {

    const {value, name} = target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const validateForm = () => {
    for (const key in formState) {
      const value = formState[key];
      if (!value || value.trim().length < 3) {
        alert(`El campo "${key}" está vacío o es muy corto.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if( !validateForm() ) return;

    try {
      
      // const res = await fetch('http://localhost:3000/api/contacto',{
      const res = await fetch('https://psicologiakusikuy-backend.onrender.com/api/contacto',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })

      const data = await res.json();

      if(res.ok) {
        console.log(data.message)
        navigate('/gracias')
      } else {
        alert('Hubo un problema al enviar el formulario')
      }


    } catch (err) {
      alert('Hubo un error en el formulario')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }



    return (
      <section id="contacto" className="px-6 md:px-16 py-20 bg-white mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        { isSubmitting ? (
            <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
              <div className="flex items-center space-x-3 text-blue-700 text-lg font-medium">
                <svg
                  className="w-6 h-6 animate-spin text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L4 12z"
                  />
                </svg>
                <span>Procesando...</span>
              </div>
            </div>
          ) :
          (
            <>
              {/* Texto + formulario */}
              <div>
                <h2 className="font-serif text-3xl text-[#003c58] mb-4">Contacto</h2>
                <p className="font-sans text-gray-700 mb-6">
                  Estamos para escucharte. Puedes escribirnos para agendar una cita o consultar cualquier duda.
                </p>

                <form
                  onSubmit={ handleSubmit }
                  on
                  className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700">Nombre completo</label>
                    <input
                      name="nombre"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA6A0]"
                      onChange={ (event) => onChangeInput(event) }
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA6A0]"
                      onChange={ (event) => onChangeInput(event) }
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Mensaje</label>
                    <textarea
                      name="mensaje"
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA6A0]"
                      onChange={ (event) => onChangeInput(event) }
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#6CA6A0] text-white px-6 py-2 rounded-xl hover:bg-[#5e9c97] transition cursor-pointer"
                  >
                    { isSubmitting?  "Enviando.." : "Enviar mensaje" }
                  </button>
                </form>

                <div className="mt-6">
                  <a
                    href="https://wa.me/51952908498"
                    target="_blank"
                    className="inline-block mt-2 text-[#6CA6A0] font-medium underline"
                  >
                    También podés contactarnos por WhatsApp
                  </a>
                </div>
              </div>         

              {/* Mapa */}
              <div className="rounded-xl overflow-hidden shadow-md h-80">
                <iframe
                  title="Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.572695050532!2d-77.0526508!3d-12.0728942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e485bceb89%3A0x288a000c0643780f!2sAv.%20Gral.%20Eugenio%20Garz%C3%B3n%201283%2C%20lima%2002002%2C%20Per%C3%BA!5e0!3m2!1ses!2spt!4v1747054306404!5m2!1ses!2spt%22%20"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </>
          )
        }


        </div>
      </section>
    );
  }  