import Image from 'next/image';

export default function Hero() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
        ¡Gran Rifa de Verano!
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Gana una increíble camioneta último modelo. ¡Tu oportunidad de estrenar está aquí!
      </p>

      {/* Contenedor de la Imagen y el Botón */}
      <div className="relative max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <Image
          src="https://cdn.globalbajaj.com/-/media/Belorusia/Images/Pulsar/Technology-Innovation/DTSI-Technology-1000x600-c.png?h=600&iar=0&w=1000&rev=1fde74de43434c46ab3ec2a37144d1e5&hash=536515BC828FD409F1F274AB092251B6"
          alt="Premio de la rifa: Camioneta"
          width={1000}
          height={600}
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-xl py-4 px-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            Ver Boletos Disponibles
          </button>
        </div>
      </div>
    </div>
  );
}