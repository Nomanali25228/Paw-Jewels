import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';
import { Filter, ChevronDown, Search } from 'lucide-react';

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
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>Shop Luxury Pet Jewelry | Paw Jewels</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-deep-grey mb-4 italic">The Collection</h1>
                    <p className="text-gray-500 max-w-xl">Browse our exquisite range of handcrafted pet jewelry. Filter by category or type to find the perfect gift.</p>
                </AnimatedSection>

                {/* Filters Bar */}
                <div className="bg-white rounded-3xl p-6 mb-12 premium-shadow flex flex-wrap items-center gap-6 border border-secondary/20">
                    <div className="flex-1 min-w-[200px] relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-3 bg-secondary/5 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="relative group">
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="appearance-none bg-white border border-secondary/30 rounded-full px-6 py-3 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                            >
                                {categories.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        </div>

                        <div className="relative group">
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="appearance-none bg-white border border-secondary/30 rounded-full px-6 py-3 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                            >
                                {types.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        </div>

                        <div className="relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-white border border-secondary/30 rounded-full px-6 py-3 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                            >
                                <option value="newest">Newest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        </div>
                    </div>
                </div>

                {/* Results Counter */}
                <div className="mb-8 flex justify-between items-center text-sm font-medium text-gray-400 uppercase tracking-widest">
                    <span>Showing {sortedProducts.length} of {products.length} Products</span>
                </div>

                {/* Product Grid */}
                {sortedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {sortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-24 text-center">
                        <h3 className="text-2xl font-playfair font-bold text-deep-grey mb-4">No products found</h3>
                        <p className="text-gray-500 mb-8">Try adjusting your filters or search query.</p>
                        <button
                            onClick={() => { setFilterCategory('all'); setFilterType('all'); setSearchQuery(''); }}
                            className="text-primary font-bold uppercase tracking-widest border-b-2 border-primary"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
