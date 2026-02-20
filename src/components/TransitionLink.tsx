"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface TransitionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function TransitionLink({ href, children, className }: TransitionLinkProps) {
    const router = useRouter();
    const [isExiting, setIsExiting] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // If clicking same link, do nothing or normal behavior? 
        // Let's allow transition.
        setIsExiting(true);

        // Cover animation then push
        setTimeout(() => {
            router.push(href);
            // Reset state after navigation (though component might unmount/remount depending on usage)
            // If it's a layout link it might persist.
            setTimeout(() => setIsExiting(false), 1000);
        }, 500);
    };

    return (
        <>
            {isExiting && (
                <div
                    className="fixed inset-0 bg-neutral-900 dark:bg-neutral-100 z-[60] animate-cover pointer-events-none"
                    style={{
                        animation: "cover 0.5s cubic-bezier(0.87, 0, 0.13, 1) forwards",
                    }}
                />
            )}
            <a href={href} onClick={handleClick} className={className}>
                {children}
            </a>
        </>
    );
}
