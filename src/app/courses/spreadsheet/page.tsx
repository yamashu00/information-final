import { FileSpreadsheet, Keyboard, Search, Calculator, ExternalLink } from "lucide-react";

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

                    {/* Practical Task: School Festival Accounting */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border-2 border-teal-500/20 p-8 animate-fade-in order-first md:order-none" style={{ animationDelay: "100ms" }}>
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full mr-4">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">実践課題</span>
                                <h2 className="text-2xl font-bold">記念祭（文化祭）会計報告を作ろう</h2>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <p className="text-neutral-600 dark:text-neutral-400">
                                クラスの模擬店で「何がいくら売れたか」「利益はいくらか」を計算するシートを作成します。
                                これさえあれば、面倒な計算も一瞬で終わります！
                            </p>

                            <div className="space-y-6">
                                <StepItem
                                    step={1}
                                    title="データの入力（売上管理表）"
                                    desc="A列に「品名」、B列に「単価」、C列に「販売数」を入力します。"
                                    code={[
                                        ["品名", "単価", "販売数", "売上小計"],
                                        ["焼きそば", "300", "150", ""],
                                        ["ジュース", "150", "200", ""],
                                        ["フランクフルト", "200", "120", ""]
                                    ]}
                                />
                                <StepItem
                                    step={2}
                                    title="計算式の入力（掛け算）"
                                    desc="「売上小計」を求めます。D2セルに以下の式を入力し、下までコピー（オートフィル）します。"
                                    formula="=B2*C2"
                                />
                                <StepItem
                                    step={3}
                                    title="経費の計算（引き算・合計）"
                                    desc="材料費などの「経費」を引いて「純利益」を出します。SUM関数で合計を出してから引き算します。"
                                    formula="=SUM(D2:D4) - 経費合計セル"
                                />
                                <StepItem
                                    step={4}
                                    title="グラフで可視化"
                                    desc="品名と販売数を選択して「挿入 > グラフ」をクリック。一番売れた商品が一目でわかります！"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Functions */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <h2 className="text-xl font-bold mb-6 flex items-center text-teal-600 dark:text-teal-400">
                            <Search className="w-6 h-6 mr-2" />
                            必須関数ベスト3
                        </h2>
                        <div className="space-y-6">
                            <FunctionItem
                                name="SUM / AVERAGE"
                                desc="基本中の基本。合計と平均を求めます。"
                                formula="=SUM(A1:A10)"
                            />
                            <FunctionItem
                                name="IF / IFS"
                                desc="「もし〜ならA、そうでなければB」。赤字の時に文字色を変えるなどに応用可能。"
                                formula='=IF(利益<0, "赤字", "黒字")'
                            />
                            <FunctionItem
                                name="VLOOKUP / XLOOKUP"
                                desc="商品IDから商品名を自動入力するなど、データ連携の必修科目。"
                                formula="=XLOOKUP(検索値, 検索範囲, 戻り範囲)"
                            />
                        </div>
                    </div>

                </div>

                {/* Sidebar (Shortcuts) */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-neutral-900 text-white rounded-xl shadow-lg p-6 animate-fade-in sticky top-24" style={{ animationDelay: "300ms" }}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold flex items-center text-cyan-400">
                                <Keyboard className="w-5 h-5 mr-2" />
                                神ショートカット
                            </h2>
                            <a
                                href="https://www.programmingeducationblog.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-neutral-400 hover:text-white flex items-center transition-colors"
                            >
                                情報教育Lab
                                <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                        <div className="space-y-5">
                            <ShortcutBlock
                                title="基本操作"
                                items={[
                                    { keys: ["Ctrl", "C"], desc: "コピー" },
                                    { keys: ["Ctrl", "V"], desc: "貼り付け" },
                                    { keys: ["Ctrl", "Z"], desc: "元に戻す" }
                                ]}
                            />
                            <ShortcutBlock
                                title="データ選択"
                                items={[
                                    { keys: ["Ctrl", "A"], desc: "全選択" },
                                    { keys: ["Ctrl", "Shift", "Arrow"], desc: "端まで選択" },
                                ]}
                            />
                            <ShortcutBlock
                                title="便利機能"
                                items={[
                                    { keys: ["Ctrl", "D"], desc: "上のデータをコピー" },
                                    { keys: ["Ctrl", "R"], desc: "左のデータをコピー" },
                                    { keys: ["Ctrl", ";"], desc: "今日の日付を入力" },
                                ]}
                            />
                        </div>

                        <p className="mt-6 text-xs text-neutral-400 text-center">※Macの場合はCtrlをCmdに置き換えてください</p>

                        <a
                            href="https://www.programmingeducationblog.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block bg-neutral-800 text-neutral-300 text-xs text-center py-3 rounded hover:bg-neutral-700 transition-colors"
                        >
                            もっと見る（情報教育Lab.へ）
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

function StepItem({ step, title, desc, formula, code }: { step: number, title: string, desc: string, formula?: string, code?: string[][] }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                {step}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{desc}</p>
                {formula && (
                    <code className="block bg-neutral-100 dark:bg-neutral-800 p-2 rounded text-sm font-mono text-teal-700 dark:text-teal-300 mb-2">
                        {formula}
                    </code>
                )}
                {code && (
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded overflow-hidden text-xs">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                {code.map((row, i) => (
                                    <tr key={i} className={i === 0 ? "bg-neutral-200 dark:bg-neutral-700 font-bold" : ""}>
                                        {row.map((cell, j) => (
                                            <td key={j} className="p-2 border border-neutral-300 dark:border-neutral-600">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
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

function ShortcutBlock({ title, items }: { title: string, items: { keys: string[], desc: string }[] }) {
    return (
        <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                        <span className="text-neutral-300 text-sm">{item.desc}</span>
                        <div className="flex gap-1">
                            {item.keys.map((k, j) => (
                                <kbd key={j} className="bg-neutral-700 px-1.5 py-0.5 rounded text-xs font-mono min-w-[20px] text-center border-b-2 border-neutral-600">
                                    {k}
                                </kbd>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
