interface Data {
    marca: string;
    imageUrl: string;
    preço: number;
  }

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Data;
}

export default function Modal({ isOpen, onClose, product }: ModalProps) {
  if (!isOpen) return null; // Não renderiza o modal se ele não estiver aberto

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
      <img
        src={product.imageUrl}
        alt={product.marca}
        className="w-full h-[280px] object-cover mt-4 rounded"
      />
      <h2 className="text-xl font-bold text-black mt-[20px]">{product.marca}</h2>
      <p className="text-lg font-semibold mt-4 text-[black]">Preço: R${product.preço}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Fechar
      </button>
    </div>
  </div>
  );
}
