import React from 'react';
import blue from "../images/erkek/blue.jpg";
import clas from "../images/erkek/clas.webp";
import deri from "../images/erkek/deri.jpg";
import kot from "../images/erkek/kot.jpg";
import pantolon from "../images/erkek/pantolon.jpg";
import hugeSale from "../images/hugeSale.png";


const Heroerkek = () => {
  return (
    <div>
      <div className='w-full flex flex-col items-center content-center text-center'>
      <a className="img" href='/Kadin'><img src={hugeSale} alt="" className='firstImg' /></a>
      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mx-5">
            <div className="p-3 w-auto bg-gray-100">
                <div className="w-auto h-64"><img class="w-64 h-64" src={blue}/></div>
                <div className="">
                    <h3 class="text-lg">Mavi Tişört</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={clas}/></div>
                <div className="">
                    <h3 class="text-lg">Takım Elbise</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={deri}/></div>
                <div className="">
                    <h3 class="text-lg">Deri Ceket</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={kot}/></div>
                <div className="">
                    <h3 class="text-lg">Kot Ceket</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={pantolon}/></div>
                <div className="">
                    <h3 class="text-lg">Kargo Pantolon</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={blue}/></div>
                <div className="">
                    <h3 class="text-lg">Mavi Tişört</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={clas}/></div>
                <div className="">
                    <h3 class="text-lg">Takım Elbise</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={deri}/></div>
                <div className="">
                    <h3 class="text-lg">Deri Ceket</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={kot}/></div>
                <div className="">
                    <h3 class="text-lg">Kot Ceket</h3>
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
                <div className="w-auto h-64"><img class="w-64 h-64" src={pantolon}/></div>
                <div className="">
                    <h3 class="text-lg">Kargo Pantolon</h3>
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
    </div>
  )
}

export default Heroerkek
