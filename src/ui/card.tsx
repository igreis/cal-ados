interface Data {
  marca: string,
  imageUrl: string,
  preço: number,
}

interface CardProps {
  data: Data[] | null | undefined;
  genero?: string;
  onClickModal: (produto: Data) => void;
}

export default function Card({ data, onClickModal }: CardProps) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="bg-[#ecedf2]">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {data.map((product, index) => (
          <a key={index} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200" onClick={() => onClickModal(product)}>
              <img
                alt={product.marca}
                src={product.imageUrl}
                className="w-full object-contain object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.marca}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.preço.toFixed(2).replace('.', ',')}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
