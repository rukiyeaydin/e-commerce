import React,{useState} from 'react';
import hugeSale from "../images/hugeSale.png";

const Herokadin = ({productItems}) => {

    const [favorites, setFavorites] = useState([]);

    const handleFavoriteClick = (itemId) => {
      if (favorites.includes(itemId)) {
        setFavorites(favorites.filter(id => id !== itemId));
      } else {
        setFavorites([...favorites, itemId]);
      }
    };

  return (
    <div className='w-full flex flex-col items-center content-center text-center'>
        <a className="img" href='/Kadin'><img src={hugeSale} alt="" className='firstImg' /></a>
        <div className="my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-5">
                {productItems.map((productItem) => (
                <div className="p-3 w-auto bg-gray-100" key={productItem.id}>
                    <div className="w-auto h-64"><img className="w-64 h-64" src={productItem.image} alt={productItem.ad} /></div>
                    <div className="">
                    <h3 className="text-lg">{productItem.ad}</h3>
                    <p className="space-x-2">
                        <span className="text-sm line-through text-gray-500">{productItem.exprice} TL</span>
                        <span className="text-2xl font-semibold">{productItem.price} TL</span>
                    </p>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <a href="#" className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <div className={`text-4xl duration-300 cursor-pointer ${favorites.includes(productItem.id) ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`}  onClick={() => handleFavoriteClick(productItem.id)}>&hearts;</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div> 
    </div>



  )
}

export default Herokadin
