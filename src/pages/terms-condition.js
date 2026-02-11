import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';

const TermsPage = () => {
    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>Terms & Conditions | Paw Jewels</title>
            </Head>

            <div className="container mx-auto px-6 max-w-4xl">
                <AnimatedSection className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-deep-grey mb-6 italic">Terms & Conditions</h1>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Effective Date: February 2026</p>
                </AnimatedSection>

                <AnimatedSection animation="up" className="bg-white p-10 md:p-20 rounded-[4rem] premium-shadow border border-secondary/10 prose prose-lg prose-stone max-w-none">
                    <div className="space-y-12 text-gray-600 leading-[1.8]">
                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Agreement to Terms</h2>
                            <p>By accessing and using the Paw Jewels website, you agree to be bound by these terms and conditions. These terms apply to all visitors, users, and customers of our luxury pet accessories.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Product Information</h2>
                            <p>We make every effort to display as accurately as possible the colors and images of our products. However, as our jewelry is handcrafted and uses natural materials like pearls, slight variations may occur. These are considered hallmarks of authenticity and quality.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Pricing and Payments</h2>
                            <p>All prices are shown in GBP (£) and are inclusive of UK VAT where applicable. We reserve the right to change prices without notice. Payments must be made in full at the time of purchase before orders are dispatched.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Shipping and Returns</h2>
                            <p>Shipping times are estimates and not guaranteed. Under UK law, you have 14 days to return items for a full refund (excluding custom/engraved pieces). Items must be returned in their original luxury packaging and in as-new condition.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Intellectual Property</h2>
                            <p>All content on this website, including designs, photography, and text, is the property of Paw Jewels UK and is protected by copyright laws. Unauthorized reproduction is strictly prohibited.</p>
                        </section>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default TermsPage;
