

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

export const BotonAgendar = () => {
  return (
    <a 
        href="#agenda"
        className="bg-[#6CA6A0] text-white font-medium px-6 py-2 rounded-xl shadow hover:bg-[#5e9c97] transition"
        onClick={ handleAgendar }
    >
        Agendar cita
    </a>
  )
}
