import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loader = () => {
    const loaderRef = useRef(null);
    const catContainerRef = useRef(null);
    const bodyRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline();

        // Leg walking cycle (4 legs staggered)
        const legs = ['.leg-1', '.leg-2', '.leg-3', '.leg-4'];
        legs.forEach((leg, i) => {
            gsap.fromTo(leg,
                { rotation: -25, x: -2 },
                {
                    rotation: 25,
                    x: 2,
                    duration: 0.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: (i % 2 === 0 ? 0 : 0.4),
                    transformOrigin: "50% 0%"
                }
            );
        });

        // Body Squash & Stretch (Bobbing)
        gsap.to(bodyRef.current, {
            y: 3,
            scaleY: 0.95,
            scaleX: 1.05,
            duration: 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Head bobbing (slightly offset from body)
        gsap.to(".cat-head", {
            y: 2,
            duration: 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.05
        });

        // Tail wave animation
        gsap.to(".cat-tail", {
            rotation: 15,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Ears twitch
        gsap.to(".cat-ear", {
            rotation: 5,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.1
        });

        const hideLoader = () => {
            setTimeout(() => {
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => setLoading(false)
                });
            }, 2000);
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
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
            {/* SVG Filter for Gooey/Liquid effect */}
            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <div className="relative w-48 h-48 flex items-center justify-center">
                <div
                    ref={catContainerRef}
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ filter: "url(#goo)" }}
                >
                    <svg viewBox="0 0 120 120" className="w-32 h-32 fill-[#72D8FD]">
                        {/* Body & Head (Liquidly joined) */}
                        <g ref={bodyRef}>
                            {/* Tail */}
                            <path
                                className="cat-tail"
                                d="M35 65 C25 65 15 55 15 40"
                                stroke="#72D8FD"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                                style={{ transformOrigin: "35px 65px" }}
                            />

                            {/* Main Torso */}
                            <rect x="35" y="55" width="50" height="25" rx="12" />

                            {/* Neck & Head */}
                            <g className="cat-head">
                                <circle cx="85" cy="50" r="18" />
                                {/* Ears */}
                                <path className="cat-ear" d="M72 38 L68 22 L80 32 Z" style={{ transformOrigin: "72px 38px" }} />
                                <path className="cat-ear" d="M92 38 L98 22 L86 32 Z" style={{ transformOrigin: "92px 38px" }} />
                                {/* Eyes (Simple white dots) */}
                                <circle cx="80" cy="48" r="1.5" fill="white" />
                                <circle cx="90" cy="48" r="1.5" fill="white" />
                            </g>
                        </g>

                        {/* Legs */}
                        <g className="cat-legs">
                            {/* Back Legs */}
                            <rect className="leg-1" x="42" y="70" width="8" height="20" rx="4" />
                            <rect className="leg-2" x="52" y="70" width="8" height="20" rx="4" />

                            {/* Front Legs */}
                            <rect className="leg-3" x="68" y="70" width="8" height="20" rx="4" />
                            <rect className="leg-4" x="78" y="70" width="8" height="20" rx="4" />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="mt-4 text-center">
                <h2 className="text-[10px] font-outfit font-bold text-[#72D8FD] uppercase tracking-[0.6em] opacity-60">
                    Paw Jewels London
                </h2>
            </div>
        </div>
    );
};

export default Loader;
