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
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 mb-8">
        {data.map((product, index) => (
          <a key={index} className="group">
            <div 
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200" 
              onClick={() => onClickModal(product)}
            >
              <img
                alt={product.marca}
                src={product.imageUrl}
                className="w-full object-contain object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.marca}</h3>
            <div className="mt-1">
              <StarRating rating={product.rating} />
            </div>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.preço.toFixed(2).replace('.', ',')}
            </p>
          </a>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">
          Ver mais opções
        </a>
      </div>
    </div>
  );
}