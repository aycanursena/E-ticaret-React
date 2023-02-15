
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa"
import Musteri from "./Musteri"
import Siparis from "./Siparis"
import Urun from "./Urun"
import Tahsilat from "./Tahsilat"
import Odeme from "./Odeme"
import Login from "./Login"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/Musteri" element={<Musteri />} />
          <Route path="/Urun" element={<Urun />} />
          <Route path="/Siparis" element={<Siparis />} />
          <Route path="/Tahsilat" element={<Tahsilat />} />
          <Route path="/Odeme" element={<Odeme />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;