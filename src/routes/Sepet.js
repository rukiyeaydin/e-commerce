import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import white from "../images/kadin/white.webp";
import { FaTrashAlt } from 'react-icons/fa';
import data from '../components/Data';

const Sepet = () => {

    const [cartProducts, setCartProducts] = useState(
        data.productItems.concat(data.productItemsErkek).concat(data.productItemsCocuk).filter(item => item.isInCart)
    );

    const removeItem = (itemId) => {
        const updatedCart = cartProducts.filter(item => item.id !== itemId);
        setCartProducts(updatedCart);
      };

    const [quantities, setQuantities] = useState(
        cartProducts.map(productItem => ({ id: productItem.id, quantity: 1 })) // Initialize quantities with 1 for each product
    );

    const totalPrice = cartProducts.reduce((total, productItem, index) => {
        const quantity = quantities[index].quantity;
        return total + parseFloat(productItem.price) * quantity;
    }, 0).toFixed(2);

    const handleQuantityChange = (productId, newQuantity) => {
        setQuantities(prevQuantities => prevQuantities.map(q => (q.id === productId ? { ...q, quantity: newQuantity } : q)));
    };

    const profit = cartProducts.reduce((prof,productItem,index) => {
        const quantity = quantities[index].quantity;
        return prof + parseFloat(productItem.exprice-productItem.price)*quantity;
    },0).toFixed(2);


  return (
    <div >
        <Navbar />
        {cartProducts.length === 0 ? (
            <div className='h-screen flex flex-col items-center justify-center gap-1'>
                <p>Sepette ürün bulunmamakta.</p>
            </div>
        ) : (
        <div className={cartProducts.length <= 1 ? "h-screen flex flex-col items-center justify-center gap-1" : "h-max flex flex-col items-center justify-center gap-1"} style={{ backgroundColor: "#f2f2f2", minHeight:"100%" }}>
            <div className="my-36 flex flex-col md:flex-row items-center justify-center">
                <div className="p-2 mr-0 mb-4 bg-white md:mr-8 md:mb-0">
                    {cartProducts.map((productItem, index) => (
                    <div className={ index === cartProducts.length - 1 ? "p-6 flex flex-row items-center justify-center" : "p-6 flex flex-row items-center justify-center border border-b-gray-300 border-x-0 border-t-0" }>
                        <img src={productItem.image} alt="" className="w-32 h-32"/>
                        <div className='flex flex-col p-4 w-36 md:w-56 h-36 justify-between items-start'>
                            <h5 className='mb-2 text-md md:text-xl text-black tracking-tight'>{productItem.ad}</h5>
                            <p className='space-x-2'> 
                            <span className='text-sm line-through text-gray-500'>{productItem.exprice}</span>
                            <span className='text-md md:text-xl font-semibold'>{productItem.price}</span>
                            </p>
                            <div className='flex mt-3'>
                                <select id="quantity-0" name="quantity-0" class="ub adu aez afv arq avk avy awe awo axt bbn bml bmz bnd bnq cid mr-2 border border-gray-400 w-16 rounded-md" value={quantities[index].quantity} onChange={e => handleQuantityChange(productItem.id, parseInt(e.target.value))}className="ub adu aez afv arq avk avy awe awo axt bbn bml bmz bnd bnq cid mr-2 border border-gray-400 w-16 rounded-md"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>
                                <button  className='p-1 md:p-2 text-center text-gray-600 hover:text-gray-400 rounded duration-300 text-xl' onClick={() => removeItem(productItem.id)}><FaTrashAlt /></button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex flex-col w-64 items-start bg-white p-5 h-60 justify-between">
                    <div className="w-full border border-b-gray-300 border-t-0 border-x-0 flex flex-col items-start pb-4"><span className='font-black '>SEPETİNİZ</span></div>
                    <div className="flex flex-row w-full justify-between">
                        <span>Toplam</span>
                        <span>{totalPrice} TL</span>
                    </div>
                    <div className="flex flex-row w-full justify-between border border-b-gray-300 border-t-0 border-x-0">
                        <span className='pb-4'>Kâr</span>
                        <span>{profit} TL</span>
                    </div>
                    <button className='bg-green-600 hover:bg-green-500 mt-2 p-2 text-white w-full'>Ödeme Sayfasına Git</button>
                </div>
            </div> 
        </div>
        )}
    </div>
  )
}

export default Sepet
