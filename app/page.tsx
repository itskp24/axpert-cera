import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import SignaturePieces from './components/SignaturePieces';
import Spotlight from './components/Spotlight';
import Heritage from './components/Heritage';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <SignaturePieces />
      <Spotlight />
      <Heritage />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  );
}
