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
              </div>
              <h3 className="mt-4 text-md font-bold text-gray-700">{product.marca}</h3>
              <a href="https://wa.me/553432426156" target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200">
                Ver mais
              </a>

            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
