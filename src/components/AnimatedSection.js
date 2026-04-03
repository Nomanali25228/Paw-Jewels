import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AnimatedSection = ({ children, animation = "up", delay = 0, className = "" }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        let fromVars = { opacity: 0 };
        let toVars = {
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: delay,
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        };

        if (animation === "up") {
            fromVars.y = 50;
            toVars.y = 0;
        } else if (animation === "down") {
            fromVars.y = -50;
            toVars.y = 0;
        } else if (animation === "left") {
            fromVars.x = 50;
            toVars.x = 0;
        } else if (animation === "right") {
            fromVars.x = -50;
            toVars.x = 0;
        } else if (animation === "fade") {
            // Default fade
        }

        gsap.fromTo(el, fromVars, toVars);
    }, [animation, delay]);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedSection;
