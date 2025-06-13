import React from 'react';
import './styles/components/mercadolivre.css';

const MercadoLivreIntegration = () => {
  return (
    <section className="mercadolivre-integration">
      <h2>Também vendemos no Mercado Livre!</h2>
      <p>Confira nossas ofertas com frete grátis e promoções exclusivas</p>
      <a 
        href="https://www.mercadolivre.com.br/perfil/pecasnojato" 
        target="_blank" 
        rel="noopener noreferrer"
        className="ml-button"
      >
        Visitar nossa loja
      </a>
    </section>
  );
};

export default MercadoLivreIntegration;