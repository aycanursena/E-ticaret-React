
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
import YeniUrun from "./YeniUrun"
import YeniSiparis from "./YeniSiparis"
import YeniTahsilat from "./YeniTahsilat"
import YeniOdeme from "./YeniOdeme"
import YeniSiparisDurumu from "./YeniSiparisDurumu"
import YeniSehir from "./YeniSehir"
import YeniTahsilatTipi from "./YeniTahsilatTipi"
import YeniUrunKategorisi from "./YeniUrunKategorisi"


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
          <Route path="/YeniUrun" element={<YeniUrun />} />
          <Route path="/YeniSiparis" element={<YeniSiparis />} />
          <Route path="/YeniTahsilat" element={<YeniTahsilat />} />
          <Route path="/YeniOdeme" element={<YeniOdeme />} />
          <Route path="/YeniSiparisDurumu" element={<YeniSiparisDurumu />} />
          <Route path="/YeniSehir" element={<YeniSehir />} />
          <Route path="/YeniTahsilatTipi" element={<YeniTahsilatTipi />} />
          <Route path="/YeniUrunKategorisi" element={<YeniUrunKategorisi />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;