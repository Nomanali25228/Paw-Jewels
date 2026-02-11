import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
    const shipping = cartTotal > 2000 ? 0 : 250;

    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>Your Luxury Bag | Paw Jewels</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h1 className="text-5xl font-playfair font-bold text-deep-grey italic mb-4">Your Bag</h1>
                        <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Review your selection before checkout</p>
                    </div>
                    <a href="/shop" className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft size={16} className="mr-2" /> Continue Shopping
                    </a>
                </AnimatedSection>

                {cart.length === 0 ? (
                    <AnimatedSection className="py-24 text-center bg-white rounded-[3rem] premium-shadow">
                        <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                            <ShoppingBag size={48} />
                        </div>
                        <h2 className="text-3xl font-playfair font-bold text-deep-grey mb-4">Your bag is lonely</h2>
                        <p className="text-gray-500 mb-12">Looks like you haven't added any luxury pieces yet.</p>
                        <Button href="/shop">Browse Collection</Button>
                    </AnimatedSection>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item, i) => (
                                <AnimatedSection key={item.id} animation="right" delay={i * 0.1} className="bg-white p-6 md:p-8 rounded-[2rem] premium-shadow flex flex-col md:flex-row items-center gap-8 border border-secondary/10">
                                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-secondary/10 flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-xl font-playfair font-bold text-deep-grey mb-1">{item.name}</h3>
                                        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">{item.category} • {item.type}</p>
                                        <div className="flex items-center justify-center md:justify-start space-x-6">
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 flex items-center text-[10px] font-bold uppercase tracking-widest uppercase">
                                                <Trash2 size={14} className="mr-1" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <span className="font-bold text-deep-grey">Rs.{item.price.toFixed(0)}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quantity</span>
                                        <div className="flex items-center border border-secondary/30 rounded-full px-4 py-1 space-x-4">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-primary"><Minus size={14} /></button>
                                            <span className="font-bold">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-primary"><Plus size={14} /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-4 min-w-[100px]">
                                        <span className="font-bold text-primary">Rs.{(item.price * item.quantity).toFixed(0)}</span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="sticky top-32">
                            <AnimatedSection animation="left" className="bg-white p-10 rounded-[3rem] premium-shadow border border-secondary/10 overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100%] translate-x-4 -translate-y-4"></div>
                                <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-8 italic">Order Summary</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-deep-grey">Rs.{cartTotal.toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Estimated Shipping</span>
                                        <span className="font-bold text-deep-grey text-sm">
                                            {shipping === 0 ? <span className="text-green-500 uppercase tracking-widest text-[10px]">Free</span> : `Rs.${shipping.toFixed(0)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Tax (VAT)</span>
                                        <span className="font-bold text-deep-grey">Included</span>
                                    </div>
                                    <div className="pt-4 border-t border-secondary/20 flex justify-between items-center">
                                        <span className="text-lg font-bold text-deep-grey">Grand Total</span>
                                        <span className="text-3xl font-playfair font-bold text-primary">Rs.{(cartTotal + shipping).toFixed(0)}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button className="w-full py-5">Proceed to Checkout</Button>
                                    <div className="bg-secondary/10 p-4 rounded-2xl flex items-center space-x-3 text-[10px] text-gray-500 font-medium">
                                        <ShieldCheck size={20} className="text-green-500 flex-shrink-0" />
                                        <p>Secure SSL Encrypted Checkout. Your data is safe with us.</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-4 opacity-30 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
                                        {/* Payment Logos Placeholder icons or real ones */}
                                        <span className="text-[10px] font-black uppercase">Stripe</span>
                                        <span className="text-[10px] font-black uppercase">Visa</span>
                                        <span className="text-[10px] font-black uppercase">PayPal</span>
                                    </div>
                                </div>

                                <div className="mt-10 pt-10 border-t border-secondary/20">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <Truck size={24} className="text-gray-400" />
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-deep-grey">Complimentary Delivery</h4>
                                            <p className="text-[10px] text-gray-400">Available for all UK orders over Rs.2000</p>
                                        </div>
                                    </div>
                                    {shipping > 0 && (
                                        <div className="relative h-1 w-full bg-secondary/20 rounded-full overflow-hidden">
                                            <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000" style={{ width: `${(cartTotal / 2000) * 100}%` }}></div>
                                        </div>
                                    )}
                                    {shipping > 0 && <p className="text-[10px] text-primary font-bold mt-2 text-center uppercase tracking-widest italic">Add Rs.{(2000 - cartTotal).toFixed(0)} more for FREE shipping</p>}
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
