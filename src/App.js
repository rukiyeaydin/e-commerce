import './App.css';
import {Routes, Route} from "react-router-dom";
import Anasayfa from './routes/Anasayfa';
import Kadin from './routes/Kadin';
import Erkek from './routes/Erkek';
import Cocuk from "./routes/Cocuk";
import Login from "./routes/Login";
import Favoriler from './routes/Favoriler';
import Sepet from './routes/Sepet';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
      <Route path="/Kadin" element={<Kadin/>} />
      <Route path="/Erkek" element={<Erkek/>} />
      <Route path="/Cocuk" element={<Cocuk/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Favoriler" element={<Favoriler/>} />
      <Route path='/Sepet' element={<Sepet/>}/>
    </Routes>
    </>
  );
}

export default App;
