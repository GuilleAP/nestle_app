import React, { useState } from 'react';

import '../css/historia.css';

function Historia() {

    const [paginaActual, setPaginaActual] = useState('HOME');

  return (
    <div className="App">
        <div className="top">
            <img src='img/logo.png' alt='Logo'></img>
            <div className="buttons">
                <button id="buy-btn">BUY NOW KIT KAT <span className="icon-btn"></span></button>
                <button id="facebook-btn">FACEBOOK</button>
            </div>
        </div>
        {/* <div className="content">
            <div className="txt-content">
                <h1>¡TOMATE UN RESPIRO <br></br> CON KIT KAT!</h1>
                <p>¿Tienes un descanso entre reuniones? ¿Una pausa entre clases? <br></br>
                    ¿Unos minutos sin obligaciones? ¡Disfrútalo al máximo con Kit Kat!
                </p>
                <p>
                    En un rato desconectarás con nuestras <b>curiosidades</b>, <br></br>
                    nuestros <b>spots</b>; podrás aprovecharte de nuestras <br></br>
                    <b>promociones</b> y descubrir todo lo que tenemos para <br></br>
                    ti en <b>Facebook</b>.
                </p>
                <h3>
                    ¡DESCÚBRELO MIENTRAS <br></br>
                    TE TOMAS UN RESPIRO!
                </h3>
                <img src='img/double-kitkat.png' width="115%"></img>
            </div>
            <div className="img-content">
                <img src='img/promocion.png'></img>
            </div>
        </div>
        <div className='footer'>
            <p>Nestlé © 2014 Nestlé España. Marcas registradas por Societé des Produits Nestlé S.A. Vevey (Suiza)</p>
            <p className='separator'> | </p>
            <p>Política de Privacidad</p>
            <p className='separator'> | </p>
            <p>Política de Cookies</p>
            <p className='separator'> | </p>
            <p>Contacta</p>
        </div>     */}
    </div>
  );
}

export default Historia;