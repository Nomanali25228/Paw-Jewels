import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';
import Link from 'next/link';

const CartDrawer = () => {
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
    const drawerRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(overlayRef.current, { opacity: 1, display: 'block', duration: 0.5 });
            gsap.to(drawerRef.current, { x: 0, duration: 0.8, ease: "power4.out" });
        } else {
            document.body.style.overflow = 'unset';
            gsap.to(overlayRef.current, { opacity: 0, display: 'none', duration: 0.5 });
            gsap.to(drawerRef.current, { x: '100%', duration: 0.8, ease: "power4.in" });
        }
    }, [isCartOpen]);

    return (
        <>
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md hidden opacity-0"
                onClick={() => setIsCartOpen(false)}
            ></div>
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-black z-[201] shadow-2xl translate-x-full border-l border-accent/20 flex flex-col"
            >
                <div className="p-8 border-b border-accent/10 flex justify-between items-center bg-primary">
                    <div className="flex items-center gap-4">
                        <img src="/images/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                        <div>
                            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-widest leading-none">THE VAULT</h2>
                            <span className="text-[8px] font-bold text-accent uppercase tracking-[0.4em] mt-1 block">MANOR GUARDIAN</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar p-8 space-y-10 group">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                            <div className="w-24 h-24 border border-accent/10 flex items-center justify-center text-accent/20 grayscale">
                                <ShoppingBag size={48} strokeWidth={1} />
                            </div>
                            <p className="text-gray-500 font-body text-xs uppercase tracking-[0.4em] italic mb-4">The vault is empty</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-accent font-bold uppercase tracking-[0.5em] text-[9px] hover:text-white transition-all border-b border-accent/20 pb-1"
                            >
                                COMMENCE SELECTION
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-8 relative pb-8 border-b border-accent/5">
                                <div className="w-28 h-28 overflow-hidden bg-white/5 border border-accent/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.2]" />
                                </div>
                                <div className="flex-1 flex flex-col pt-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-heading font-bold text-lg text-white uppercase tracking-widest leading-none italic">{item.name}</h4>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-600 hover:text-red-500 transition-colors mt-0.5"
                                        >
                                            <Trash2 size={14} strokeWidth={1.5} />
                                        </button>
                                    </div>
                                    <p className="text-[9px] text-accent font-bold uppercase tracking-[0.3em] mb-auto">
                                        {item.category} • LUXURY PIECE
                                    </p>
                                    <div className="flex justify-between items-end mt-4">
                                        <div className="flex items-center border border-accent/20 px-3 py-1 space-x-6 bg-black/40">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="text-accent hover:text-white transition-all"><Minus size={12} /></button>
                                            <span className="text-sm font-heading font-bold text-white">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="text-accent hover:text-white transition-all"><Plus size={12} /></button>
                                        </div>
                                        <span className="font-body font-bold text-white text-lg tracking-tight">£{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="absolute top-0 right-0 p-4 opacity-0 pointer-events-none"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t border-accent/10 space-y-4 bg-primary">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">Total Investment</span>
                            <span className="text-white text-3xl font-body font-bold tracking-tight">£{cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="space-y-4 pt-4">
                            <Link
                                href="/cart"
                                onClick={() => setIsCartOpen(false)}
                                className="block w-full text-center py-5 border border-accent/30 text-accent font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-accent/5 transition-all"
                            >
                                VIEW FULL CART
                            </Link>
                            <button className="w-full py-5 bg-accent text-primary font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-gold-light transition-all shadow-xl shadow-accent/5">
                                CHECKOUT NOW
                            </button>
                        </div>

                    </div>
                )}

                <button 
                    onClick={() => setIsCartOpen(false)}
                    className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
                >
                    <X size={24} strokeWidth={1} />
                </button>
            </div>
        </>
    );
};

export default CartDrawer;
