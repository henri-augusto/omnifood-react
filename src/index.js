import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './templates/_header';
import Footer from './templates/_footer';
import Hero from './view/hero';
import Featured from './view/featured';
import How from './view/how';
import Meal from './view/meal';
import Testimonials from './view/testimonials';
import Pricing from './view/pricing';
import Action from './view/action';
import './index.css';
import './queries.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <How />
      <Meal />
      <Testimonials />
      <Pricing />
      <Action />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
