import React from 'react';
import Navbar from '../components/Navbar';
import white from "../images/kadin/white.webp";
import tunic from "../images/kadin/tunic.webp";
import { FaTrashAlt } from 'react-icons/fa';

const Sepet = () => {
  return (
    <div >
        <Navbar />
        <div className='w-full flex flex-col items-center justify-center text-center h-max md:h-screen' style={{ backgroundColor: "#f2f2f2", minHeight:"100%" }}>
            <div className="my-36 flex flex-col md:flex-row items-center justify-center">
                <div className="p-2 mr-0 mb-4 bg-white md:mr-8 md:mb-0">
                    <div className="p-6 flex flex-row items-center justify-center">
                        <img src={white} alt="" className="w-32 h-32"/>
                        <div className='flex flex-col p-4 w-36 md:w-56 h-36 justify-between items-start'>
                            <h5 className='mb-2 text-md md:text-xl text-black tracking-tight'>Beyaz Elbise</h5>
                            <p className='space-x-2'> 
                            <span className='text-sm line-through text-gray-500'>720 TL</span>
                            <span className='text-md md:text-xl font-semibold'>680 TL</span>
                            </p>
                            <div className='flex mt-3'>
                                <select id="quantity-0" name="quantity-0" class="ub adu aez afv arq avk avy awe awo axt bbn bml bmz bnd bnq cid mr-2 border border-gray-400 w-16 rounded-md"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>
                                <button  className='p-1 md:p-2 text-center text-gray-600 hover:text-gray-400 rounded duration-300 text-xl'><FaTrashAlt /></button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="p-6 flex flex-row items-center justify-center">
                        <img src={white} alt="" className="w-32 h-32"/>
                        <div className='flex flex-col p-4 w-36 md:w-56 h-36 justify-between items-start'>
                            <h5 className='mb-2 text-md md:text-xl text-black tracking-tight'>Beyaz Elbise</h5>
                            <p className='space-x-2'> 
                            <span className='text-sm line-through text-gray-500'>720 TL</span>
                            <span className='text-md md:text-xl font-semibold'>680 TL</span>
                            </p>
                            <div className='flex mt-3'>
                                <select id="quantity-0" name="quantity-0" class="ub adu aez afv arq avk avy awe awo axt bbn bml bmz bnd bnq cid mr-2 border border-gray-400 w-16 rounded-md"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>
                                <button  className='p-1 md:p-2 text-center text-gray-600 hover:text-gray-400 rounded duration-300 text-xl'><FaTrashAlt /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-64 items-start bg-white p-5 h-60 justify-between">
                    <div className="w-full border border-b-gray-300 border-t-0 border-x-0 flex flex-col items-start pb-4"><span className='font-black '>TOPLAM</span></div>
                    <div className="flex flex-row w-full justify-between">
                        <span>Ara Toplam</span>
                        <span>12 TL</span>
                    </div>
                    <div className="flex flex-row w-full justify-between border border-b-gray-300 border-t-0 border-x-0">
                        <span className='pb-4'>Kâr</span>
                        <span>22 TL</span>
                    </div>
                    <button className='bg-green-600 hover:bg-green-500 mt-2 p-2 text-white w-full'>Ödeme Sayfasına Git</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Sepet
