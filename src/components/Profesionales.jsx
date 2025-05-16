const team = [
  {
    name: "Psic. Raquel Ruiz",
    role: "Psicóloga – Fundadora",
    image: "https://azlmyzhfvhsvsbdxarvt.supabase.co/storage/v1/object/public/productos.img//mama-web.jpg",
    bio: "Mi compromiso es ofrecer un espacio seguro, humano y respetuoso, donde cada historia pueda ser reconocida y trabajada con cuidado.",
    values: ["Empatía", "Respeto", "Escucha activa", "Acompañamiento personalizado"],
  },
  {
    name: "Psic. Jonathan Aldazabal Tarrillo",
    role: "Psicólogo",
    image: "https://azlmyzhfvhsvsbdxarvt.supabase.co/storage/v1/object/public/productos.img//psicologo_aldazaval.jpg",
    specialty: "Psicoterapia, evaluación y consejería para niños, adolescentes y adultos, en contextos clínicos y educativos.",
  },
  // {
  //   name: "Tomás Herrera",
  //   role: "Especialista en aromaterapia",
  //   image: "/images/tomas.jpg",
  //   specialty: "Aplicación de esencias naturales en procesos de relajación y concentración",
  // },
];

export const Profesionales = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-[#1E293B] mb-4">
            Un equipo al servicio del bienestar emocional
          </h2>
          <p className="text-[#1E293B] max-w-2xl mx-auto">
            {/* Creamos un espacio donde cada persona es escuchada desde su unicidad, con respeto y compromiso. */}
            Estamos aquí para ayudarte. <br /><br />
A veces enfrentamos dificultades como ansiedad, baja autoestima, estrés, miedos, depresión o problemas de pareja que afectan nuestro bienestar. Nuestro objetivo es acompañarte y darte las herramientas necesarias para que puedas superarlos, recuperar el equilibrio y mejorar tu calidad de vida.
          </p>
        </div>

        {/* Fundadora */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#F4E3CF] p-8 rounded-xl shadow-md">
          <img
            src={team[0].image}
            alt={team[0].name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="text-[#1E293B] space-y-4">
            <h3 className="text-2xl font-serif">{team[0].name}</h3>
            <p className="font-medium text-sm">{team[0].role}</p>
            <p>{team[0].bio}</p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {team[0].values.map((val, idx) => (
                <li
                  key={idx}
                  className="bg-[#FFD6A5] text-[#1E293B] px-3 py-1 rounded-full"
                >
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Equipo */}
        <div className="space-y-6">
          <h4 className="text-2xl font-serif text-[#1E293B]">
            Colaboramos para brindarte un acompañamiento integral
          </h4>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.slice(1).map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center space-y-3"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <h5 className="font-serif text-xl text-[#1E293B]">{person.name}</h5>
                <p className="text-sm font-medium text-[#1E293B]/70">{person.role}</p>
                <p className="text-sm text-[#1E293B]">{person.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}