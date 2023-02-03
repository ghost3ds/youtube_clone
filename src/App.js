import Add from './components/Add';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="bg-[#e3e6e6] h-full">
      {/* Navbar */}
      <Navbar />
      {/* Add */}
      <Add />
      {/* Hero */}
      <Hero />
      {/* Products */}
      <Products />
      {/* Deals */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
