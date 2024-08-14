import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Lazy load the components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Service = lazy(() => import('./components/Service'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Digitization = lazy(() => import('./components/Digitization'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="digitization">
          <Digitization />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
}

export default App;



// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Service from './components/Service';
// import Products from './components/Products';
// import Contact from './components/Contact';
// import Digitization from './components/Digitization';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <section id="home">
//         <Home />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="service">
//         <Service />
//       </section>
//       <section id="products">
//         <Products />
//       </section>
//       <section id="contact">
//         <Digitization />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }
// export default App;
