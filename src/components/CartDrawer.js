import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
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
            gsap.to(drawerRef.current, { x: 0, duration: 0.6, ease: "power4.out" });
        } else {
            document.body.style.overflow = 'unset';
            gsap.to(overlayRef.current, { opacity: 0, display: 'none', duration: 0.5 });
            gsap.to(drawerRef.current, { x: '100%', duration: 0.6, ease: "power4.in" });
        }
    }, [isCartOpen]);

    return (
        <>
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm hidden opacity-0"
                onClick={() => setIsCartOpen(false)}
            ></div>
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl translate-x-full flex flex-col"
            >
                <div className="p-6 border-b border-secondary/20 flex justify-between items-center">
                    <h2 className="text-2xl font-playfair font-bold text-deep-grey">Your Bag</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-secondary/10 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-primary">
                                <ShoppingBag size={40} />
                            </div>
                            <p className="text-gray-500 font-medium">Your bag is empty</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-primary font-bold uppercase tracking-widest text-xs hover:underline"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex space-x-4">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-secondary/10 flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between">
                                        <h4 className="font-bold text-deep-grey italic">{item.name}</h4>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-auto">
                                        {item.category}
                                    </p>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center border border-secondary/30 rounded-full px-3 py-1 space-x-4">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-primary">
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm font-bold">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-primary">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <span className="font-bold text-primary">Rs.{(item.price * item.quantity).toFixed(0)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t border-secondary/20 space-y-4 bg-secondary/5">
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span>Total</span>
                            <span className="text-primary text-2xl font-playfair">Rs.{cartTotal.toFixed(0)}</span>
                        </div>
                        <p className="text-xs text-gray-400 text-center italic">Shipping & taxes calculated at checkout</p>
                        <Link
                            href="/cart"
                            onClick={() => setIsCartOpen(false)}
                            className="block w-full text-center py-4 bg-white border border-primary text-primary rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-secondary/10 transition-all"
                        >
                            View Full Bag
                        </Link>
                        <button className="w-full py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all shadow-lg shadow-primary/20">
                            Checkout Now
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
