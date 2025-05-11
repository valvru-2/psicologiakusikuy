import {  useState } from "react"


export const Contacto = () => {

  const [formState, setFormState] = useState({})

  const onChangeInput = ({target}) => {

    const {value, name} = target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      
      const res = await fetch('https://psicologiakusikuy-backend.onrender.com/api/contacto',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })

      const data = await res.json();
      alert(data.message)

    } catch (err) {
      alert('Hubo un error en el formulario')
      console.error(err)
    }
  }



    return (
      <section id="contacto" className="px-6 md:px-16 py-20 bg-white mt-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Texto + formulario */}
          <div>
            <h2 className="font-serif text-3xl text-[#003c58] mb-4">Contacto</h2>
            <p className="font-sans text-gray-700 mb-6">
              Estamos para escucharte. Podés escribirnos para agendar una cita o consultar cualquier duda.
            </p>

            <form
              onSubmit={ handleSubmit } 
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
                
                onClick={ () => {
                  console.log(formState)
                } }
                type="submit"
                className="bg-[#6CA6A0] text-white px-6 py-2 rounded-xl hover:bg-[#5e9c97] transition"
              >
                Enviar mensaje
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15605.956830309198!2d-77.04971305!3d-12.07862505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e3646ab8d7%3A0x848660d2fc40ce50!2zSmVzw7pzIE1hcsOtYSwgUGVyw7o!5e0!3m2!1ses!2spt!4v1746170596800!5m2!1ses!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }  