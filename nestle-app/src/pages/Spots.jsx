import '../css/spots.css';

function Spots() {

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
                <h2>VOLVEMOS DESPUÉS DE LA PUBLICIDAD...</h2>
                <p>Tomate un respiro para descubrir nuestros productos de la manera más divertida.</p>
                <button className='btn-spots'>Todos los spots ▶</button>
            </div>
            <div className="img-content">
                <img src='img/tv.png' alt='kit-kat'/>    
            </div>
        </div>
    </div>
  );
}

export default Spots;
