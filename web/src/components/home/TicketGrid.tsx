'use client';

import { useState, useEffect } from 'react';

type TicketStatus = 'disponible' | 'ocupado' | 'seleccionado';

interface TicketProps {
  number: number;
  status: TicketStatus;
  onClick: (number: number) => void;
}

function Ticket({ number, status, onClick }: TicketProps) {
  const getStatusClasses = () => {
    switch (status) {
      case 'ocupado':
        return 'bg-red-800 text-gray-500 cursor-not-allowed';
      case 'seleccionado':
        return 'bg-yellow-500 text-black font-bold scale-110 shadow-lg shadow-yellow-500/50';
      case 'disponible':
      default:
        return 'bg-gray-700 hover:bg-yellow-600';
    }
  };
  const formattedNumber = number.toString().padStart(3, '0');
  return (
    <button
      onClick={() => onClick(number)}
      className={`p-2 rounded-md text-center font-mono transition-all duration-200 ${getStatusClasses()}`}
      disabled={status === 'ocupado'}
    >
      {formattedNumber}
    </button>
  );
}

interface ApiTicket {
  id: number;
  number: number;
  status: 'disponible' | 'ocupado';
}

interface TicketGridProps {
  selectedTickets: number[];
  onTicketClick: (number: number) => void;
}

export default function TicketGrid({ selectedTickets, onTicketClick }: TicketGridProps) {
  const [apiTickets, setApiTickets] = useState<ApiTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://8000-cesarcwebs-plataformari-kn81hd4ihgo.ws-us121.gitpod.io';

    fetch(`${apiUrl}/api/tickets`)
      .then(res => res.json())
      .then(data => {
        setApiTickets(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los boletos:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center p-10">Cargando boletos...</div>;
  }

  return (
    <div className="mt-12 w-full max-w-4xl mx-auto mb-32">
      <h3 className="text-3xl font-bold text-center mb-6">Elige tus Boletos</h3>
      <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-2">
        {apiTickets.map((ticket) => {
          const status: TicketStatus =
            ticket.status === 'ocupado'
              ? 'ocupado'
              : selectedTickets.includes(ticket.number)
              ? 'seleccionado'
              : 'disponible';

          return (
            <Ticket
              key={ticket.number}
              number={ticket.number}
              status={status}
              onClick={onTicketClick}
            />
          );
        })}
      </div>
    </div>
  );
}