import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>CONCIERGE | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center max-w-4xl mx-auto mb-32">
                    <span className="text-accent font-bold text-xs uppercase tracking-[0.6em] mb-6 block font-body">Elite Service</span>
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-10 italic">PRIVATE <span className="text-accent underline decoration-accent/20">CONCIERGE</span></h1>
                    <p className="text-xl text-gray-500 font-body font-light leading-relaxed tracking-widest italic max-w-2xl mx-auto">Our dedicated concierge team provides bespoke assistance for the world's most discerning pets and their owners. From sizing advice to custom drop inquiries.</p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Concierge Channels */}
                    <div className="space-y-16">
                        <AnimatedSection animation="right" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: MessageSquare, title: "Bespoke Chat", detail: "Active 24/7 for Vault Members", link: "ENTER CHAT" },
                                { icon: Mail, title: "Secured Email", detail: "concierge@manorguardian.uk", link: "SEND ENCRYPTED" },
                                { icon: Phone, title: "Direct Line", detail: "+44 (0) 20 7946 0888", link: "CALL STUDIO" },
                                { icon: MapPin, title: "Headquarters", detail: "Mayfair, London, UK", link: "VIEW MAP" }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 border border-accent/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-none relative">
                                    <div className="absolute top-0 right-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-700"></div>
                                    <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <item.icon size={28} strokeWidth={1} />
                                    </div>
                                    <h3 className="font-heading font-bold text-lg mb-2 tracking-widest text-white">{item.title}</h3>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-6 font-body">{item.detail}</p>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent border-b border-accent/20 pb-1 cursor-pointer hover:border-accent transition-colors">{item.link}</span>
                                </div>
                            ))}
                        </AnimatedSection>

                        <AnimatedSection animation="up" className="p-12 border border-accent/20 bg-gradient-to-br from-primary via-black to-primary relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 text-accent/5 rotate-12 group-hover:scale-110 transition-transform duration-1000">
                                <ShieldCheck size={200} />
                            </div>
                            <h3 className="text-3xl font-heading font-bold mb-6 italic text-white">Vault Security Protocol</h3>
                            <p className="text-gray-500 text-sm font-body font-light leading-loose tracking-wide mb-8 italic">All communications within the Manor Guardian concierge network are encrypted for your privacy. We handle every inquiry with the utmost discretion and care.</p>
                            
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-accent/20 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Concierge" className="w-full h-full object-cover grayscale" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">Active Wardens (Online)</span>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Inquiry Protocol (Form) */}
                    <AnimatedSection animation="left" className="relative">
                        <div className="p-12 md:p-20 bg-black border border-accent/20">
                            <h3 className="text-4xl font-heading font-bold text-white mb-10 italic underline decoration-accent/10">Inquiry Protocol</h3>
                            <form className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent">Identification</label>
                                        <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-x-0 border-t-0 border-b border-accent/20 px-0 py-4 outline-none focus:border-accent text-white tracking-widest text-[11px] placeholder:text-gray-800 transition-colors" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent">Digital Address</label>
                                        <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-x-0 border-t-0 border-b border-accent/20 px-0 py-4 outline-none focus:border-accent text-white tracking-widest text-[11px] placeholder:text-gray-800 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent">Protocol Subject</label>
                                    <select className="w-full bg-transparent border-x-0 border-t-0 border-b border-accent/20 px-0 py-4 outline-none focus:border-accent text-white tracking-widest text-[11px] appearance-none cursor-pointer">
                                        <option className="bg-primary">SECURE VAULT ACCESS</option>
                                        <option className="bg-primary">CUSTOM PIECE COMMISSION</option>
                                        <option className="bg-primary">ORDER AUTHENTICATION</option>
                                        <option className="bg-primary">ELITE PARTNERSHIP</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent">Message Details</label>
                                    <textarea rows="4" placeholder="HOW MAY THE GUARDIAN ASSIST YOU?" className="w-full bg-transparent border-x-0 border-t-0 border-b border-accent/20 px-0 py-4 outline-none focus:border-accent text-white tracking-widest text-[11px] placeholder:text-gray-800 resize-none transition-colors"></textarea>
                                </div>
                                <Button className="w-full bg-accent text-primary px-12 py-6 font-bold tracking-[0.4em] hover:bg-gold-light" variant="primary">INITIATE CONNECTION</Button>
                                <div className="flex items-center gap-3 justify-center opacity-40">
                                    <Clock size={12} className="text-accent" />
                                    <p className="text-[9px] text-gray-400 uppercase tracking-widest">Average response: 12 minutes (VAULT PRIORITY)</p>
                                </div>
                            </form>
                        </div>
                        
                        {/* Decorative background element */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border border-accent/5 pointer-events-none"></div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
