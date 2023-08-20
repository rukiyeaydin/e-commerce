import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import {FaTrashAlt} from "react-icons/fa";
import green from "../images/kadin/greendress.webp";
import etnik from "../images/kadin/ethnic.webp";

const Favoriler = () => {
  return (
    <div>
      <Navbar />
      <div className='h-screen flex flex-col items-center justify-center gap-1 mb-20'>
        <a href="#" class="flex flex-row bg-white border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-24">
            <img class="object-cover w-48 h-auto" src={etnik} alt="" />
            <div class="flex flex-col p-4 leading-normal w-96 justify-between">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Etnik Desenli Elbise</h5>
                <p class="space-x-2">
                    <span class="text-sm line-through text-gray-500">1150 TL</span>
                    <span class="text-2xl font-semibold">620 TL</span>
                </p>
                <div className="flex">   
                    <a href="#" class="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300 w-32 mr-1">Sepete Ekle</a>
                    <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-white rounded duration-300 text-lg"><FaTrashAlt/></a>
                </div>
            </div>
          </a>
          <a href="#" class="flex flex-row bg-white border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-48 h-auto" src={green} alt="" />
              <div class="flex flex-col p-4 leading-normal w-96 justify-between">        
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Yeşil Uzun Elbise</h5>
                  <p class="space-x-2">
                      <span class="text-sm line-through text-gray-500">1150 TL</span>
                      <span class="text-2xl font-semibold">620 TL</span>
                  </p>
                  <div className="flex">
                      <a href="#" class="px-4 py-2 bg-blue-600 hover:bg-amber-blue text-center text-sm text-white rounded duration-300 w-32 mr-1">Sepete Ekle</a>
                      <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-white rounded duration-300 text-lg"><FaTrashAlt/></a>                </div>           
              </div>
          </a>
      </div>
      <Footer />
    </div>
  )
}

export default Favoriler
