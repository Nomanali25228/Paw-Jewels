import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import AnimatedSection from '../../components/AnimatedSection';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import { Minus, Plus, Heart, Share2, Shield, Truck, RotateCcw, Box, CheckCircle } from 'lucide-react';
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
            setProduct(p);
            setMainImage(p.image);
        }
    }, [id]);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setZoomPos({ x, y, show: true });
    };

    if (!product) return (
        <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <Head>
                <title>{product.name} | Paw Jewels Luxury Pet Jewelry</title>
            </Head>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start relative">
                    {/* LEFT: Image Gallery */}
                    <div className="space-y-6">
                        <div
                            ref={mainImageRef}
                            className="relative aspect-square rounded-3xl overflow-hidden bg-secondary/5 border border-secondary/10 cursor-crosshair group"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => setZoomPos(prev => ({ ...prev, show: false }))}
                        >
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* Standard Image View */}
                            <div
                                className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                style={{
                                    backgroundImage: `url(${mainImage})`,
                                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                    backgroundSize: '250%'
                                }}
                            />

                            {/* Tags */}
                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                                <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">Sale</span>
                                <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">New</span>
                            </div>

                            {/* Magnify Icon Overlay */}
                            {!zoomPos.show && (
                                <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-lg backdrop-blur shadow-sm">
                                    <Plus className="text-deep-grey" size={18} />
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {(product.images || [product.image]).map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${mainImage === img ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                                >
                                    <img src={img} className={`w-full h-full object-cover ${mainImage !== img ? 'opacity-60' : ''}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Product Info */}
                    <div className="lg:pl-8 space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-deep-grey mb-2">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-gray-400 line-through text-lg">Rs.{(product.price * 1.2).toFixed(0)}</span>
                                <span className="text-2xl font-bold text-red-600 font-outfit">Rs.{product.price.toFixed(0)}</span>
                            </div>

                            <div className="space-y-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-deep-grey">Color: <span className="text-gray-500">Selected</span></p>
                                <div className="flex gap-2">
                                    {(product.images?.slice(0, 2) || [product.image]).map((img, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setMainImage(img)}
                                            className={`w-10 h-10 rounded-lg p-0.5 border-2 cursor-pointer transition-all ${mainImage === img ? 'border-primary' : 'border-transparent hover:border-gray-200'}`}
                                        >
                                            <img src={img} className="w-full h-full object-cover rounded shadow-none" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-200 rounded-full py-2 px-4 space-x-6 min-w-[120px] justify-between">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-primary"><Minus size={16} /></button>
                                    <span className="font-bold">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-primary"><Plus size={16} /></button>
                                </div>
                                <Button onClick={handleAddToCart} className="flex-1 rounded-full py-3 bg-[#0047AB] hover:bg-blue-800 border-none shadow-none text-xs tracking-widest">ADD TO CART</Button>
                                <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                                    <Heart size={20} />
                                </button>
                            </div>
                            <button className="w-full py-4 bg-black text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-gray-900 transition-colors uppercase">
                                BUY IT NOW
                            </button>
                        </div>

                        {/* Delivery Progress Bar */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex justify-between items-center relative gap-4">
                                {/* Lines */}
                                <div className="absolute top-5 left-[10%] right-[10%] h-[1px] bg-gray-200 -z-0"></div>

                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                        <Box size={18} className="text-gray-600" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-deep-grey uppercase tracking-tighter">Order Placed</p>
                                        <p className="text-[8px] text-gray-400 italic">Feb 10</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center text-[10px] font-bold text-orange-600">📦</div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-deep-grey uppercase tracking-tighter">Processing</p>
                                        <p className="text-[8px] text-gray-400 italic">Feb 11</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                        <Truck size={18} className="text-red-500" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-deep-grey uppercase tracking-tighter">Delivered</p>
                                        <p className="text-[8px] text-gray-400 italic">Feb 13 - Feb 14</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Utility Details */}
                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <Shield size={18} className="text-primary" />
                                <span>30-Day Money Back Guarantee</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <Truck size={18} className="text-primary" />
                                <span>Free UK Shipping on orders over £50</span>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="pt-8 border-t border-gray-100">
                            <div className="flex gap-8 mb-4">
                                {['description', 'sizing'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`text-[10px] font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTab === tab ? 'border-primary text-deep-grey' : 'border-transparent text-gray-400'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="text-sm text-gray-500 leading-relaxed italic">
                                {activeTab === 'description' ?
                                    "Handcrafted luxury designed for companions who appreciate the finer things. Our workshop uses 14k gold plating and hypoallergenic materials to ensure safety and style." :
                                    "S: 15-25cm, M: 25-35cm, L: 35-50cm. Custom engraving available upon request."
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Section */}
                {relatedProducts.length > 0 && (
                    <section className="mt-32">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-3xl font-playfair font-bold text-deep-grey italic underline decoration-primary/30 underline-offset-8">Complete the Look</h2>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Custom CSS for hidden scrollbars in thumbnails or other areas */}
            <style jsx>{`
                .cursor-crosshair {
                    cursor: crosshair;
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
