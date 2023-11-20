import '../css/promociones.css';

function Promociones() {

  return (
    <div className='App'>
        <div className="top">
            <img src='img/logo.png' alt='Logo'></img>
            <div className="buttons">
                <button id="buy-btn">BUY NOW KIT KAT <span className="icon-btn"></span></button>
                <button id="facebook-btn">FACEBOOK</button>
            </div>
        </div>
        <div className="content">
            <div className="txt-content">
                <h2>NUESTRAS PROMOS SE ESTÁN TOMANDO UN RESPIRO</h2>
                <p>No te preocupes... ¡Pronto volverán a estar aquí!</p>
            </div>
            <div className="img-content">
                <img src='img/silla.png' id="img-silla" alt='kit-kat'/>    
            </div>
        </div>
    </div>
  );
}

export default Promociones;
