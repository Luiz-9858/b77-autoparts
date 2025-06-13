import React from 'react';
import Banner from '../components/Banner';
import ProductCategories from '../components/ProductCategories';
import MercadoLivreIntegration from '../components/MercadoLivreIntegration';
import ContactForm from '../components/ContactForm';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <ProductCategories />
      <MercadoLivreIntegration />
      <BlogPreview />
      <ContactForm />
    </div>
  );
};

export default Home;