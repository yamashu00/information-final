import { FileQuestion, ScrollText, ExternalLink, Lightbulb } from "lucide-react";

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

            <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Past Exams */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <div className="flex items-center mb-4 text-green-600 dark:text-green-400">
                            <ScrollText className="w-6 h-6 mr-2" />
                            <h2 className="text-xl font-bold">過去問アーカイブ</h2>
                        </div>
                        <ul className="space-y-3">
                            <PastExamLink
                                title="2026年度 共通テスト"
                                subtitle="東進過去問データベース"
                                href="https://www.toshin.com/kyotsutest/data/3718/jouhou1.pdf"
                            />
                            <PastExamLink
                                title="2025年度 共通テスト"
                                subtitle="東進過去問データベース"
                                href="https://www.toshin.com/kyotsutest/2025/data/3092/jouhou1.pdf"
                            />
                            <PastExamLink
                                title="令和7年度 試作問題"
                                subtitle="大学入試センター"
                                href="https://www.dnc.ac.jp/albums/abm.php?d=744&f=abm00003277.pdf&n=6-2-1_%E8%A9%A6%E4%BD%9C%E5%95%8F%E9%A1%8C%E3%80%8E%E6%83%85%E5%A0%B1%E2%85%A0%E3%80%8F%E2%80%BB%E4%BB%A4%E5%92%8C4%E5%B9%B412%E6%9C%8823%E6%97%A5%E4%B8%80%E9%83%A8%E4%BF%AE%E6%AD%A3.pdf"
                            />
                        </ul>
                    </div>
                </div>

                {/* Breakdown & Analysis */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                            重要問題ピックアップ解説
                        </h2>

                        <div className="space-y-8">
                            {/* Topic 1 */}
                            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
                                <h3 className="text-lg font-bold mb-2 flex items-center">
                                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-sm mr-2">プログラミング</span>
                                    DNCLのトレース問題（試作問題 第3問）
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                                    「比例代表選挙」の議席配分アルゴリズム（ドント方式）を題材にした問題。
                                    配列のインデックス操作とループ処理がカギになります。
                                    <br />
                                    <strong>ポイント：</strong> 変数 <code>Tou</code>（党名）と <code>Tokuhyou</code>（得票数）が連動していることに注目。
                                    <code>Hikaku</code> 関数が「商」の最大値を持つ党のインデックスを返していることを読み取ろう。
                                </p>
                                <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-lg font-mono text-sm text-neutral-700 dark:text-neutral-300 overflow-x-auto">
                                    For i = 1 To Giseki<br />
                                    &nbsp;&nbsp;MaxIndex = Hikaku(Tokuhyou, Tousuu)<br />
                                    &nbsp;&nbsp;Tosen[MaxIndex] = Tosen[MaxIndex] + 1<br />
                                    &nbsp;&nbsp;CurrentTokuhyou[MaxIndex] = Tokuhyou[MaxIndex] / (Tosen[MaxIndex] + 1)<br />
                                    Next i
                                </div>
                            </div>

                            {/* Topic 2 */}
                            <div>
                                <h3 className="text-lg font-bold mb-2 flex items-center">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm mr-2">データ分析</span>
                                    散布図と相関係数（2025年度 第2問）
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                                    2つの変数の関係性を読み解く問題。
                                    「外れ値」が相関係数に与える影響や、擬似相関に注意が必要。
                                    <br />
                                    <strong>ポイント：</strong> 散布図が右上がりなら「正の相関（r ＞ 0）」、右下がりなら「負の相関（r ＜ 0）」。
                                    r = 0.7 以上なら「強い相関」と言える。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function PastExamLink({ title, subtitle, href }: { title: string, subtitle: string, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all border border-transparent hover:border-green-200 dark:hover:border-green-800 group"
        >
            <div>
                <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{title}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{subtitle}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-green-500 transition-colors" />
        </a>
    );
}
