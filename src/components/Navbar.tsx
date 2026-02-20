"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Drawer } from "./Drawer";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionLink";

const navItems = [
    { name: "ホーム", path: "/" },
    { name: "AI×ガジェット", path: "/courses/ai-gadget" },
    { name: "デジタル工作", path: "/courses/digital-fab" },
    { name: "共通テスト", path: "/courses/exam-challenge" },
    { name: "生成AI", path: "/courses/gen-ai" },
    { name: "スプレッドシート", path: "/courses/spreadsheet" },
];

export function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <TransitionLink href="/" className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                            情報I 最終課題
                        </TransitionLink>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <TransitionLink
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${pathname === item.path
                                    ? "text-primary-600 dark:text-primary-400"
                                    : "text-neutral-600 dark:text-neutral-400"
                                    }`}
                            >
                                {item.name}
                            </TransitionLink>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            className="p-2 -mr-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 focus:outline-none"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <div className="flex flex-col space-y-4">
                    <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">メニュー</h3>
                    </div>
                    {navItems.map((item) => (
                        <TransitionLink
                            key={item.path}
                            href={item.path}
                            className={`text-base font-medium py-2 block ${pathname === item.path
                                ? "text-primary-600 dark:text-primary-400"
                                : "text-neutral-600 dark:text-neutral-400"
                                }`}
                        >
                            {item.name}
                        </TransitionLink>
                    ))}
                </div>
            </Drawer>
        </nav>
    );
}
