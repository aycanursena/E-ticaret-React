
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
import Logout from "./Logout"
import SiparisDurumu from "./SiparisDurumu"
import Sehir from "./Sehir"
import TahsilatTipi from "./TahsilatTipi"
import UrunKategorisi from "./UrunKategorisi";

import YeniMusteri from "./YeniMusteri"


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
          <Route path="/Logout" element={<Logout />} />
          <Route path="/SiparisDurumu" element={<SiparisDurumu />} />
          <Route path="/Sehir" element={<Sehir />} />
          <Route path="/TahsilatTipi" element={<TahsilatTipi />} />
          <Route path="/UrunKategorisi" element={<UrunKategorisi />} />

          <Route path="/YeniMusteri" element={<YeniMusteri />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;