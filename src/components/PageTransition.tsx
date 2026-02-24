"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Reset state on path change to ensure animation can play
        let timer: NodeJS.Timeout;
        const animationFrame = requestAnimationFrame(() => {
            setIsLoaded(false);
            timer = setTimeout(() => setIsLoaded(true), 50);
        });
        return () => {
            cancelAnimationFrame(animationFrame);
            if (timer) clearTimeout(timer);
        };
    }, [pathname]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-neutral-900 dark:bg-neutral-100 z-50 transition-transform duration-500 origin-top pointer-events-none ${isLoaded ? "scale-y-0" : "scale-y-100"
                    }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)" }}
            />
            {children}
        </>
    );
}
