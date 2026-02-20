import { FileQuestion, ScrollText, Timer, Trophy } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <FileQuestion className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">入試・実力試しチャレンジ</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        1年間の学びを試そう！大学入学共通テスト「情報I」の過去問やオリジナルクイズに挑戦。
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Challenge Mode */}
                <div className="col-span-1 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                    <div className="flex items-center mb-4 text-green-600 dark:text-green-400">
                        <Timer className="w-6 h-6 mr-2" />
                        <h2 className="text-xl font-bold">タイムアタック</h2>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
                        制限時間内に何問解けるか挑戦！プログラミングのトレース問題や、データ分析の基本単語など。
                    </p>
                    <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-md">
                        クイズを開始する (Demo)
                    </button>
                </div>

                {/* Resources */}
                <div className="col-span-1 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                    <div className="flex items-center mb-4 text-green-600 dark:text-green-400">
                        <ScrollText className="w-6 h-6 mr-2" />
                        <h2 className="text-xl font-bold">過去問アーカイブ</h2>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors cursor-pointer group">
                            <span className="text-sm font-medium">2025年度 本試験</span>
                            <Trophy className="w-4 h-4 text-neutral-400 group-hover:text-green-500" />
                        </li>
                        <li className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors cursor-pointer group">
                            <span className="text-sm font-medium">2025年度 追試験</span>
                            <Trophy className="w-4 h-4 text-neutral-400 group-hover:text-green-500" />
                        </li>
                        <li className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors cursor-pointer group">
                            <span className="text-sm font-medium">試作問題 (2022公表)</span>
                            <Trophy className="w-4 h-4 text-neutral-400 group-hover:text-green-500" />
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-2xl mx-auto mt-12 px-4 text-center">
                <h3 className="text-lg font-bold mb-4 text-neutral-500 dark:text-neutral-400">ランキング（上位3名）</h3>
                <div className="flex justify-center items-end gap-4 h-32">
                    <div className="w-20 bg-neutral-200 dark:bg-neutral-800 h-16 rounded-t-lg flex items-center justify-center flex-col">
                        <span className="font-bold text-neutral-500">2nd</span>
                        <span className="text-xs">Bさん</span>
                    </div>
                    <div className="w-20 bg-yellow-400 dark:bg-yellow-500/80 h-24 rounded-t-lg flex items-center justify-center flex-col shadow-lg z-10 relative">
                        <span className="text-2xl pt-1">👑</span>
                        <span className="font-bold text-white">1st</span>
                        <span className="text-xs text-white">Aさん</span>
                    </div>
                    <div className="w-20 bg-neutral-200 dark:bg-neutral-800 h-12 rounded-t-lg flex items-center justify-center flex-col">
                        <span className="font-bold text-neutral-500">3rd</span>
                        <span className="text-xs">Cさん</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
