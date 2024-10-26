import "swiper/css";
import "swiper/css/autoplay";
import papet from '../../assets/papet.jpeg';
import outra from '../../assets/file.jpg';

const data = {
  destaques: [
    { marca: 'Nike', imageUrl: papet, preço: 169.90 },
    { marca: 'Adidas', imageUrl: papet, preço: 199.90 },
    { marca: 'Puma', imageUrl: papet, preço: 149.90 },
    { marca: 'Puma', imageUrl: outra, preço: 149.90 },
  ]
};

export default function Destaques() {

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.destaques.map((produto, index) => (
        <div key={index} className="">
          <img src={produto.imageUrl} alt={produto.marca} className="w-[700px] h-[200px] object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
}
