import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const overlayRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(imgRef.current, { scale: 1.1, duration: 0.6, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.4 });
    };

    const handleMouseLeave = () => {
        gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.4 });
    };

    return (
        <div
            ref={cardRef}
            className="group relative bg-white rounded-3xl overflow-hidden premium-shadow transition-all duration-500 hover:-translate-y-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary/10">
                <img
                    ref={imgRef}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {product.category}
                    </span>
                </div>

                {/* Hover Overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-black/20 opacity-0 transition-opacity flex items-center justify-center space-x-4"
                >
                    <button
                        onClick={() => addToCart(product)}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                        <ShoppingCart size={20} />
                    </button>
                    <Link
                        href={`/product/${product.id}`}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-grey hover:bg-deep-grey hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                    >
                        <Eye size={20} />
                    </Link>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
                        <Heart size={20} />
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <Link href={`/product/${product.id}`}>
                        <h3 className="text-lg font-playfair font-bold text-deep-grey hover:text-primary transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                    <span className="text-primary font-bold">Rs.{product.price.toFixed(0)}</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">
                    {product.type}
                </p>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 rounded-xl border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                >
                    Add to Bag
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
