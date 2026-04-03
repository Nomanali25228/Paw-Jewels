import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const LegalPage = ({ title, content }) => {
    return (
        <div className="pt-48 pb-32 bg-primary min-h-screen text-white">
            <Head>
                <title>{title} | MANOR GUARDIAN</title>
            </Head>

            <div className="container mx-auto px-6 max-w-5xl">
                <AnimatedSection className="mb-24 text-center">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-[0.6em] mb-6 block font-body">Legal Archive</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 italic uppercase tracking-widest">{title}</h1>
                    <p className="text-gray-500 font-body text-xs uppercase tracking-[0.4em] font-bold">Document Ref: MG-PR-2026-001 • Last Authenticated: Feb 2026</p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar: Navigation for legal */}
                    <div className="hidden lg:block space-y-8 sticky top-48">
                        <div className="p-8 border border-accent/20 bg-white/5 space-y-6">
                            <h3 className="text-accent font-heading font-bold text-xs uppercase tracking-widest">Protocol Index</h3>
                            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <li className="text-white border-l border-accent pl-4">Introduction</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Data Sovereignty</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Security Layering</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Member Rights</li>
                                <li className="hover:text-accent transition-colors cursor-pointer pl-4">Consent Portal</li>
                            </ul>
                        </div>
                    </div>

                    <AnimatedSection animation="up" className="lg:col-span-3 space-y-20">
                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <FileText size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Introduction</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">At Manor Guardian, your digital sovereignty is as important as your companion's status. We implement elite encryption and strict handling protocols to ensure your data remains within our secure vault at all times.</p>
                        </section>

                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <Eye size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Data Sovereignty</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">We collect only the essential identifiers required for the acquisition and dispatch of artifacts. This includes your digital address, vaulting location, and procurement details. We do not sell or trade your status with third-party entities.</p>
                        </section>

                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <Lock size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Security Layering</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">All financial transactions are funneled through military-grade encrypted gateways. Our servers utilize advanced firewall layering and continuous monitoring to prevent unauthorized access to the Guardian network.</p>
                        </section>

                        <section className="space-y-8 p-12 border border-accent/5 bg-white/5">
                            <div className="flex items-center gap-4 text-accent mb-4">
                                <ShieldCheck size={24} strokeWidth={1} />
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">Your Rights</h2>
                            </div>
                            <p className="text-gray-500 font-body text-sm leading-loose tracking-wide italic">Under the UK Data Protection Act, you maintain the right to access, rectify, or purge your information from the Manor Guardian vault. For any security inquiries, please contact our lead archivist at concierge@manorguardian.uk.</p>
                        </section>
                        
                        <div className="pt-20 text-center">
                            <p className="text-gray-700 text-[10px] uppercase tracking-[0.5em] font-bold">MAINTAINING THE HIERARCHY SINCE 2018</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default function PrivacyPolicy() {
    return <LegalPage title="Privacy & Security Protocol" />;
}
