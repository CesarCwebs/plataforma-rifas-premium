interface CheckoutBarProps {
  selectedTickets: number[];
}

// Precio por boleto (más adelante lo haremos dinámico)
const TICKET_PRICE = 150; // $150 MXN

export default function CheckoutBar({ selectedTickets }: CheckoutBarProps) {
  const ticketCount = selectedTickets.length;
  const totalCost = ticketCount * TICKET_PRICE;

  // Si no hay boletos seleccionados, no mostramos nada.
  if (ticketCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="font-bold text-lg">
            {ticketCount} {ticketCount > 1 ? 'boletos seleccionados' : 'boleto seleccionado'}
          </p>
          <p className="text-yellow-400 font-mono text-2xl">
            Total: ${totalCost.toLocaleString('es-MX')} MXN
          </p>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
          Continuar Compra
        </button>
      </div>
    </div>
  );
}