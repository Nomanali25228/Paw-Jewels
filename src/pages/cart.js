import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, ShieldCheck, Truck, Lock } from 'lucide-react';

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
    const shipping = cartTotal > 150 ? 0 : 25; // Adjusted values for GBP luxury context

    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>THE VAULT ARCHIVE | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
                    <div>
                        <span className="text-accent font-bold text-[10px] uppercase tracking-[0.6em] mb-6 block font-body">Curation</span>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-6 italic">YOUR <span className="text-accent">CART</span></h1>
                        <p className="text-gray-500 font-body text-sm tracking-widest max-w-lg">Review your curated selection before final authentication and secure dispatch.</p>
                    </div>
                    <Link href="/shop" className="group flex items-center gap-4 text-accent text-[10px] uppercase tracking-[0.4em] font-bold pb-2 border-b border-accent/20 hover:border-accent transition-all">
                        <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> CONTINUE ACQUISITIONS
                    </Link>
                </AnimatedSection>

                {cart.length === 0 ? (
                    <AnimatedSection className="py-40 text-center border border-accent/10 bg-white/5 relative overflow-hidden flex flex-col items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 blur-[120px] rounded-full"></div>
                        <div className="relative z-10">
                            <ShoppingBag size={64} className="text-accent/20 mx-auto mb-10" strokeWidth={1} />
                            <h2 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-widest">The Archive is Empty</h2>
                            <p className="text-gray-500 font-body text-sm mb-12 tracking-widest italic">No status symbols have been secured yet.</p>
                            <Button href="/shop" variant="primary" className="px-16">Enter the Vault</Button>
                        </div>
                    </AnimatedSection>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-8">
                          
                            
                            {cart.map((item, i) => (
                                <AnimatedSection key={item.id} animation="right" delay={i * 0.1} className="group relative bg-white/5 border border-accent/10 p-8 flex flex-col md:grid md:grid-cols-6 items-center gap-10 hover:bg-white/10 transition-colors duration-500">
                                    <div className="col-span-3 flex items-center gap-8 w-full">
                                        <div className="w-32 h-32 overflow-hidden border border-accent/10 group-hover:scale-105 transition-transform duration-700">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.3]" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <span className="text-[10px] text-accent font-bold uppercase tracking-[0.3em] mb-2 block">{item.category}</span>
                                            <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:italic transition-all uppercase tracking-widest leading-none">{item.name}</h3>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-700 hover:text-red-500 flex items-center text-[9px] font-bold uppercase tracking-widest gap-2 transition-colors">
                                                <Trash2 size={12} strokeWidth={1.5} /> Remove from Archive
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <span className="text-[10px] font-heading font-bold text-white tracking-widest">£{item.price.toFixed(2)}</span>
                                    </div>
                                    
                                    <div className="flex justify-center">
                                        <div className="flex items-center border border-accent/20 px-4 py-2 space-x-6">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="text-accent hover:text-white transition-colors"><Minus size={12} /></button>
                                            <span className="font-heading font-bold text-lg">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="text-accent hover:text-white transition-colors"><Plus size={12} /></button>
                                        </div>
                                    </div>
                                    
                                    <div className="text-right w-full md:w-auto">
                                        <span className="text-xl font-heading font-bold text-accent tracking-tighter">£{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Summary: Secure Procurement */}
                        <div className="sticky top-48">
                            <AnimatedSection animation="left" className="bg-black border border-accent/30 p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>
                                <h2 className="text-2xl font-heading font-bold text-white mb-10 italic uppercase tracking-widest border-b border-accent/10 pb-6">Order Summary</h2>

                                <div className="space-y-6 mb-12">
                                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                        <span>Archive Subtotal</span>
                                        <span className="text-white">£{cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                        <span>Secured Shipping</span>
                                        <span>
                                            {shipping === 0 ? <span className="text-accent italic">Complimentary</span> : `£${shipping.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                        <span>Authentication Tax</span>
                                        <span className="text-white">Included</span>
                                    </div>
                                    <div className="pt-8 border-t border-accent/20 flex justify-between items-center">
                                        <span className="text-xs uppercase tracking-[0.4em] font-bold text-accent">Grand Total</span>
                                        <span className="text-4xl font-body font-extrabold text-white">£{(cartTotal + shipping).toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <Button className="w-full py-6 text-sm tracking-[0.4em]">PROCEED TO CHECKOUT</Button>
                                    
                                    <div className="flex items-start gap-4 p-5 bg-white/5 border border-accent/10">
                                        <Lock size={18} className="text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                                        <p className="text-[10px] text-gray-500 leading-relaxed font-body tracking-wider uppercase">
                                            The transfer of status is secured by AES-256 encryption. Your digital identity is protected by Manor Guardian protocols.
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center justify-center space-x-12 pt-4 opacity-20">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Visa Elite</span>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Amex Centurion</span>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Digital Vault</span>
                                    </div>
                                </div>

                                {/* Shipping Incentive */}
                                <div className="mt-12 pt-12 border-t border-accent/10">
                                    <div className="flex items-center gap-6 mb-6">
                                        <Truck size={24} className="text-accent" strokeWidth={1} />
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Free Delivery</h4>
                                            <p className="text-[9px] text-gray-600 uppercase tracking-widest">Complimentary for orders over £150</p>
                                        </div>
                                    </div>
                                    {shipping > 0 && (
                                        <div className="relative h-1 w-full bg-accent/10 rounded-none overflow-hidden">
                                            <div className="absolute top-0 left-0 h-full bg-accent transition-all duration-[2000ms]" style={{ width: `${Math.min(100, (cartTotal / 150) * 100)}%` }}></div>
                                        </div>
                                    )}
                                    {shipping > 0 && <p className="text-[9px] text-accent/60 font-bold mt-4 text-center uppercase tracking-[0.3em] italic animate-pulse">£{(150 - cartTotal).toFixed(0)} more for COMPLIMENTARY VAULTING</p>}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
