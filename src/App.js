import './App.css';
import {Routes, Route} from "react-router-dom";
import Anasayfa from './routes/Anasayfa';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
    </Routes>
    </>
  );
}

export default App;
