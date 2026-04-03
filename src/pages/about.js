import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Shield, Award, Gem, Globe } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>OUR STORY | MANOR GUARDIAN</title>
            </Head>

            {/* Hero Section: The Heritage */}
            <section className="container mx-auto px-6 mb-40">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <AnimatedSection animation="right">
                        <span className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-6 block font-body">Our Heritage</span>
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-10 leading-tight">OUR <span className="text-accent italic">STORY</span>.</h1>
                        <p className="text-xl text-gray-500 mb-12 font-body font-light leading-loose tracking-wide italic">Founded in London to redefine pet fashion, Manor Guardian stands as the world's most exclusive atelier for companion jewelry. We don't just create accessories; we craft beautiful pieces that represent an eternal bond.</p>
                        
                        <div className="grid grid-cols-2 gap-12 border-t border-accent/10 pt-12">
                            <div>
                                <span className="block text-5xl font-heading font-bold text-accent mb-2 tracking-tighter">EST. 2018</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">London Atelier</span>
                            </div>
                            <div>
                                <span className="block text-5xl font-heading font-bold text-accent mb-2 tracking-tighter">ELITE</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Global Hierarchy</span>
                            </div>
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="left" className="relative group">
                        <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-accent/20">
                            <img src="/images/pairmen and dog.jpeg" alt="Luxury Pet Jewelry" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-black p-12 max-w-xs border border-accent/30 shadow-2xl">
                            <div className="text-accent mb-6"><Award size={32} strokeWidth={1} /></div>
                            <p className="text-sm font-body font-light text-gray-400 leading-relaxed mb-6 italic">"A companion's style is an extension of your own. Every piece in our collection is an investment in that shared bond."</p>
                            <h4 className="font-heading font-bold text-white tracking-[0.2em] text-xs">— A. Sterling, Lead Designer</h4>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* The Standard: Materials & Code */}
            <section className="bg-deep-grey py-20 md:py-32 border-y border-accent/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24 px-4">
                        <span className="text-accent font-bold text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-4 block">The Quality</span>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight uppercase">THE <span className="italic">CRAFTSMANSHIP</span> STANDARD</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
                        {[
                            { icon: Shield, title: "Surgical Steel", desc: "Our 316L stainless core ensures your companion's jewelry survives every adventure while remaining hypoallergenic." },
                            { icon: Gem, title: "18K PVD Plating", desc: "Using Physical Vapor Deposition, our gold plating is molecularly bonded to the core for extreme wear resistance." },
                            { icon: Globe, title: "Global Shipping", desc: "Secure door-to-door delivery with live tracking. Your order is protected at every mile." }
                        ].map((value, i) => (
                            <AnimatedSection key={i} animation="up" delay={i * 0.1} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 border border-accent/30 flex items-center justify-center text-accent mb-8 sm:mb-10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                                    <value.icon size={28} strokeWidth={1} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6 uppercase tracking-widest">{value.title}</h3>
                                <p className="text-gray-500 font-body text-xs sm:text-sm leading-relaxed tracking-wide font-light max-w-[280px] sm:max-w-xs">{value.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action: Secure Your Status */}
            <section className="container mx-auto px-6 pt-40 pb-20">
                <AnimatedSection className="relative h-[600px] flex items-center justify-center text-center p-12 overflow-hidden border border-accent/10">
                    <img src="/images/hero-luxury.png" alt="Jewelry Design Workshop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80"></div>
                    
                    <div className="relative z-10 max-w-3xl">
                        <span className="text-accent font-bold text-[10px] uppercase tracking-[0.6em] mb-8 block">Final Access</span>
                        <h2 className="text-5xl md:text-8xl font-heading font-bold text-white mb-10 italic">Elevate Their <br />Style.</h2>
                        <p className="text-lg text-gray-400 mb-12 font-body font-light tracking-widest italic opacity-80">Every piece in the collection is handcrafted. Once a design is sold out, it's gone for good.</p>
                        <Button href="/shop" variant="primary" className="px-16">Enter the Shop</Button>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default AboutPage;
