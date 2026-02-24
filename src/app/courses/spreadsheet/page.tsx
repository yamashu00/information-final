"use client";

import { useState } from "react";
import { FileSpreadsheet, Keyboard, Search, Calculator, ExternalLink, Download, Copy, Check } from "lucide-react";

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

                    {/* Practical Task */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border-2 border-teal-500/20 p-8 animate-fade-in order-first md:order-none" style={{ animationDelay: "100ms" }}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full mr-4">
                                    <Calculator className="w-8 h-8" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">実践課題</span>
                                    <h2 className="text-2xl font-bold">記念祭（文化祭）会計報告：実技練習問題</h2>
                                </div>
                            </div>
                            <a
                                href="https://docs.google.com/spreadsheets/d/1SwghfdIa5RsjYyvinRI5zgEyUksOgARa18J4plG0zco/copy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 group"
                            >
                                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                練習用シートをコピー
                            </a>
                        </div>

                        <div className="space-y-10">
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                この問題は、100行のサンプルデータが入ったスプレッドシートを使って、実務で使えるスキルを身につけるためのものです。
                            </p>

                            <div className="space-y-12">
                                {/* Step 1 */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 flex items-center text-neutral-800 dark:text-neutral-100 italic">
                                        <span className="bg-teal-500 text-white w-20 h-7 rounded-sm text-xs flex items-center justify-center not-italic mr-3 uppercase tracking-tighter">Step 1</span>
                                        基本の集計（データの全体像を掴む）
                                    </h3>
                                    <div className="space-y-6 ml-4 border-l-2 border-teal-100 dark:border-teal-900 pl-6">
                                        <QuestionItem
                                            title="全支出の合計を出そう"
                                            input="K3"
                                            formula="=SUM(H2:H101)"
                                            point="数値に「桁区切り（,）」を入れると見やすくなります。"
                                        />
                                        <QuestionItem
                                            title="「飲食」カテゴリの項目数を数えよう"
                                            input="K6"
                                            formula='=COUNTIF(D2:D101, "飲食")'
                                        />
                                        <QuestionItem
                                            title="1項目あたりの平均支出額を出そう"
                                            input="K9"
                                            formula="=AVERAGE(H2:H101)"
                                        />
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 flex items-center text-neutral-800 dark:text-neutral-100 italic">
                                        <span className="bg-teal-500 text-white w-20 h-7 rounded-sm text-xs flex items-center justify-center not-italic mr-3 uppercase tracking-tighter">Step 2</span>
                                        条件付き集計（グループ別集計）
                                    </h3>
                                    <div className="space-y-6 ml-4 border-l-2 border-teal-100 dark:border-teal-900 pl-6">
                                        <QuestionItem
                                            title="「1A (カフェ)」が使った合計金額を出そう"
                                            input="K12"
                                            formula='=SUMIF(C2:C101, "1A (カフェ)", H2:H101)'
                                        />
                                        <QuestionItem
                                            title="「未払」の合計金額を出そう"
                                            input="K15"
                                            formula='=SUMIF(I2:I101, "未払", H2:H101)'
                                        />
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 flex items-center text-neutral-800 dark:text-neutral-100 italic">
                                        <span className="bg-teal-500 text-white w-20 h-7 rounded-sm text-xs flex items-center justify-center not-italic mr-3 uppercase tracking-tighter">Step 3</span>
                                        論理・判定（チェック機能の自動化）
                                    </h3>
                                    <div className="space-y-6 ml-4 border-l-2 border-teal-100 dark:border-teal-900 pl-6">
                                        <QuestionItem
                                            title="「高額支出」を自動判定しよう（L列）"
                                            input="L3 に入力して L102 までコピー"
                                            formula='=IF(H3>=10000, "★高額", "-")'
                                        />
                                        <QuestionItem
                                            title="「支払いアラート」を作ろう（M列）"
                                            input="M3 に入力して M102 までコピー"
                                            formula='=IF(AND(I3="未払", H3>20000), "🚨即時支払", "OK")'
                                            point='空欄（""）ではなく「OK」と出すことで、入力漏れを検知しやすくします。'
                                        />
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 flex items-center text-neutral-800 dark:text-neutral-100 italic">
                                        <span className="bg-teal-500 text-white w-20 h-7 rounded-sm text-xs flex items-center justify-center not-italic mr-3 uppercase tracking-tighter">Step 4</span>
                                        高度なデータ抽出
                                    </h3>
                                    <div className="space-y-6 ml-4 border-l-2 border-teal-100 dark:border-teal-900 pl-6">
                                        <QuestionItem
                                            title="参加している団体の一覧を抜き出そう（N列）"
                                            input="N3"
                                            formula="=UNIQUE(C2:C101)"
                                            point="結果が下に伸びるため、N列の下の方は空けておいてください。"
                                        />
                                        <QuestionItem
                                            title="「装飾」カテゴリだけのリストを抜き出そう（O列）"
                                            input="O3"
                                            formula='=FILTER(B2:H101, D2:D101="装飾")'
                                            point="スピル範囲が他の問題と重ならないよう、右側（P列以降）に十分なスペースがある場所に配置してください。"
                                        />
                                    </div>
                                </div>
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

function FormulaBlock({ formula, className = "" }: { formula: string, className?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(formula);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative group/formula ${className}`}>
            <code className="block bg-neutral-100 dark:bg-neutral-800 p-3 pr-12 rounded text-sm font-mono text-teal-700 dark:text-teal-300 border-l-4 border-teal-500 overflow-x-auto">
                {formula}
            </code>
            <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white dark:bg-neutral-700 shadow-sm border border-neutral-200 dark:border-neutral-600 opacity-0 group-hover/formula:opacity-100 transition-opacity hover:bg-neutral-50 dark:hover:bg-neutral-600"
                title="数式をコピー"
            >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-neutral-500" />}
            </button>
        </div>
    );
}

function QuestionItem({ title, input, formula, point }: { title: string, input: string, formula: string, point?: string }) {
    return (
        <div className="space-y-3">
            <h4 className="font-bold text-neutral-800 dark:text-neutral-200">{title}</h4>
            <div className="bg-neutral-50 dark:bg-neutral-950 p-4 rounded-lg border border-neutral-100 dark:border-neutral-800 space-y-3">
                <div className="flex items-center text-sm">
                    <span className="text-neutral-500 mr-2">入力セル:</span>
                    <span className="font-mono bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded italic">{input}</span>
                </div>
                <div className="space-y-1">
                    <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold">数式</span>
                    <FormulaBlock formula={formula} />
                </div>
                {point && (
                    <div className="flex items-start text-xs text-neutral-500 bg-white dark:bg-neutral-900 p-2 rounded border border-dotted border-neutral-200 dark:border-neutral-700">
                        <span className="font-bold text-teal-500 mr-2">Point:</span>
                        <p>{point}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function FunctionItem({ name, desc, formula }: { name: string, desc: string, formula: string }) {
    return (
        <div className="border-b border-neutral-100 dark:border-neutral-800 last:border-0 pb-6 last:pb-0">
            <h3 className="font-bold text-lg mb-1">{name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{desc}</p>
            <FormulaBlock formula={formula} className="!border-l-0 !pl-0" />
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
