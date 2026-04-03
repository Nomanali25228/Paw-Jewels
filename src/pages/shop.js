import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';
import { Filter, ChevronDown, Search, Grid, List } from 'lucide-react';

const Shop = () => {
    const router = useRouter();
    const { cat } = router.query;

    const [filterCategory, setFilterCategory] = useState('all');
    const [filterType, setFilterType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        if (cat) {
            setFilterCategory(cat);
        }
    }, [cat]);

    const filteredProducts = products.filter(product => {
        const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
        const matchesType = filterType === 'all' || product.type === filterType;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesType && matchesSearch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0; // Default newest
    });

    const categories = ['all', 'cats', 'dogs'];
    const types = ['all', 'bags', 'harness', 'toys', 'collars', 'grooming', 'accessories'];

    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>THE COLLECTION | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <AnimatedSection className="max-w-2xl">
                        <span className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-4 block">New Arrivals</span>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-wider">THE <span className="italic text-accent">COLLECTION</span></h1>
                        <p className="text-gray-500 font-body text-xs sm:text-sm tracking-wide leading-relaxed max-w-lg">Explore our curated luxury collection of elite pet jewelry. Each piece is crafted for style, durability, and unmatched quality.</p>
                    </AnimatedSection>
                    
                   
                </div>

                {/* Refined Filters Bar */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 py-8 border-y border-accent/10">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12">
                        {/* Category Filter */}
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Category</span>
                            <div className="flex gap-6">
                                {categories.map(c => (
                                    <button 
                                        key={c} 
                                        onClick={() => setFilterCategory(c)}
                                        className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${filterCategory === c ? 'text-white border-b border-accent' : 'text-gray-600 hover:text-white'}`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-[1px] h-4 bg-accent/20"></div>

                        {/* Search */}
                        <div className="relative group w-full lg:min-w-[280px]">
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-accent" size={14} />
                            <input
                                type="text"
                                placeholder="SEARCH ALL PRODUCTS..."
                                className="w-full pl-8 pr-4 py-2 bg-transparent border-none text-[10px] uppercase tracking-widest text-white outline-none focus:ring-0 placeholder:text-gray-700 font-bold"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/20 transition-all duration-500 group-focus-within:h-[2px] group-focus-within:bg-accent"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-transparent text-[10px] uppercase tracking-[0.3em] font-bold text-accent px-4 py-2 pr-10 outline-none cursor-pointer border border-accent/20 hover:border-accent transition-colors"
                            >
                                <option value="newest" className="bg-primary">Newest First</option>
                                <option value="price-low" className="bg-primary">Price: Low to High</option>
                                <option value="price-high" className="bg-primary">Price: High to Low</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-accent pointer-events-none" size={12} />
                        </div>
                    </div>
                </div>

                {/* Results Counter */}
                <div className="mb-12 flex justify-between items-center text-[10px] font-bold text-gray-700 uppercase tracking-[0.5em]">
                    <span>Results ({sortedProducts.length})</span>
                    <span className="text-accent/40 italic">Luxury Selection</span>
                </div>

                {/* Product Grid */}
                {sortedProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-12">
                        {sortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-40 text-center border border-accent/10 bg-white/5">
                        <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-widest">No Products Found</h3>
                        <p className="text-gray-500 font-body text-sm mb-12 tracking-wide">Adjust your search parameters to find the perfect piece.</p>
                        <button
                            onClick={() => { setFilterCategory('all'); setFilterType('all'); setSearchQuery(''); }}
                            className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] border-b-2 border-accent/20 hover:border-accent transition-all pb-2"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
