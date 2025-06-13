import React from 'react';
import { Link } from 'react-router-dom';
import './styles/components/categories.css';

const ProductCategories = () => {
  return (
    <section id="produtos" className="categories">
      <h2>Nossas Categorias de Peças</h2>
      <div className="category-cards">
        <Link to="/leves" className="category-card light">
          <h3>Peças Leves</h3>
          <p>Alternadores, câmbios, símbolos e mais para carros de passeio</p>
        </Link>
        <Link to="/pesadas" className="category-card heavy">
          <h3>Peças Pesadas</h3>
          <p>Chicotes, módulos de cabine e peças para caminhões</p>
        </Link>
      </div>
    </section>
  );
};

export default ProductCategories;