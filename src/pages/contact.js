import React from 'react';
import Head from 'next/head';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 bg-soft-white min-h-screen">
            <Head>
                <title>Contact Us | Paw Jewels Concierge</title>
            </Head>

            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-deep-grey mb-6 italic">How can we help?</h1>
                    <p className="text-lg text-gray-500 italic">Our concierge team is dedicated to providing you and your pet with the ultimate luxury experience. Reach out for styling advice or order inquiries.</p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Contact Info */}
                    <AnimatedSection animation="right" className="space-y-12">
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { icon: MessageSquare, title: "Chat with us", detail: "Active 9am - 6pm GMT", link: "Live Chat" },
                                { icon: Mail, title: "Email us", detail: "concierge@pawjewels.uk", link: "Send Email" },
                                { icon: Phone, title: "Call us", detail: "+44 (0) 20 7946 0000", link: "Call Now" },
                                { icon: MapPin, title: "Our Studio", detail: "Mayfair, London, UK", link: "Visit Us" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2.5rem] premium-shadow border border-secondary/10 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-playfair font-bold text-lg mb-2 group-hover:text-white">{item.title}</h3>
                                    <p className="text-xs text-gray-400 group-hover:text-white/70 mb-4">{item.detail}</p>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-white border-b border-primary/20 group-hover:border-white/20 cursor-pointer">{item.link}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-deep-grey text-white p-12 rounded-[3.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-[100%]"></div>
                            <h3 className="text-2xl font-playfair font-bold mb-6 italic">Join our social circle</h3>
                            <p className="text-gray-400 mb-8 italic">Follow us for daily pet inspiration and tag #PawJewelsUK for a chance to be featured on our official channel.</p>
                            <div className="flex space-x-6">
                                {[Instagram, Facebook].map((Icon, i) => (
                                    <button key={i} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                        <Icon size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Contact Form */}
                    <AnimatedSection animation="left" className="bg-white p-10 md:p-16 rounded-[4rem] premium-shadow border border-secondary/10">
                        <h3 className="text-3xl font-playfair font-bold text-deep-grey mb-8 italic">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-secondary/5 border-none rounded-full px-8 py-4 outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                                    <input type="email" placeholder="email@address.com" className="w-full bg-secondary/5 border-none rounded-full px-8 py-4 outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                                <select className="w-full bg-secondary/5 border-none rounded-full px-8 py-4 outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                                    <option>Inquiry about an Order</option>
                                    <option>Styling Advice</option>
                                    <option>Wholesale/B2B</option>
                                    <option>Press Inquiries</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Message</label>
                                <textarea rows="5" placeholder="How can we help you and your companion today?" className="w-full bg-secondary/5 border-none rounded-[2rem] px-8 py-6 outline-none focus:ring-2 focus:ring-primary/20 resize-none"></textarea>
                            </div>
                            <Button className="w-full py-5">Submit Message</Button>
                            <p className="text-[10px] text-gray-400 text-center italic mt-6">By submitting, you agree to our privacy policy and terms.</p>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
