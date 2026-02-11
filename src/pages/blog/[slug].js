import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogs';
import AnimatedSection from '../../components/AnimatedSection';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) return null;

    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>{blog.title} | Paw Jewels Journal</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="max-w-4xl mx-auto mb-12">
                    <Link href="/blog" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors mb-8">
                        <ArrowLeft size={16} className="mr-2" /> Back to Journal
                    </Link>
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">{blog.category}</span>
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-deep-grey mb-8 leading-tight italic">{blog.title}</h1>

                    <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-secondary/20">
                        <div className="flex items-center space-x-12">
                            <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <Calendar size={14} className="text-primary" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <Clock size={14} className="text-primary" />
                                <span>5 Min Read</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Share Story:</span>
                            {[Facebook, Twitter, Instagram, Share2].map((Icon, i) => (
                                <button key={i} className="text-gray-400 hover:text-primary transition-colors">
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="up" className="max-w-5xl mx-auto rounded-[4rem] overflow-hidden premium-shadow mb-16 h-[60vh]">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </AnimatedSection>

                <AnimatedSection className="max-w-3xl mx-auto prose prose-xl prose-stone">
                    <div className="text-lg text-gray-500 leading-relaxed italic mb-12 border-l-4 border-primary pl-8 py-2">
                        {blog.excerpt}
                    </div>

                    <div className="space-y-8 text-deep-grey leading-[1.8] text-lg">
                        <p>Luxury pet accessories are more than just items; they are a statement of the deep bond between an owner and their companion. In the heart of London, our studio focuses on blending traditional British craftsmanship with modern aesthetics to create pieces that are as durable as they are beautiful.</p>

                        <h2 className="text-3xl font-playfair font-bold mt-12 mb-6 italic">The Importance of Material</h2>
                        <p>When selecting a collar or pendant, the choice of material is paramount. Velvet, for instance, offers a level of comfort and "old-world" charm that simply cannot be replicated by synthetic fibers. Our Royal Velvet collection utilizes high-density, stain-resistant velvet sourced from historic mills in the UK.</p>

                        <img src="/images/hero-dog.png" alt="In-article visual" className="rounded-[3rem] my-12 w-full h-auto premium-shadow" />

                        <h2 className="text-3xl font-playfair font-bold mt-12 mb-6 italic">Styling for the Season</h2>
                        <p>As we transition into the spring months, we see a shift toward lighter tones and more delicate charms. Rose gold plating and pearls are particularly popular for garden parties and outdoor social events where your pet is sure to be the center of attention.</p>

                        <p>Every piece in our collection is designed to be timeless. We avoid fleeting trends in favor of elegance that stays relevant season after season. It’s what our customers across the UK have come to expect from Paw Jewels.</p>
                    </div>

                    <div className="mt-24 pt-12 border-t border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full overflow-hidden flex items-center justify-center font-playfair font-bold text-primary">EJ</div>
                            <div>
                                <h4 className="font-bold text-deep-grey">Eleanor James</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Creative Director, Paw Jewels</p>
                            </div>
                        </div>
                        <Button variant="secondary" onClick={() => router.back()}>Back to Journal</Button>
                    </div>
                </AnimatedSection>

                {/* More Articles */}
                <section className="mt-32 max-w-6xl mx-auto">
                    <AnimatedSection className="mb-12">
                        <h2 className="text-3xl font-playfair font-bold text-deep-grey italic">Continue Reading</h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-12">
                        {blogs.filter(b => b.slug !== slug).map((b, i) => (
                            <Link key={b.slug} href={`/blog/${b.slug}`} className="group flex items-center space-x-6">
                                <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0">
                                    <img src={b.image} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">{b.category}</span>
                                    <h4 className="text-xl font-playfair font-bold text-deep-grey group-hover:text-primary transition-colors leading-tight italic">{b.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogDetail;
