"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PromptCardProps {
    title: string;
    description?: string;
    prompt: string;
    badExample?: string;
}

export function PromptCard({ title, description, prompt, badExample }: PromptCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all">
            <div className="p-6">
                <h3 className="font-bold text-lg mb-2 flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                    {title}
                </h3>

                {description && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        {description}
                    </p>
                )}

                {badExample && (
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/50">
                        <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-1">NG例 😫</p>
                        <p className="text-sm text-red-800 dark:text-red-300 font-mono">{badExample}</p>
                    </div>
                )}

                <div className="relative">
                    <div className="absolute -top-3 left-3 px-2 bg-white dark:bg-neutral-900 text-xs font-bold text-blue-600 dark:text-blue-400">
                        Good Prompt 👍
                    </div>
                    <pre
                        onClick={handleCopy}
                        className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-mono bg-neutral-50 dark:bg-neutral-950 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                    >
                        {prompt}
                    </pre>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCopy();
                        }}
                        className="absolute top-2 right-2 p-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-blue-500 transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
