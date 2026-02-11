import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gsap from 'gsap';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { Heart, Star, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

export default function Home() {
    const heroRef = useRef(null);
    const heroImageRef = useRef(null);
    const featuredProducts = products.slice(0, 3);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".hero-title", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.5 })
            .from(".hero-desc", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
            .from(".hero-btns", { y: 30, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
            .from(heroImageRef.current, { x: 100, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=1");

        // Parallax effect on hero image
        gsap.to(heroImageRef.current, {
            yPercent: 10,
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
        <div className="overflow-hidden">
            <Head>
                <title>Paw Jewels | Luxury UK Pet Jewelry & Accessories</title>
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 bg-secondary/10">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/50">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-grey">
                                Handcrafted in Great Britain
                            </span>
                        </div>
                        <h1 className="hero-title text-6xl lg:text-8xl font-playfair font-bold text-deep-grey leading-tight lg:leading-[1.2] tracking-tight mb-8">
                            Elegance for <br />
                            <span className="text-primary italic">Every Paw.</span>
                        </h1>
                        <p className="hero-desc text-lg text-gray-500 max-w-lg mb-12 leading-relaxed">
                            Discover our exclusive collection of premium jewelry and accessories designed for the most sophisticated cats and dogs. Luxury redefined for your best friend.
                        </p>
                        <div className="hero-btns flex flex-wrap gap-4">
                            <Button href="/shop">Explore Collection</Button>
                            <Button href="/about" variant="secondary">Our Story</Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <div ref={heroImageRef} className="relative rounded-[3rem] overflow-hidden premium-shadow transform rotate-2">
                            <img
                                src="/images/cat-hero.png"
                                alt="Luxury Cat Jewelry"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Featured Item</p>
                                <h3 className="text-2xl font-playfair font-bold italic">Royal Velvet Collection</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Heart, title: "Made with Love", desc: "Handcrafted details" },
                            { icon: Star, title: "Premium Quality", desc: "Gold & Silver plate" },
                            { icon: ShieldCheck, title: "Pet Safe", desc: "Non-toxic materials" },
                            { icon: Truck, title: "UK Wide Delivery", desc: "Free over £50" }
                        ].map((feature, i) => (
                            <AnimatedSection key={i} animation="up" delay={i * 0.1} className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-secondary/10 transition-colors">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <feature.icon size={32} />
                                </div>
                                <h4 className="font-playfair font-bold text-lg mb-2">{feature.title}</h4>
                                <p className="text-gray-400 text-sm whitespace-nowrap">{feature.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Selection */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-grey mb-4">Shop by Companion</h2>
                        <p className="text-gray-500 italic max-w-lg mx-auto">Find the perfect piece curated specifically for your pet's personality.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedSection animation="right" className="group relative overflow-hidden rounded-[3rem] h-[500px] cursor-pointer">
                            <img src="/images/cat-hero.png" alt="Cats" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-5xl font-playfair font-bold mb-6 italic">For Cats</h3>
                                <Button href="/shop?cat=cats" variant="secondary">View Collection</Button>
                            </div>
                            <div className="absolute bottom-10 left-10 text-white group-hover:opacity-0 transition-opacity">
                                <h3 className="text-3xl font-playfair font-bold italic">Cat Jewelry</h3>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="left" className="group relative overflow-hidden rounded-[3rem] h-[500px] cursor-pointer">
                            <img src="/images/dog-hero.png" alt="Dogs" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-5xl font-playfair font-bold mb-6 italic">For Dogs</h3>
                                <Button href="/shop?cat=dogs" variant="secondary">View Collection</Button>
                            </div>
                            <div className="absolute bottom-10 left-10 text-white group-hover:opacity-0 transition-opacity">
                                <h3 className="text-3xl font-playfair font-bold italic">Dog Jewelry</h3>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <AnimatedSection>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-grey mb-4">Trending Now</h2>
                            <p className="text-gray-500 italic">Our most loved pieces this season in the UK.</p>
                        </AnimatedSection>
                        <Button href="/shop" variant="outline" className="hidden md:flex">View All Products</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Luxury Promo */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[4rem] overflow-hidden bg-deep-grey text-white p-12 md:p-24 flex flex-col items-center text-center border-8 border-primary/20">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <AnimatedSection className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">Gift a Sparkle of <br /><span className="text-primary italic">Everlasting Love</span></h2>
                            <p className="text-lg text-gray-400 mb-12">Every pet deserves to feel like royalty. Our luxury gift boxes make every unboxing a memorable experience.</p>
                            <Button>Order Your Gift Box</Button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Blog Teaser */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold text-deep-grey mb-4">The Pet Journal</h2>
                        <p className="text-gray-500 italic">Insights into luxury pet styling and care.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <AnimatedSection key={i} animation="up" delay={i * 0.1} className="group bg-white rounded-3xl overflow-hidden premium-shadow">
                                <div className="aspect-video overflow-hidden">
                                    <img src={i === 1 ? "/images/Catix-Outdoor-Travel-Cat-Bag-pets-park-pk-1837_720x.webp" : i === 2 ? "/images/Cat-Harness-Cat-Leash-for-Outdoor-Cat-Walk-pets-pa-1972_720x.webp" : "/images/Rolling-Smart-Electric-Pet-Ball-for-Cats-and-Dogs-3969_720x.webp"} alt="Blog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-8">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 block">Lifestyle • Feb 2026</span>
                                    <h3 className="text-xl font-playfair font-bold text-deep-grey mb-4 group-hover:text-primary transition-colors">How to style your pet for the Royal Ascot Garden Party</h3>
                                    <Link href="/blog/slug" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-deep-grey hover:text-primary transition-colors">
                                        Read Story <ArrowRight size={14} className="ml-2" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scroll to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-10 right-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center premium-shadow z-40 hover:bg-accent transition-all animate-bounce"
            >
                <ArrowRight size={20} className="-rotate-90" />
            </button>
        </div>
    );
}
