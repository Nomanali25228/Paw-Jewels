import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loader = () => {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline();

        // Logo pulse and rotation
        tl.to(logoRef.current, {
            scale: 1.1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Text reveal
        gsap.fromTo(textRef.current, 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
        );

        const hideLoader = () => {
            setTimeout(() => {
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "power4.inOut",
                    onComplete: () => setLoading(false)
                });
            }, 2500);
        };

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader);
            return () => window.removeEventListener('load', hideLoader);
        }
    }, []);

    if (!loading) return null;

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
            <div className="relative flex flex-col items-center">
                {/* Gold Glow Background */}
                <div className="absolute inset-0 w-40 h-40 bg-accent/20 blur-[100px] animate-pulse"></div>

                <div ref={logoRef} className="relative z-10 mb-12">
                    <img
                        src="/images/logo.png"
                        alt="MANOR GUARDIAN"
                        className="w-32 h-32 md:w-48 md:h-48 object-contain"
                    />
                </div>

                <div ref={textRef} className="relative z-10 text-center">
                    <h2 className="text-accent font-heading text-xs uppercase tracking-[0.8em] font-bold mb-3">MANOR GUARDIAN</h2>
                    <div className="w-40 h-[1px] bg-accent/20 mx-auto overflow-hidden relative">
                        <div className="absolute inset-0 bg-accent w-1/2 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <p className="text-gray-700 font-body text-[8px] uppercase tracking-[0.4em] mt-3">Establishing Hierarchy</p>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
};

export default Loader;
