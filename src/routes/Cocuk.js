import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import data from '../components/Data'; // Import data from the Data.js file

const Cocuk = () => {
  
  const { productItemsCocuk} = data;

  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <div>
        <Navbar/>
        <div className='w-full flex flex-col items-center content-center text-center'>
        <div className="my-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-5">
                {productItemsCocuk.map((productItem) => (
                <div className="p-3 w-auto shadow-lg" key={productItem.id}>
                    <div className="w-auto h-64"><img className="w-64 h-64" src={productItem.image} alt={productItem.ad} /></div>
                    <div className="">
                    <h3 className="text-lg">{productItem.ad}</h3>
                    <p className="space-x-2">
                        <span className="text-sm line-through text-gray-500">{productItem.exprice} TL</span>
                        <span className="text-2xl font-semibold">{productItem.price} TL</span>
                    </p>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <a href="#" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <div className={`text-4xl duration-300 cursor-pointer ${favorites.includes(productItem.id) ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`}  onClick={() => handleFavoriteClick(productItem.id)}>&hearts;</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div> 
      </div>
        <Footer/>
    </div>
  )
}

export default Cocuk
