// Ya no necesitamos 'useState' aquí.
// El componente ahora es más "tonto", solo muestra lo que le dicen.

type TicketStatus = 'disponible' | 'ocupado' | 'seleccionado';

interface TicketProps {
  number: number;
  status: TicketStatus;
  onClick: (number: number) => void;
}

function Ticket({ number, status, onClick }: TicketProps) {
  // ... (El código interno de Ticket no cambia)
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

// Props que recibirá la parrilla completa
interface TicketGridProps {
  selectedTickets: number[];
  onTicketClick: (number: number) => void;
}

export default function TicketGrid({ selectedTickets, onTicketClick }: TicketGridProps) {
  // Simulación de datos (esto no cambia)
  const initialTickets = Array.from({ length: 100 }, (_, i) => ({
    number: i + 1,
    status: Math.random() < 0.2 ? 'ocupado' : 'disponible',
  }));

  return (
    <div className="mt-12 w-full max-w-4xl mx-auto mb-32"> {/* Añadimos margen inferior */}
      <h3 className="text-3xl font-bold text-center mb-6">Elige tus Boletos</h3>
      <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-2">
        {initialTickets.map((ticket) => {
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
              onClick={onTicketClick} // Ahora usa la función que viene de las props
            />
          );
        })}
      </div>
    </div>
  );
}