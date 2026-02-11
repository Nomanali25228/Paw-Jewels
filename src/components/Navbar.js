import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Heart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power4.out"
            });
        } else {
            gsap.to(menuRef.current, {
                x: '100%',
                duration: 0.6,
                ease: "power4.in"
            });
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'About Us', href: '/about' },
        { name: 'Blogs', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 glass premium-shadow backdrop-blur-md bg-white/70' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <span className="text-2xl font-playfair font-bold text-deep-grey">
                            Paw <span className="text-primary">Jewels</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-deep-grey hover:text-primary transition-colors font-medium text-sm uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-5">
                        <button className="text-deep-grey hover:text-primary transition-colors">
                            <Search size={22} />
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative text-deep-grey hover:text-primary transition-colors"
                        >
                            <ShoppingBag size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            className="md:hidden text-deep-grey"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-[60] bg-white translate-x-full md:hidden flex flex-col p-10"
            >
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="text-deep-grey">
                        <X size={32} />
                    </button>
                </div>
                <div className="flex flex-col space-y-8 mt-16 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-playfair font-bold text-deep-grey hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="mt-auto flex justify-center space-x-6">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                        <Heart size={24} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
