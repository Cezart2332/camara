import { useEffect } from 'react';
import { Box } from '@mui/material';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReviewsPreview from './components/ReviewsPreview';
import Shop from './components/Shop';

// Pages
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Reviews from './pages/Reviews';
import ProductDetail from './pages/ProductDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Immediate scroll to top on route change
    window.scrollTo(0, 0);
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <Box component="main">
    <Hero />
    <Menu />
    <Shop />
    <About />
    <Gallery />
    <ReviewsPreview />
    <FAQ />
    <Contact />
  </Box>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termeni" element={<Terms />} />
          <Route path="/confidentialitate" element={<Privacy />} />
          <Route path="/recenzii" element={<Reviews />} />
          <Route path="/produs/:slug" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
