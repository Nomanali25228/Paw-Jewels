import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';

const LegalPage = ({ title, content }) => {
    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>{title} | Paw Jewels</title>
            </Head>

            <div className="container mx-auto px-6 max-w-4xl">
                <AnimatedSection className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-deep-grey mb-6 italic">{title}</h1>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Last updated: February 2026</p>
                </AnimatedSection>

                <AnimatedSection animation="up" className="bg-white p-10 md:p-20 rounded-[4rem] premium-shadow border border-secondary/10 prose prose-lg prose-stone max-w-none">
                    <div className="space-y-12 text-gray-600 leading-[1.8]">
                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Introduction</h2>
                            <p>At Paw Jewels UK, we are committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or make a purchase.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Data Collection</h2>
                            <p>We may collect information such as your name, email address, shipping address, and payment details when you place an order. We also collect browsing data through cookies to improve your user experience.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">How we use your data</h2>
                            <p>Your data is primarily used to process your orders and communicate with you about your luxury pet accessories. If you opt-in, we may also send you newsletters about our latest collections and styling tips.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Security</h2>
                            <p>We implement a variety of security measures to maintain the safety of your personal information. All payment transactions are processed through encrypted, secure gateways like Stripe and PayPal.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-playfair font-bold text-deep-grey mb-6 italic underline decoration-primary/30 underline-offset-8">Your Rights</h2>
                            <p>Under UK GDPR, you have the right to access, correct, or delete your personal data at any time. Please contact our concierge team at concierge@pawjewels.uk for any privacy-related requests.</p>
                        </section>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default function PrivacyPolicy() {
    return <LegalPage title="Privacy Policy" />;
}
