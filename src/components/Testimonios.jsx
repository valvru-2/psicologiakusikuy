const testimonials = [
  {
    quote:
      "Profesionales muy capaces, comprometidos con la salud mental de sus pacientes, muy dinámico, muy buena experiencia. Satisfecha con el taller en el que se participó.",
    name: "Luisa",
    edad: 31,
    image: "/images/testimonio1.jpg",
  },
  {
    quote:
    "Un buen lugar para recibir orientación y apoyo psicológico. Se los recomendé a gente allegada y tuve la satisfacción de que también estuvieron agradecidos con el servicio, en diversas especialidades que ellos tienen.",
    name: "Josabet",
    edad: 28,
    image: "/images/testimonio2.jpg",
  },
  {
    quote:
    "Excelente profesional con mucha disposición para ayudar",
    name: "Rogelio",
    edad: 39,
    image: "/images/testimonio3.jpg",
  },
];

export const Testimonios = () => {
  return (
    <section className="bg-[#F4E3CF] py-16 px-8 mt-14">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-4 text-[#1E293B]">
          Lo que dicen quienes nos eligen
        </h2>
        <p className="text-[#1E293B] mb-12 max-w-2xl mx-auto">
          Testimonios reales de personas que encontraron contención, guía y transformación en su proceso terapéutico.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center space-y-4"
            >
              <p className="italic text-lg font-serif text-[#1E293B]">
                “{t.quote}”
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-[#1E293B]/70 text-sm font-medium">
                  {t.name}, {t.edad}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}