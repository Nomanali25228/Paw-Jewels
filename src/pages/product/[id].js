import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import AnimatedSection from '../../components/AnimatedSection';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import { Minus, Plus, Heart, Share2, Shield, Truck, RotateCcw, Box, CheckCircle, Award, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    // Zoom State
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });
    const mainImageRef = useRef(null);

    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        if (id) {
            const p = products.find(p => p.id === parseInt(id));
            if (p) {
                setProduct(p);
                setMainImage(p.image);
            }
        }
    }, [id]);

    const handleMouseMove = (e) => {
        if (!mainImageRef.current) return;
        const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setZoomPos({ x, y, show: true });
    };

    if (!product) return (
        <div className="h-screen flex items-center justify-center bg-primary">
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                <span className="text-accent font-heading text-[10px] uppercase tracking-[0.5em]">Authenticating Artifact...</span>
            </div>
        </div>
    );

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>{product.name} | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-start relative">
                    {/* LEFT: Image Gallery */}
                    <div className="space-y-8 sticky top-48">
                        <div
                            ref={mainImageRef}
                            className="relative aspect-square overflow-hidden bg-black border border-accent/20 cursor-crosshair group"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => setZoomPos(prev => ({ ...prev, show: false }))}
                        >
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="w-full h-full object-cover transition-all duration-[1200ms] grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
                            />

                            {/* Standard Image View */}
                            <div
                                className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                                style={{
                                    backgroundImage: `url(${mainImage})`,
                                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                    backgroundSize: '200%'
                                }}
                            />

                            {/* Status Tags */}
                            <div className="absolute top-6 left-6 flex flex-col gap-3 z-20">
                                <span className="bg-accent text-primary text-[9px] font-bold px-4 py-2 uppercase tracking-[0.3em]">Vault Drop</span>
                                <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-bold px-4 py-2 uppercase tracking-[0.3em] border border-white/20">Authenticated</span>
                            </div>

                            {/* Exclusive Overlay */}
                            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                                <Sparkles size={16} className="text-accent" />
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent/80">18K PVD Gold Plated</span>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-6">
                            {(product.images || [product.image]).map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className={`aspect-square overflow-hidden border transition-all duration-500 cursor-pointer ${mainImage === img ? 'border-accent scale-[1.02]' : 'border-accent/10 grayscale hover:grayscale-0 hover:border-accent/40'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Product Info */}
                    <div className="lg:pl-10 space-y-12">
                        <AnimatedSection>
                            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block font-body">Exclusive Collection</span>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-widest leading-tight">{product.name}</h1>
                            <div className="flex items-center gap-8 mb-10">
                                <span className="text-accent text-3xl font-body font-extrabold tracking-tight">£{product.price.toFixed(2)}</span>
                                <div className="h-[1px] w-12 bg-accent/30"></div>
                                <span className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-bold">Limited Drop No. 882</span>
                            </div>

                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic max-w-xl">
                                Crafted in the heart of London, this piece represents the peak of quality for your companion. Every element is handcrafted with premium materials to ensure it's as durable as it is stylish.
                            </p>
                        </AnimatedSection>

                        {/* Color Selection - Minimalized */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Color Options</h4>
                            <div className="flex gap-4">
                                {(product.images?.slice(0, 3) || [product.image]).map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMainImage(img)}
                                        className={`w-14 h-14 border p-1 transition-all duration-500 ${mainImage === img ? 'border-accent scale-110' : 'border-accent/10 opacity-40 hover:opacity-100'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover grayscale" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-8 pt-8 border-t border-accent/10">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center border border-accent/20 px-8 py-4 space-x-12">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-accent hover:text-white transition-colors"><Minus size={14} /></button>
                                    <span className="font-heading font-bold text-xl">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="text-accent hover:text-white transition-colors"><Plus size={14} /></button>
                                </div>
                                <Button onClick={handleAddToCart} className="flex-1 px-12 py-5 font-bold tracking-[0.4em]">ADD TO CART</Button>
                                <button className="w-16 h-16 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500">
                                    <Heart size={20} strokeWidth={1} />
                                </button>
                            </div>
                        </div>

                        {/* Status Integrity Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="flex items-center gap-6 p-6 border border-accent/5 bg-white/5">
                                <Shield size={24} className="text-accent" strokeWidth={1} />
                                <div>
                                    <p className="text-[10px] text-white font-bold uppercase tracking-widest mb-1">Quality Guaranteed</p>
                                    <p className="text-[9px] text-gray-600 uppercase tracking-widest">30-Day Money Back Guarantee</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-6 border border-accent/5 bg-white/5">
                                <Truck size={24} className="text-accent" strokeWidth={1} />
                                <div>
                                    <p className="text-[10px] text-white font-bold uppercase tracking-widest mb-1">Global Vaulting</p>
                                    <p className="text-[9px] text-gray-600 uppercase tracking-widest">Secured Door-to-Door Delivery</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs: Technical Protocol */}
                        <div className="pt-12 border-t border-accent/10">
                            <div className="flex gap-12 mb-8">
                                {['description', 'specifications', 'heritage'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`text-[10px] font-bold uppercase tracking-[0.4em] pb-3 border-b-2 transition-all duration-500 ${activeTab === tab ? 'border-accent text-white' : 'border-transparent text-gray-700 hover:text-gray-500'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="text-sm text-gray-500 font-body font-light leading-loose tracking-wide italic min-h-[100px]">
                                {activeTab === 'description' &&
                                    "Forged in our London atelier, this piece utilizes Physical Vapor Deposition (PVD) to bond 18K gold to a surgical-grade steel core. It is the definitive statement for the modern companion." 
                                }
                                {activeTab === 'specifications' &&
                                    "Weight: 45g. Core: 316L Surgical Stainless Steel. Coating: 18K Gold PVD. Hypoallergenic: Yes. Tarnish Resistant: Yes. Clasp: High-Tension Locking Carabiner." 
                                }
                                {activeTab === 'heritage' &&
                                    "Part of the Manor Guardian permanent collection. Each piece is hand-finished and inspected under 10x magnification for elite hierarchy standards." 
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Section: The Complete Hierarchy */}
                {relatedProducts.length > 0 && (
                    <section className="mt-48 pt-32 border-t border-accent/10">
                        <AnimatedSection className="text-center mb-24">
                            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.6em] mb-4 block">Recommended Selection</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white italic">COMPLETE THE <span className="text-accent">HIERARCHY</span></h2>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
