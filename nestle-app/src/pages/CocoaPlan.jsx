import React, { useState } from 'react';

import '../css/cocoaPlan.css';

function CocoaPlan() {

  return (
    <div className="App">
        <div className="top">
            <img src='img/logo.png' alt='Logo'></img>
            <div className="buttons">
                <button id="buy-btn">BUY NOW KIT KAT <span className="icon-btn"></span></button>
                <button id="facebook-btn">FACEBOOK</button>
            </div>
        </div>
        <div className="content">
            <div className="txt-content">
                <h2>"NESTLÉ COCOA PLAN"</h2>
                <p>Pioneros en España en llevar el sello Cocoa Plan</p>
                <button className='btn-cocoa'>Descúbrelo ▶</button>
            </div>
            <div className="img-content">

            </div>
        </div>
    </div>
  );
}

export default CocoaPlan;