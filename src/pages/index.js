import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { Shield, Sparkles, Gem, Clock, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const featuredProducts = products.slice(0, 3);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".hero-title", { y: 50, opacity: 0, duration: 1.5, ease: "power4.out", delay: 0.5 })
            .from(".hero-sub", { y: 30, opacity: 0, duration: 1, ease: "power4.out" }, "-=1")
            .from(".hero-btns", { y: 20, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8");

        gsap.to(".hero-bg", {
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, []);

    return (
        <div className="bg-primary text-foreground min-h-screen">
            <Head>
                <title>MANOR GUARDIAN | Pet Jewelry & Accessories for Status</title>
                <meta name="description" content="Redefining pet luxury with high-end jewelry for cats and dogs. Elite craftsmanship for the modern companion." />
            </Head>

            {/* Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="hero-bg absolute inset-0 z-0 scale-105 transition-transform duration-1000">
                    <img
                        src="/images/herosection.png"
                        alt="Luxury Pet Jewelry Campaign"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="hero-title text-4xl md:text-8xl font-heading font-medium text-accent mb-4 md:mb-6 leading-tight tracking-[0.1em] uppercase min-[500px]:whitespace-nowrap">
                        MANOR <br className="min-[500px]:hidden" /> GUARDIAN
                    </h1>
                    <p className="hero-sub text-sm md:text-lg font-body text-white mb-10 md:mb-20 uppercase tracking-[0.3em] font-bold opacity-90 drop-shadow-md">
                        STATUS ISN'T GIVEN, IT'S GUARDED. <span className="inline-flex items-center gap-2 ml-2 opacity-60">🏛 </span>
                    </p>
                    <div className="hero-btns flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center">
                        <Link href="/shop" className="text-accent font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[12px] uppercase transition-all hover:text-white drop-shadow-lg">
                            [ <span className="px-2 md:px-3 border-b border-transparent hover:border-accent transition-all duration-300">SHOP THE GENESIS DROP</span> ]
                        </Link>
                        <Link href="/about" className="text-accent font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[12px] uppercase transition-all hover:text-white drop-shadow-lg">
                            [ <span className="px-2 md:px-3 border-b border-transparent hover:border-accent transition-all duration-300">DISCOVER OUR STORY</span> ]
                        </Link>
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-30">
                    <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Discover</span>
                    <div className="w-[1px] h-10 bg-accent"></div>
                </div>
            </section>

            {/* Featured Products: The Collection */}
            <section className="py-32 bg-primary border-t border-accent/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <AnimatedSection className="max-w-2xl text-left">
                            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">New Collection</span>
                            <h2 className="text-5xl md:text-7xl font-heading text-white">Featured <span className="italic">Pieces</span></h2>
                        </AnimatedSection>
                        <Link href="/shop" className="group flex items-center gap-4 text-accent uppercase tracking-[0.2em] font-bold text-sm hover:text-white transition-colors">
                            View All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Values: Authority */}
            <section className="py-24 bg-deep-grey">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                        {[
                            { icon: Shield, title: "Surgical Steel", desc: "Hypoallergenic, skin-safe durability for every terrain." },
                            { icon: Gem, title: "18K Gold Plated", desc: "Genuine PVD plating that maintains its high-end shine." },
                            { icon: Sparkles, title: "Unique Design", desc: "Each piece is an original Manor Guardian product." },
                            { icon: Clock, title: "Lifetime Build", desc: "A premium investment in your companion's style." }
                        ].map((item, i) => (
                            <AnimatedSection key={i} animation="up" delay={i * 0.1} className="group border-l border-accent/20 pl-8 py-4">
                                <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={36} strokeWidth={1} />
                                </div>
                                <h3 className="text-xl font-heading text-white mb-4 tracking-wider">{item.title}</h3>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifestyle: The Pack */}
            <section className="py-32 bg-primary overflow-hidden">
                <div className="container mx-auto px-6 mb-20 text-center">
                    <AnimatedSection>
                        <span className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Community</span>
                        <h2 className="text-5xl md:text-7xl font-heading text-white">OUR <span className="italic text-accent">COMMUNITY</span></h2>
                    </AnimatedSection>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 overflow-x-auto no-scrollbar">
                    {[
                        "/images/pairmen and dog.jpeg",
                        "/images/cat1.jpeg",
                        "/images/cat2.jpeg",
                        "/images/dog1.jpeg",
                        "/images/dog2.jpeg"
                    ].map((img, i) => (
                        <div key={i} className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
                            <img src={img} alt="Pet Lifestyle" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter: Exclusive Access */}
            <section className="py-32 bg-gradient-to-b from-primary to-black border-t border-accent/10">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-heading text-white mb-8 italic italic">Join Our Circle</h2>
                        <p className="text-accent/60 text-lg mb-12 tracking-wide font-light">Receive news of new collections, styling tips, and exclusive community updates.</p>
                        
                        <div className="flex flex-col md:flex-row gap-0 border border-accent/30 rounded-none overflow-hidden group focus-within:border-accent transition-colors">
                            <input 
                                type="email" 
                                placeholder="YOUR EMAIL ADDRESS" 
                                className="flex-1 bg-transparent border-none text-white px-8 py-6 focus:ring-0 placeholder:text-gray-600 tracking-widest text-sm"
                            />
                            <button className="bg-accent text-primary px-12 py-6 font-bold tracking-[0.3em] hover:bg-gold-light transition-colors whitespace-nowrap">
                                SUBSCRIBE
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
