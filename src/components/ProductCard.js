import React from 'react';
import Link from 'next/link';
import { Eye, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);

        // Simple feedback animation
        const btn = e.currentTarget;
        gsap.to(btn, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
    };

    return (
        <AnimatedProductCard>
            <Link href={`/product/${product.id}`} className="block group relative overflow-hidden bg-primary/20 hover:bg-primary/40 transition-colors duration-500 rounded-none border border-accent/10">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        <button className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 scale-90 group-hover:scale-100">
                            <Eye size={20} />
                        </button>
                        <button 
                            onClick={handleAddToCart}
                            className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center hover:bg-gold-light hover:scale-110 transition-all duration-300 scale-90 group-hover:scale-100"
                        >
                            <Plus size={20} />
                        </button>
                    </div>

                    {/* Gold Accent Corner */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-accent/30 border-l-transparent transition-all duration-500 group-hover:border-t-accent opacity-0 group-hover:opacity-100"></div>
                </div>

                {/* Content */}
                <div className="p-8 text-center bg-black/60 relative overflow-hidden group-hover:bg-black/80 transition-colors duration-500">
                    {/* Hover Glow */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-1"></div>
                    
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-3 block">Pet Fine Jewelry</span>
                    <h3 className="text-xl md:text-2xl font-heading text-white mb-4 group-hover:italic transition-all uppercase tracking-wider">{product.name}</h3>
                    
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-lg font-body text-gray-400 tracking-[0.2em]">£{product.price.toFixed(2)}</span>
                        
                        <div className="h-[1px] w-8 bg-accent/30 group-hover:w-24 transition-all duration-700"></div>
                        
                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            View Details
                        </span>
                    </div>
                </div>
            </Link>
        </AnimatedProductCard>
    );
};

const AnimatedProductCard = ({ children }) => {
    const cardRef = React.useRef(null);

    React.useEffect(() => {
        gsap.from(cardRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom-=100px",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return <div ref={cardRef}>{children}</div>;
};

export default ProductCard;
