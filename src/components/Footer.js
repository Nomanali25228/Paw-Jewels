import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-secondary/30 pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Info */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <span className="text-2xl font-playfair font-bold text-deep-grey">
                            Paw <span className="text-primary">Jewels</span>
                        </span>
                    </Link>
                    <p className="text-gray-500 leading-relaxed max-w-xs">
                        Bringing luxury and elegance to your beloved pets. Premium jewelry handcrafted in the UK for cats and dogs who deserve the best.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-playfair font-bold mb-8 text-deep-grey">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Home', 'Shop All', 'Cat Jewelry', 'Dog Jewelry', 'Accessories'].map((link) => (
                            <li key={link}>
                                <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h4 className="text-lg font-playfair font-bold mb-8 text-deep-grey">Customer Care</h4>
                    <ul className="space-y-4">
                        {['Contact Us', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                            <li key={link}>
                                <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-playfair font-bold mb-8 text-deep-grey">Newsletter</h4>
                    <p className="text-gray-500 text-sm mb-6">
                        Join our mailing list for exclusive updates and luxury pet tips.
                    </p>
                    <form className="relative">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-secondary/10 border-none rounded-full py-4 px-6 text-sm focus:ring-2 focus:ring-primary outline-none"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-2 bottom-2 bg-primary text-white rounded-full px-6 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} Paw Jewels London. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-primary">Privacy</Link>
                    <Link href="/terms-condition" className="hover:text-primary">Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
