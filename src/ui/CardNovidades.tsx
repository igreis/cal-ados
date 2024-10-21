interface Data {
  marca: string,
  imageUrl: string,
  preço: number,
}

interface CardProps {
  data: Record<string, Record<string, Data[]>>;
}

export default function CardNovidades({ data }: CardProps) {
  return (
    <div className="bg-[#ecedf2]">
      <div className="">
        <h2 className="sr-only">Products</h2>

        <div className="">
          {data.map((product: Data, index: number) => (
            <a key={index} className="group">
              <div className="h-full w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.marca}
                  src={product.imageUrl}
                  className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.marca}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.preço}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
