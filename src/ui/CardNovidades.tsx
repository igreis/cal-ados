interface Data {
  marca: string,
  preço: number,
  imageUrl: string,
}

interface CardProps {
  data: Data[];
}

export default function CardNovidades({ data }: CardProps) {
  return (
    <div className="bg-white">
      <div className="">
        <h2 className="sr-only">Products</h2>

        <div className="">
          {data.map((product: Data, index: number) => (
            <a key={index} className="group">
              <div className="h-[300px] sm:h-[350px] w-full overflow-hidden bg-gray-200 group flex justify-center items-center ">
                <img
                  alt={product.marca}
                  src={product.imageUrl}
                  className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out"
                />
                {/* Botão de Comprar */}
                <button
                  className="absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                >
                  Ver Mais
                </button>
              </div>
              <h3 className="mt-4 text-md font-bold text-gray-700">{product.marca}</h3>
              <p className="mt-1 text-sm font-medium text-gray-900">{product.preço}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
