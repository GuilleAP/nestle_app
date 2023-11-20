import React, { useState } from 'react';
import '../css/productos.css';

const products = {  kit_kat_classic: ['<b>Kit Kat </b> Classic', 'Todo un clasico', 'Crugiente galleta cubierta con delicioso chocolate con leche en un formato de 4 barritas. El Kit Katde siempre, más sabroso que nunca.'], 
                    kit_kat_white: ['<b>Kit Kat </b> White', 'Para los siempre jóvenes', 'Dulce cobertura de chocolate blanco sobre 4 crujientes barritas de galleta, una combinación ideal para los siempre jóvenes.'],  
                    kit_kat_dark: ['<b>Kit Kat </b> Dark', 'El Kit Kat de los gourmets', '4 barritas de crujiente galleta cubierta con delicioso chocolate negro, una exquisita variedad para los amates del sabor intenso'],  
                    kit_kat_classic_mini: ['<b>Kit Kat </b> Classic', 'Mini pausa para llevar', 'Crujiente galleta cubierta de delicioso shocolate con leche, en un formato de 2 barritas.'], 
                    kit_kat_chunky: ['<b>Kit Kat </b> Chunky', 'El respiro que te da energia', 'La forma más rápida de reponerte; una gran barra de Kit Kat para disfrutar saboreando una gran cantidad de chocolate.'],  
                    kit_kat_mini_cc: ['<b>Kit Kat </b> Mini', 'Cookies&Cream', 'Dulce cobertura de chocolate blanco sobre 4 crujientes barritas de galleta, una combinación ideal para los siempre jóvenes.'], 
                    kit_kat_cono: ['<b>Kit Kat </b> Cono', 'Classic', 'Delicioso cono de helado sabor vainilla y helado de chocolate con salsa de chocolate y una auténtica barrita Kit Kat en el interior. ¡Ideal para tomarse un respiro y disfrutar en casa de este sabroso y original helado!'], 
                    kit_kat_yogur: ['<b>Kit Kat </b> Yogur', '', 'Una combinación irresistible entre un yogur cremoso y las crujientes bolitas Kit Kat Pop Choc. Encuéntralo en tu sección de yogures']
                }

function Productos() {
    const [mostrarContenidoOculto, setMostrarContenidoOculto] = useState(false);
    const [showMainContent, setShowMainContent] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const toggleContenido = () => {
      setMostrarContenidoOculto(!mostrarContenidoOculto);
      setShowMainContent(!showMainContent);
  
      const menu = document.querySelector(".menu");
      if (menu) {
        menu.style.display = showMainContent ? 'none' : 'flex';
      }
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + Object.keys(products).length) % Object.keys(products).length);
    };
  
    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Object.keys(products).length);
    };

  return (
    <div className={`App ${mostrarContenidoOculto ? 'blurred' : ''}`}>
        <div className={`content-wrapper ${showMainContent ? 'show-main' : 'show-hidden'}`}>
            <div className="top">
                <img src='img/logo.png' alt='Logo'></img>
                <div className="buttons">
                    <button id="buy-btn">BUY NOW KIT KAT <span className="icon-btn"></span></button>
                    <button id="facebook-btn">FACEBOOK</button>
                </div>
            </div>

            {showMainContent && (
                <div className='mainContent'>
                    <div className="content">
                        <div className="txt-content">
                            <h2><b>Kit Kat</b> Classic</h2>
                            <h4>Redescubre un clásico</h4>
                            <p>
                                Porque hay sabores que nunca se olvidan, siempre es un
                                buen momento para saborear el más clásico de los Kit Kat.
                            </p>
                            <button className='btn-products' onClick={toggleContenido}>Descubre todas las variedades ▶</button>
                        </div>
                        <div className="img-content">
                            <img src='img/kit-kat.png' id='img-kitkat' alt='kit-kat'/>    
                        </div>
                    </div>
                </div>
            )}

            {mostrarContenidoOculto && (
                <div className="contenido-oculto">
                    <button onClick={toggleContenido}>Atrás</button>
                    <div className="slider">          
                        <div className="prev-button" onClick={handlePrevSlide}>
                            <div className='button-content'> 
                                <img src='img/icons/back.png' alt='back'/>
                            </div>
                        </div>
                        <div className="slide">
                            <div className='slide-image'>   
                                <img src='img/kit-kat.png' alt={Object.keys(products)[currentSlide]} />
                            </div>
                            <div className='slide-text'>  
                                <h2 dangerouslySetInnerHTML={{ __html: products[Object.keys(products)[currentSlide]][0] }}></h2>
                                <h4>{products[Object.keys(products)[currentSlide]][1]}</h4>
                                <p>{products[Object.keys(products)[currentSlide]][2]}</p>
                            </div>
                        </div>
                        <div className="next-button" onClick={handleNextSlide}>
                            <div className='button-content'>   
                                <img src='img/icons/next.png' alt='next'/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default Productos;
