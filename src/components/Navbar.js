import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const router = useRouter();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            });
        } else {
            gsap.to(menuRef.current, {
                y: '-100%',
                duration: 0.6,
                ease: "power3.in"
            });
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'SHOP', href: '/shop' },
        { name: 'OUR STORY', href: '/about' },
        { name: 'BLOG', href: '/blog' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                    ? 'py-4 bg-[#111111]/80 backdrop-blur-md border-b border-accent/10 shadow-2xl'
                    : 'py-6 bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center h-14">
                    {/* LEFT: Logo Section */}
                    <div className="flex-1 flex items-center justify-start">
                        <Link href="/" className="group flex items-center gap-3">
                            <img
                                src="/images/logo.png"
                                alt="MANOR GUARDIAN"
                                className="h-12 md:h-16 w-auto object-contain brightness-110"
                            />
                            <div className="hidden lg:block font-heading italic text-white uppercase tracking-[0.4em] text-[16px] font-bold">
                            </div>
                        </Link>
                    </div>

                    {/* CENTER: Navigation Links (Desktop) */}
                    <div className="hidden lg:flex flex-[2] justify-center items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-body font-bold text-accent hover:text-white uppercase tracking-[0.35em] transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* RIGHT: Icons & Cart */}
                    <div className="flex-1 flex justify-end items-center gap-6">
                       
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center gap-3 text-white hover:text-accent transition-all duration-300"
                        >
                            <ShoppingBag size={18} strokeWidth={1} />
                            <span className="hidden md:inline-block text-[11px] font-bold uppercase tracking-[0.2em] font-body">
                                Cart ({cartCount})
                            </span>
                        </button>
                        
                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
                            <Menu size={24} strokeWidth={1} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay Menu */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-center -translate-y-full px-10"
            >
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="absolute top-10 right-10 text-white hover:text-accent transition-colors"
                >
                    <X size={32} strokeWidth={1} />
                </button>

                <div className="flex flex-col space-y-10 items-center text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-heading text-white hover:text-accent transition-all duration-300 tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-heading text-white hover:text-accent transition-all duration-300 tracking-widest">
                        CONTACT
                    </Link>
                </div>
                
                <div className="mt-24 text-[10px] tracking-[0.4em] text-accent/40 font-bold uppercase">
                    ESTABLISHING AUTHORITY SINCE 2018
                </div>
            </div>
        </>
    );
};

export default Navbar;
