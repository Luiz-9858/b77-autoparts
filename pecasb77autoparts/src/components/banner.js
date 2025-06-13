import React from 'react';
import './styles/components/banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>PEÇA NO ESTOQUE, CARRO NA ESTRADA!</h1>
        <p>Seu veículo não pode esperar. Aqui, a peça certa sai hoje!</p>
        <a href="#produtos" className="cta-button">VER OFERTAS</a>
      </div>
    </section>
  );
};

export default Banner;