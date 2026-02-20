import { FileSpreadsheet, Keyboard, TrendingUp, Search, Database } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            <section className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <FileSpreadsheet className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">スプレッドシートマスター</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        一生使える「業務効率化」の武器を手に入れよう。
                        魔法のような関数とショートカットキーで、作業時間を劇的に短縮。
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">

                    {/* Functions */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <h2 className="text-xl font-bold mb-6 flex items-center text-teal-600 dark:text-teal-400">
                            <Search className="w-6 h-6 mr-2" />
                            必須関数ベスト3
                        </h2>
                        <div className="space-y-6">
                            <FunctionItem
                                name="VLOOKUP / XLOOKUP"
                                desc="「別の表からデータを探して持ってくる」関数。これを覚えるだけで脱初心者。"
                                formula="=XLOOKUP(検索値, 検索範囲, 戻り範囲)"
                            />
                            <FunctionItem
                                name="IF / IFS"
                                desc="「もし〜ならA、そうでなければB」という条件分岐。データの自動判定に必須。"
                                formula='=IF(A1>=80, "合格", "不合格")'
                            />
                            <FunctionItem
                                name="COUNTIF / SUMIF"
                                desc="「条件に合うものだけ」数えたり合計したりする関数。アンケート集計などで活躍。"
                                formula='=COUNTIF(範囲, "男性")'
                            />
                        </div>
                    </div>

                    {/* Analysis Pivot Table */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <h2 className="text-xl font-bold mb-6 flex items-center text-teal-600 dark:text-teal-400">
                            <TrendingUp className="w-6 h-6 mr-2" />
                            データ分析の王様「ピボットテーブル」
                        </h2>
                        <div className="prose dark:prose-invert text-sm max-w-none">
                            <p className="mb-4">
                                関数を一切使わずに、ドラッグ＆ドロップだけで「クラス別の平均点」や「月ごとの売上合計」などを一瞬で集計できる機能です。
                            </p>
                            <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold mb-2">使い方手順</h4>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>データが含まれるセル範囲を選択する</li>
                                    <li>メニューの<strong>「挿入」</strong> → <strong>「ピボットテーブル」</strong>をクリック</li>
                                    <li>新しいシートが作成されるので、右側のサイドバーで操作：
                                        <ul className="list-disc list-inside ml-4 mt-1 text-neutral-600 dark:text-neutral-400">
                                            <li>「行」に分析したい項目（例：クラス）を追加</li>
                                            <li>「値」に集計したい数値（例：点数）を追加</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Data Cleaning */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "250ms" }}>
                        <h2 className="text-xl font-bold mb-4 flex items-center text-teal-600 dark:text-teal-400">
                            <Database className="w-6 h-6 mr-2" />
                            データクレンジング（お掃除）
                        </h2>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                            人からもらったデータが汚くて集計できない...そんな時に役立つテクニック。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded">
                                <code className="text-xs font-bold text-teal-600">=TRIM(A1)</code>
                                <p className="text-xs mt-1">余計なスペース（空白）を削除</p>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded">
                                <code className="text-xs font-bold text-teal-600">データ &gt; 重複の削除</code>
                                <p className="text-xs mt-1">同じデータが2回出てくるのを消す</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sidebar (Shortcuts) */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-neutral-900 text-white rounded-xl shadow-lg p-6 animate-fade-in sticky top-24" style={{ animationDelay: "300ms" }}>
                        <h2 className="text-lg font-bold mb-4 flex items-center text-cyan-400">
                            <Keyboard className="w-5 h-5 mr-2" />
                            神ショートカット
                        </h2>
                        <ul className="space-y-4 text-sm">
                            <ShortcutItem keys={["Ctrl", "C"]} desc="コピー" />
                            <ShortcutItem keys={["Ctrl", "V"]} desc="貼り付け" />
                            <ShortcutItem keys={["Ctrl", "Z"]} desc="元に戻す" />
                            <li className="border-t border-neutral-700 pt-2 my-2" />
                            <ShortcutItem keys={["Ctrl", "Arrow"]} desc="データの端まで移動" />
                            <ShortcutItem keys={["Ctrl", "Shift", "Arrow"]} desc="データの端まで選択" />
                            <li className="border-t border-neutral-700 pt-2 my-2" />
                            <ShortcutItem keys={["Ctrl", "D"]} desc="上のセルをコピー（Down）" />
                            <ShortcutItem keys={["Ctrl", "R"]} desc="左のセルをコピー（Right）" />
                        </ul>
                        <p className="mt-6 text-xs text-neutral-400 text-center">※MacはCmdキー</p>
                    </div>

                    <a href="#" className="block bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl shadow-lg p-6 text-center hover:opacity-90 transition-opacity">
                        <span className="block font-bold text-lg mb-1">練習用データ</span>
                        <span className="text-sm opacity-90">ダウンロード (CSV)</span>
                    </a>
                </div>

            </div>
        </div>
    );
}

function FunctionItem({ name, desc, formula }: { name: string, desc: string, formula: string }) {
    return (
        <div className="border-b border-neutral-100 dark:border-neutral-800 last:border-0 pb-6 last:pb-0">
            <h3 className="font-bold text-lg mb-1">{name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{desc}</p>
            <code className="block bg-neutral-100 dark:bg-neutral-800 p-2 rounded text-xs font-mono text-teal-700 dark:text-teal-300">
                {formula}
            </code>
        </div>
    )
}

function ShortcutItem({ keys, desc }: { keys: string[], desc: string }) {
    return (
        <li className="flex justify-between items-center">
            <span className="text-neutral-300">{desc}</span>
            <div className="flex gap-1">
                {keys.map((k, i) => (
                    <kbd key={i} className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs font-mono min-w-[20px] text-center border-b-2 border-neutral-600">
                        {k}
                    </kbd>
                ))}
            </div>
        </li>
    )
}
