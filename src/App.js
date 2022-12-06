import React, { useState } from "react";
import './App.css';
import Uye from "./components/Uye"
import Form from "./components/Form";

const teamMates = [
  {
    name: "Furkan",
    role: "Frontend",
    favoriteTime: "Gece"
  },
  {
    name: "Tuğçe",
    role: "Backend",
    favoriteTime: "Gece"
  },
  {
    name: "Zeker",
    role: "Designer",
    favoriteTime: "Gündüz"
  }
]

function App() {
  const [uyeler, setUyeler] = useState(teamMates);

  return (
    <div className="App">
      {/* takım üyelerim listesi */}
      <div className="icerik-kutusu">

        <div className="uyeler-kutusu">

          <h2 className="uyeler-baslik">Takım Üyeleri</h2>


          <div className="uyeler-listesi">
            {uyeler.map((herbiri, index) => <Uye key={index} kisi={herbiri} />)}
          </div>
        </div>

        <div className="yeniUye-kutusu">
          <h2 className="yeniUye-baslik">Yeni Takım üyesi ekle</h2>
          <div className="form-kutusu beyaz-kutu">
            <Form formSubmitCalistir = {setUyeler} varOlanÜyeler={uyeler}/>
          </div>
        </div>
      </div>

      {/* yeni üye ekleme formu */}
    </div>
  );
}

export default App;

