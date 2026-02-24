export function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            © 2026 Information I Class. All rights reserved. / 情報科 山本周
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        {/* Add links if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
