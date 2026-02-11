import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Button = ({ children, href, variant = "primary", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg";

    const variants = {
        primary: "bg-primary text-white hover:bg-accent shadow-primary/20",
        secondary: "bg-white text-deep-grey hover:bg-secondary/10 shadow-black/5",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    const content = (
        <>
            {children}
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
