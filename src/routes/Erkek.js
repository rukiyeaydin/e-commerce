import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../components/Data'; // Import data from the Data.js file

const Erkek = () => {
  const { productItemsErkek } = data;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);


  const handleFavoriteClick = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }

    // Find the product item in data and toggle its isFavorite property
    const updatedProductItems = productItemsErkek.map(productItem => {
      if (productItem.id === itemId) {
        return {
          ...productItem,
          isFavorite: !productItem.isFavorite
        };
      }
      return productItem;
    });

    // Update the data with the modified product items
    data.productItemsErkek = updatedProductItems;

    // Save updated favorites list to localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedProductItems.filter(item => item.isFavorite).map(item => item.id)));
  };

  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-col items-center content-center text-center'>
        <div className="my-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-5">
                {productItemsErkek.map((productItem) => (
                <div className="p-3 w-auto shadow-lg" key={productItem.id}>
                    <div className="w-auto h-64"><img className="w-64 h-64" src={productItem.image} alt={productItem.ad} /></div>
                    <div className="">
                    <h3 className="text-lg">{productItem.ad}</h3>
                    <p className="space-x-2">
                        <span className="text-sm line-through text-gray-500">{productItem.exprice} TL</span>
                        <span className="text-2xl font-semibold">{productItem.price} TL</span>
                    </p>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <div className="px-4 py-2 bg-red-600 hover:bg-red-500 text-center text-sm text-white rounded duration-300">Sepete Ekle</div>
                        <div className="px-4 py-2 text-red-600 bg-white border-solid border-2 border-red-600 hover:text-white hover:bg-red-600 text-center text-sm rounded duration-300 cursor-pointer" onClick={() => handleFavoriteClick(productItem.id)}>Kaydet &hearts;</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div> 
      </div>
      <Footer />
    </div>
  )
}

export default Erkek;
