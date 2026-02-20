"use client";

import { TransitionLink } from "./TransitionLink";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    color: string; // Tailwind color class for icon/accent
}

export function CourseCard({ title, description, icon, href, color }: CourseCardProps) {
    return (
        <TransitionLink
            href={href}
            className="group relative block h-full p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="flex flex-col h-full">
                <div className={`mb-4 inline-flex p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex items-center text-sm font-medium text-neutral-500 dark:text-neutral-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    コースを見る
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </TransitionLink>
    );
}
