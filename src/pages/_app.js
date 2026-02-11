import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import CartDrawer from '../components/CartDrawer';
import { CartProvider } from '../context/CartContext';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <CartProvider>
            <Loader />
            <CartDrawer />
            <Navbar />
            <main className="min-h-screen">
                <Component {...pageProps} />
            </main>
            <Footer />
        </CartProvider>
    );
}

export default MyApp;
