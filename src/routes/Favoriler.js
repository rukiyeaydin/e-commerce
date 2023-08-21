import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaTrashAlt } from 'react-icons/fa';
import data from '../components/Data'; // data.js dosyanızı doğru şekilde dahil ettiğinizden emin olun

const Favoriler = () => {
  const favoriteProducts = data.productItems.filter(item => item.isFavorite);

  return (
    <div>
      <Navbar />
      {favoriteProducts.length === 0 ? 
      (
        <div className='h-screen flex flex-col items-center justify-center gap-1'>
          <p>Sepette ürün bulunmamakta.</p>
        </div>
      ) : 
      (
        <div className={favoriteProducts.length <= 2 ? "h-screen flex flex-col items-center justify-center gap-1" : "h-max flex flex-col items-center justify-center gap-1"}>
          <div className="my-28">
          {favoriteProducts.map(productItem => (
            <a href='#' className='flex flex-row bg-white border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2' key={productItem.id}><img className='object-cover w-24 h-auto md:w-48' src={productItem.image} alt={productItem.ad}/>
              <div className='flex flex-col p-4 leading-normal w-60 md:w-96 justify-between'>
                <h5 className='mb-2 text-md md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> {productItem.ad}</h5>
                <p className='space-x-2'> 
                  <span className='text-sm line-through text-gray-500'> {productItem.exprice}TL</span>
                  <span className='text-md md:text-xl font-semibold'> {productItem.price}TL</span>
                </p>
                <div className='flex mt-3'>
                  <a href='#' className='p-1 md:p-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300 w-24 mr-1'>Sepete Ekle</a>
                  <a href='#' className='p-1 md:p-2 bg-red-600 hover:bg-amber-600 text-center text-white rounded duration-300 text-lg'><FaTrashAlt /></a>
                </div>
              </div>
            </a>
          ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Favoriler;
