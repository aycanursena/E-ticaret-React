
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function Logout () {
   
    const navigate = useNavigate();
 
    useEffect(() => {

        localStorage.setItem("userName", "");
     
      }, [])
  
  return (
    <div className="App">

        <br /><br /><br /><br /><br />
        <h2>Çıkış Yapıldı</h2>

    </div>
  );
}

export default Logout;