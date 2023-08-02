import './App.css';
import {Routes, Route} from "react-router-dom";
import Anasayfa from './routes/Anasayfa';
import Kadin from './routes/Kadin';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
      <Route path="/Kadin" element={<Kadin/>} />
    </Routes>
    </>
  );
}

export default App;
