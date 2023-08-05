import React from 'react';
import "./Herokadin.css";
import hugeSale from "../images/hugeSale.png";
import ethnic from "../images/kadin/ethnic.webp";
import greendress from "../images/kadin/greendress.webp";
import micky from "../images/kadin/micky.jpeg";
import tunic from "../images/kadin/tunic.webp";
import white from "../images/kadin/white.webp";

const Herokadin = () => {
  return (
    <div className='w-full flex flex-col items-center content-center text-center'>
      <div className="img"><img src={hugeSale} alt="" className='firstImg' /></div>
      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-5">
            <div className="p-3 w-auto bg-gray-100">
                <div className="w-auto h-64"><img class="w-64 h-64" src={ethnic}/></div>
                <div className="">
                    <h3 class="text-lg">Etnik Desenli Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1000 TL</span>
                        <span class="text-2xl font-semibold">600 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={greendress}/></div>
                <div className="">
                    <h3 class="text-lg">Yeşil Uzun Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1500 TL</span>
                        <span class="text-2xl font-semibold">899.9 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={micky}/></div>
                <div className="">
                    <h3 class="text-lg">Micky Mouse Tişört</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1150 TL</span>
                        <span class="text-2xl font-semibold">620 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={tunic}/></div>
                <div className="">
                    <h3 class="text-lg">Arkası Desenli Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1200 TL</span>
                        <span class="text-2xl font-semibold">699.9 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={white}/></div>
                <div className="">
                    <h3 class="text-lg">Beyaz Uzun Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">800 TL</span>
                        <span class="text-2xl font-semibold">710 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
                        <div className="p-3 w-auto bg-gray-100">
                <div className="w-auto h-64"><img class="w-64 h-64" src={ethnic}/></div>
                <div className="">
                    <h3 class="text-lg">Etnik Desenli Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1000 TL</span>
                        <span class="text-2xl font-semibold">600 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={greendress}/></div>
                <div className="">
                    <h3 class="text-lg">Yeşil Uzun Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1500 TL</span>
                        <span class="text-2xl font-semibold">899.9 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={micky}/></div>
                <div className="">
                    <h3 class="text-lg">Micky Mouse Tişört</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1150 TL</span>
                        <span class="text-2xl font-semibold">620 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={tunic}/></div>
                <div className="">
                    <h3 class="text-lg">Arkası Desenli Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">1200 TL</span>
                        <span class="text-2xl font-semibold">699.9 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-3">
                <div className="w-auto h-64"><img class="w-64 h-64" src={white}/></div>
                <div className="">
                    <h3 class="text-lg">Beyaz Uzun Elbise</h3>
                    <p class="space-x-2">
                        <span class="text-sm line-through text-gray-500">800 TL</span>
                        <span class="text-2xl font-semibold">710 TL</span>
                    </p>
                    <div class="flex justify-between items-center pt-3 pb-2">
                        <a href="#" class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">Sepete Ekle</a>
                        <a href="#" title="Add to Favorites" class="text-4xl text-gray-300 hover:text-red-600 duration-300">&hearts;</a>
                    </div>
                </div>
            </div>



        </div>
      </div>











      
    </div>
  )
}

export default Herokadin
