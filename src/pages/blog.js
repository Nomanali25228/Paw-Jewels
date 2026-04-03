import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { blogs } from '../data/blogs';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Search, Calendar, User, Instagram } from 'lucide-react';
import Button from '../components/Button';

const BlogPage = () => {
    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>OUR BLOG | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
                    <span className="text-accent font-bold text-xs uppercase tracking-[0.6em] mb-6 block font-body">Style Stories</span>
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-bold text-white mb-10 italic uppercase">OUR <span className="text-accent underline decoration-accent/10">BLOG</span></h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-500 font-body font-light leading-relaxed tracking-widest italic max-w-2xl mx-auto px-4">Insights into the high-end world of pet styling and design. Discover the stories behind our creations.</p>
                </AnimatedSection>

                {/* Featured Post: The Lead */}
                <AnimatedSection animation="up" className="mb-20 md:mb-40 group relative overflow-hidden bg-white/5 border border-accent/10 flex flex-col lg:flex-row items-stretch">
                    <div className="aspect-square lg:aspect-auto lg:w-3/5 overflow-hidden relative">
                        <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent lg:hidden"></div>
                    </div>
                    <div className="lg:w-2/5 p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-black/40 backdrop-blur-sm">
                        <span className="text-[9px] sm:text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-6 font-body">{blogs[0].category} • LATEST STORY</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 group-hover:italic transition-all leading-tight uppercase tracking-wider">{blogs[0].title}</h2>
                        <p className="text-xs sm:text-base text-gray-500 mb-10 leading-loose font-body font-light tracking-wide italic">{blogs[0].excerpt}</p>
                        <Link href={`/blog/${blogs[0].slug}`} className="inline-flex items-center text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-accent hover:text-white transition-colors pb-1 border-b border-accent/20 hover:border-accent">
                            READ THE STORY <ArrowRight size={14} className="ml-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                {/* Blog Grid: The Archive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
                    {blogs.slice(1).map((blog, i) => (
                        <AnimatedSection key={blog.slug} animation="up" delay={i * 0.1} className="group flex flex-col">
                            <div className="aspect-[16/10] overflow-hidden mb-10 border border-accent/10 relative">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                <div className="absolute top-4 right-4 bg-black/80 p-2 border border-accent/20">
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-accent">{blog.category}</span>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="flex items-center space-x-6 text-[9px] text-gray-700 font-bold uppercase tracking-[0.3em] mb-4">
                                    <span className="text-accent/60">{blog.date}</span>
                                    <span className="w-1.5 h-1.5 bg-accent/20 rounded-full"></span>
                                    <span>BY {blog.author || 'THE TEAM'}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6 group-hover:text-accent transition-colors leading-snug uppercase tracking-widest">{blog.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-500 mb-10 font-body font-light italic line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                                <Link href={`/blog/${blog.slug}`} className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.4em] text-white hover:text-accent transition-colors">
                                    READ MORE <ArrowRight size={12} className="ml-3" />
                                </Link>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Instagram Teaser: The Visual Status */}
                <AnimatedSection animation="up" className="mt-40 p-20 border border-accent/10 bg-white/5 text-center relative overflow-hidden flex flex-col items-center">
                    <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full"></div>
                    
                    <h2 className="text-4xl font-heading font-bold text-white mb-6 uppercase tracking-widest">Follow Our Journey</h2>
                    <p className="text-gray-500 font-body text-sm mb-12 tracking-widest italic max-w-xl">Join our community on Instagram for daily inspiration and the latest arrivals.</p>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <Button href="#" className="bg-white text-primary px-12 py-5 font-bold tracking-[0.3em] hover:bg-gray-100">
                            FOLLOW @MANORGUARDIAN
                        </Button>
                        <div className="flex items-center gap-4 text-accent/40 text-[10px] uppercase tracking-[0.5em] font-bold font-body">
                            <Instagram size={20} strokeWidth={1} />
                            <span>#MANORGUARDIAN</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default BlogPage;
