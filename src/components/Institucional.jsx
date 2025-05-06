import { Mic } from "lucide-react";

export const CharlasInstitucionales = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-8 mt-14">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center gap-4">
          <Mic className="w-10 h-10 text-[#6CA6A0]" />
          <h2 className="text-4xl font-serif text-[#1E293B]">Charlas Institucionales</h2>
        </div>

        <p className="text-[#1E293B] max-w-3xl">
          Espacios de encuentro y reflexión diseñados para organizaciones, equipos educativos o laborales que buscan fortalecer el bienestar emocional, la comunicación y la salud mental colectiva.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Temáticas posibles</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Manejo del estrés y prevención del burnout</li>
              <li>Comunicación empática en equipos</li>
              <li>Salud mental en el ámbito escolar/laboral</li>
              <li>Talleres de autocuidado y escucha activa</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Formatos disponibles</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Charlas presenciales o virtuales</li>
              <li>Talleres participativos (1 a 2 horas)</li>
              <li>Ciclos formativos por módulos</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Dirigido a</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Instituciones educativas</li>
              <li>Empresas y equipos de trabajo</li>
              <li>Organizaciones sociales y comunitarias</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Metodología</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Enfoque vivencial y accesible</li>
              <li>Dinámicas grupales y recursos audiovisuales</li>
              <li>Adaptación según necesidad institucional</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#6CA6A0] hover:bg-[#55847F] text-white rounded-xl px-6 py-3 text-base font-medium">
            Solicitar propuesta
          </button>
        </div>
      </div>
    </section>
  );
}
