import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Button = ({ children, href, variant = "primary", className = "", showIcon = false, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-10 py-5 rounded-none font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 transform hover:scale-[1.02] active:scale-95";

    const variants = {
        primary: "bg-accent text-primary hover:bg-gold-light shadow-xl shadow-accent/10 border border-accent",
        secondary: "bg-white text-primary hover:bg-gray-100 shadow-xl shadow-black/20 border border-white",
        outline: "bg-transparent border border-accent/40 text-accent hover:border-accent hover:bg-accent/5"
    };

    const content = (
        <>
            {children}
            {showIcon && <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className} group`} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className} group`} {...props}>
            {content}
        </button>
    );
};

export default Button;
