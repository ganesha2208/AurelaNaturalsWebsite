import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import '../components/css/whatsupNotification.css';

const WhatsupNotification = () => {
  return (
    <FloatingWhatsApp 
      phoneNumber="7218451646"
      accountName="Aurela Naturals"
      allowEsc
      allowClickAway
      notification
      notificationSound
      statusMessage="Typically replies within 15 Minutes"
      chatMessage="Hello! 👋 How can we help you?"
      
    />
  );
};

export default WhatsupNotification;
