import './App.css';
import {Routes, Route} from "react-router-dom";
import Anasayfa from './routes/Anasayfa';
import Kadin from './routes/Kadin';
import Erkek from './routes/Erkek';
import Cocuk from "./routes/Cocuk";
import Login from "./routes/Login";
import Favoriler from './routes/Favoriler';

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
    </Routes>
    </>
  );
}

export default App;
