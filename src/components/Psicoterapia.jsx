import { Brain } from "lucide-react";
import { handleAgendar } from "../utils/handleCalendar";

export const Psicoterapia = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-8 mt-14">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center gap-4">
          <Brain className="w-10 h-10 text-[#6CA6A0]" />
          <h2 className="text-4xl font-serif text-[#1E293B]">Psicoterapia</h2>
        </div>

        <p className="text-[#1E293B] max-w-3xl">
          Acompañamiento terapéutico centrado en la persona. Un espacio seguro para explorar emociones, pensamientos y vínculos, con el objetivo de favorecer el bienestar emocional y el autoconocimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Modalidades</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Sesiones presenciales en consultorio</li>
              <li>Atención online (plataforma segura)</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Público</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Adolescentes</li>
              <li>Adultos</li>
              <li>Parejas</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Enfoques y herramientas</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Enfoque humanista y centrado en la persona</li>
              <li>Terapia narrativa</li>
              <li>Trabajo con emociones y vínculos</li>
              <li>Recursos creativos y psicoeducativos</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
            <h3 className="text-xl font-serif text-[#1E293B]">Información práctica</h3>
            <ul className="list-disc list-inside text-[#1E293B]">
              <li>Duración: 50 minutos por sesión</li>
              <li>Frecuencia sugerida: semanal</li>
              <li>Honorarios accesibles con posibilidad de ajustes</li>
              <li>Se entrega comprobante (monotributo)</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={ handleAgendar }
            className="bg-[#6CA6A0] hover:bg-[#55847F] text-white rounded-xl px-6 py-3 text-base font-medium cursor-pointer">
            Agendar sesión
          </button>
        </div>
      </div>
    </section>
  );
}
