

export const handleAgendar = () => {
    if(window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/vimurci023?hide_gdpr_banner=1',
      });
    } else {
      alert('Calendly is still loading. Please try again in a moment.');
    }
    return false;
}