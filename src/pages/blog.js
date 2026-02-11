import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { blogs } from '../data/blogs';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Search, Calendar, User } from 'lucide-react';

const BlogPage = () => {
    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>The Pet Journal | Paw Jewels Luxury Blog</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-deep-grey mb-6 italic">The Pet Journal</h1>
                    <p className="text-lg text-gray-500 italic">Exploring the intersection of luxury, artisanal craftsmanship, and the bond with our companions.</p>
                </AnimatedSection>

                {/* Featured Post */}
                <AnimatedSection animation="up" className="mb-24 group relative rounded-[4rem] overflow-hidden premium-shadow bg-white flex flex-col lg:flex-row items-stretch border border-secondary/10">
                    <div className="lg:w-3/5 overflow-hidden">
                        <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="lg:w-2/5 p-12 lg:p-20 flex flex-col justify-center">
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">{blogs[0].category} • Featured</span>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-deep-grey mb-6 group-hover:text-primary transition-colors leading-tight">{blogs[0].title}</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed italic">{blogs[0].excerpt}</p>
                        <Link href={`/blog/${blogs[0].slug}`} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-deep-grey hover:text-primary transition-colors">
                            Explore Story <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </AnimatedSection>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogs.slice(1).map((blog, i) => (
                        <AnimatedSection key={blog.slug} animation="up" delay={i * 0.1} className="group bg-white rounded-[3rem] overflow-hidden premium-shadow border border-secondary/10">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-10">
                                <div className="flex items-center space-x-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                    <span className="text-primary">{blog.category}</span>
                                    <span>•</span>
                                    <span>{blog.date}</span>
                                </div>
                                <h3 className="text-2xl font-playfair font-bold text-deep-grey mb-6 group-hover:text-primary transition-colors leading-snug">{blog.title}</h3>
                                <p className="text-sm text-gray-500 mb-8 italic line-clamp-3">{blog.excerpt}</p>
                                <Link href={`/blog/${blog.slug}`} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-deep-grey hover:text-primary transition-colors">
                                    Read More <ArrowRight size={14} className="ml-2" />
                                </Link>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Newsletter Box */}
                <AnimatedSection animation="up" className="mt-24 p-12 md:p-24 bg-deep-grey rounded-[4rem] text-white flex flex-col items-center text-center relative overflow-hidden border-8 border-primary/10">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl font-playfair font-bold mb-6">Stay Inspired</h2>
                        <p className="text-gray-400 mb-12 italic">Join our circle of luxury pet owners and receive monthly insights, styling guides, and exclusive early access to new collections.</p>
                        <form className="flex flex-col md:flex-row gap-4 w-full">
                            <input
                                type="email"
                                placeholder="Your royal email address"
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-5 text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all shadow-lg shadow-primary/20">Subscribe</button>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default BlogPage;
