// components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/529841798206?text=Hola,%20me%20gustaría%20recibir%20más%20información%20acerca%20de%20sus%20propiedades."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#4FCD5D',
        borderRadius: '50%',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="/whatsapp.png" // Asegúrate de que la ruta sea correcta
        alt="WhatsApp"
        style={{
          width: '40px',
          height: '40px',
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
