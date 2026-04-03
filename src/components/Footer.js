import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-32 pb-12 border-t border-accent/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                    {/* Brand Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-10">
                        <Link href="/" className="inline-block group">
                            <img
                                src="/images/logo.png"
                                alt="MANOR GUARDIAN"
                                className="h-16 w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                        </Link>
                        <p className="text-gray-500 font-body text-sm leading-loose tracking-wide max-w-xs">
                            Redefining the status of the modern companion. High-end jewelry handcrafted with surgical precision and 18K gold.
                        </p>
                        <div className="flex space-x-8">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="text-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-10">Navigation</h4>
                        <ul className="space-y-6">
                            {['The Collection', 'The Vault', 'The Pack', 'The Guardian', 'Secure Access'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="text-center md:text-left">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-10">Private Concierge</h4>
                        <ul className="space-y-6">
                            {['Contact Us', 'Secure Shipping', 'Returns & Authentication', 'Privacy Protocol', 'Terms of Status'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium block">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Authority */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-2">Verified Authority</h4>
                        <div className="p-8 border border-accent/20 bg-primary/20 rounded-none flex items-center gap-4">
                            <ShieldCheck className="text-accent" size={32} strokeWidth={1} />
                            <div className="text-left">
                                <p className="text-[10px] text-white font-bold uppercase tracking-widest">Authenticated</p>
                                <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Surgical Grade Materials</p>
                            </div>
                        </div>
                        <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold group hover:text-accent cursor-pointer transition-colors">
                            DOWNLOAD CERTIFICATE OF STATUS
                        </p>
                    </div>
                </div>

                <div className="pt-12 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                        <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-bold">
                            &copy; {new Date().getFullYear()} MANOR GUARDIAN LONDON • REDEFINING STATUS
                        </p>
                    </div>
                    
                    <div className="flex gap-12 text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold">
                        <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy</Link>
                        <Link href="/terms-condition" className="hover:text-accent transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
