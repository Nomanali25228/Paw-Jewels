import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const AboutPage = () => {
    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>Our Story | Paw Jewels London</title>
            </Head>

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <AnimatedSection animation="right">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-deep-grey mb-8 italic leading-tight">Born from a love for <span className="text-primary italic underline decoration-secondary">fine craftsmanship</span> and furry companions.</h1>
                        <p className="text-xl text-gray-500 mb-12 italic leading-relaxed">Based in the heart of London, Paw Jewels was founded with a simple mission: to elevate the everyday accessories of our beloved pets to the standards of premium human jewelry.</p>
                        <div className="flex space-x-12">
                            <div>
                                <span className="block text-4xl font-playfair font-bold text-primary mb-2">2018</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Founded in London</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-playfair font-bold text-primary mb-2">15k+</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Happy Companions</span>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="left" className="relative">
                        <div className="aspect-square rounded-[4rem] overflow-hidden premium-shadow">
                            <img src="/images/Catix-Outdoor-Travel-Cat-Bag-pets-park-pk-3242_720x.webp" alt="Our Founders" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[3rem] premium-shadow max-w-xs hidden md:block border border-secondary/20">
                            <p className="text-sm italic text-gray-500 leading-relaxed mb-6">"Our pets aren't just animals; they are family. We believe they deserve to wear their status with pride and elegance."</p>
                            <h4 className="font-playfair font-bold text-deep-grey">— Eleanor James, Founder</h4>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Values */}
            <section className="container mx-auto px-6 mb-32 bg-white p-20 rounded-[4rem] premium-shadow border border-secondary/10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-playfair font-bold text-deep-grey italic mb-4">The Paw Jewels Ethos</h2>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px]">What sets us apart in the world of pet luxury</p>
                </div>
                <div className="grid md:grid-cols-3 gap-16">
                    {[
                        { title: "Artisanal Quality", desc: "Every piece is hand-finished by master jewelers in our UK workshop, ensuring the highest standards of quality." },
                        { title: "Pet-First Design", desc: "Comfort is our priority. We test every collar for weight, breathability, and movement to ensure your pet loves wearing it." },
                        { title: "Sustainability", desc: "We use recycled precious metals and ethically sourced stones. Luxury shouldn't cost the Earth." }
                    ].map((value, i) => (
                        <AnimatedSection key={i} animation="up" delay={i * 0.1} className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 font-playfair font-bold text-2xl italic">0{i + 1}</div>
                            <h3 className="text-2xl font-playfair font-bold text-deep-grey mb-4">{value.title}</h3>
                            <p className="text-gray-500 leading-relaxed italic">{value.desc}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Workshop Visual */}
            <section className="container mx-auto px-6 mb-32">
                <AnimatedSection className="relative rounded-[4rem] overflow-hidden h-[600px] flex items-center justify-center text-center p-12 overflow-hidden text-white">
                    <img src="/images/Reflective-Cat-Collar-with-Bell-Adjustable-For-Cat-2267_720x.webp" alt="Workshop" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 italic">Crafted with precision, <br />made for lifetimes.</h2>
                        <p className="text-lg text-gray-300 mb-12 opacity-80 italic">We use only the finest 14k Gold and 925 Sterling Silver plating. Every charm is individually inspected under a microscope to ensure perfection.</p>
                        <Button>Shop the Quality</Button>
                    </div>
                </AnimatedSection>
            </section>

            {/* Team/Studio Information etc if needed */}
        </div>
    );
};

export default AboutPage;
