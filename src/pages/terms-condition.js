import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';
import { FileText, Shield, Archive, Globe, Cpu } from 'lucide-react';

const LegalPage = ({ title, content }) => {
    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>{title} | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6 max-w-5xl">
                <AnimatedSection className="mb-24 text-center">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-[0.6em] mb-6 block font-body">Status Protocol</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 italic uppercase tracking-widest">{title}</h1>
                    <p className="text-gray-500 font-body text-xs uppercase tracking-[0.4em] font-bold">Protocol ID: MG-TC-2026-002 • Last Authentication: Feb 2026</p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar: Navigation for legal */}
                    <div className="hidden lg:block space-y-8 sticky top-48">
                        <div className="p-8 border border-accent/20 bg-white/5 space-y-6">
                            <h3 className="text-accent font-heading font-bold text-xs uppercase tracking-widest">Protocol Index</h3>
                            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <li className="text-white border-l border-accent pl-4">Agreement</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Artifact Curation</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Investment & Dispatch</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Intellectual Property</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Liability Protocol</li>
                            </ul>
                        </div>
                    </div>

                    <AnimatedSection animation="up" className="lg:col-span-3 space-y-20">
                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <Shield size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Agreement to Status</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">By accessing the Manor Guardian portal, you agree to adhere to our exclusive standards of conduct. These terms govern the acquisition, use, and curation of all artifacts presented within the Guardian network.</p>
                        </section>

                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <Archive size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Artifact Curation</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">Each piece in the Manor Guardian archive is handcrafted and subject to individual variation. These variations are the hallmark of artisanal hierarchy and do not constitute defects. We reserve the right to limit the acquisition of specific artifacts to maintain exclusivity.</p>
                        </section>

                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <Globe size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Investment & Dispatch</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">All prices are represented in GBP (£) reflecting the heritage of our London origins. Investment must be secured in full via encrypted gateways prior to the vault dispatch protocol. Dispatch times are estimates of courier status and not guaranteed durations.</p>
                        </section>

                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <Cpu size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Digital Property</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">The visual hierarchy, photography, and design language of Manor Guardian are the exclusive intellectual property of the Guardian network. Any unauthorized reproduction of our status symbols is strictly prohibited by international law.</p>
                        </section>
                        
                        <div className="pt-20 text-center">
                            <p className="text-gray-700 text-[10px] uppercase tracking-[0.5em] font-bold">ESTABLISHING AUTHORITY SINCE 2018</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default function TermsPage() {
    return <LegalPage title="Terms & Status Protocol" />;
}
