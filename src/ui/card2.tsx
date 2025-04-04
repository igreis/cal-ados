import { Star } from 'lucide-react';

interface Data {
  marca: string;
  imageUrl: string;
  preço: number;
  rating?: number; // Added rating property
}

interface CardProps {
  data: Data[] | null | undefined;
  genero?: string;
  onClickModal: (produto: Data) => void;
  titulo: string;
}

const StarRating = ({ rating = 4 }: { rating?: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "fill-black text-black" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
};

export default function Card2({ data, onClickModal, titulo }: CardProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold text-black">{titulo}</h1>
        <div className="h-0.5 bg-black w-[20%] ml-4" />
      </div>
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 mb-8">
        {data.map((product, index) => (
          <a key={index} className="group">
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 relative group"
              onClick={() => onClickModal(product)}
            >
              <img
                alt={product.marca}
                src={product.imageUrl || "/placeholder.svg"}
                className="w-full object-contain object-center transition-transform duration-300 ease-in-out cursor-pointer"
              />
              {/* Botão de Comprar - Centralizado */}
              <button className="absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Ver mais
              </button>
            </div>
            <h3 className="text-[16px] font-normal leading-[1.2] mt-4 ">
              {product.marca}
            </h3>
            <p className="mt-3 text-sm font-normal text-gray-900">
              R$ {product.preço.toFixed(2).replace('.', ',')}
            </p>
            <div className="mt-2">
              <StarRating rating={product.rating} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}