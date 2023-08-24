import React from 'react';
import login from "../images/login.png";

const Loginhero = () => {
  return (
    <div className='w-full flex flex-col items-center content-center text-center'>
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={login} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Şifre" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Beni Hatırla</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Şifremi Unuttum</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded text-xs tracking-wider" type="submit">Giriş Yap</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Hesabın yok mu? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Kaydol</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Loginhero
