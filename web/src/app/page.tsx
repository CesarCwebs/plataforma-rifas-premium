'use client'; // Necesario porque ahora esta página maneja estado

import { useState } from 'react';
import Hero from "@/components/home/Hero";
import TicketGrid from "@/components/home/TicketGrid";
import CheckoutBar from '@/components/home/CheckoutBar';

export default function Home() {
  // El estado ahora vive aquí, en el componente padre
  const [selectedTickets, setSelectedTickets] = useState<number[]>([]);

  // La función para manejar los clics también vive aquí
  const handleTicketClick = (number: number) => {
    setSelectedTickets((prevSelected) => {
      if (prevSelected.includes(number)) {
        return prevSelected.filter((n) => n !== number);
      } else {
        return [...prevSelected, number];
      }
    });
  };

  return (
    <div>
      <Hero />
      {/* Pasamos el estado y la función a la parrilla */}
      <TicketGrid 
        selectedTickets={selectedTickets} 
        onTicketClick={handleTicketClick} 
      />
      {/* Pasamos el estado a la barra de compra */}
      <CheckoutBar selectedTickets={selectedTickets} />
    </div>
  );
}