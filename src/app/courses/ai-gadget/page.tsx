"use client";

import { useState } from "react";
import { Bot, Cpu, AlertTriangle, PlayCircle, ExternalLink, Camera, Settings, Code, Zap, CheckCircle2, Copy, Check, Info } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <Bot className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI×ガジェット開発：魔法のデバイス</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        画像認識AIの力で、現実の世界を動かそう。
                        カメラに映った「あなたの動き」をセンサーにする、IoTプログラミング体験。
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Guide */}
                <div className="md:col-span-2 space-y-6">

                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border-2 border-blue-500/20 p-8 animate-fade-in">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mr-4">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">実践プロジェクト</span>
                                    <h2 className="text-2xl font-bold">制作ガイド：AI連携デバイス</h2>
                                </div>
                            </div>
                            <div className="flex items-center text-xs font-bold text-neutral-400">
                                <Info className="w-4 h-4 mr-1 text-blue-500" />
                                推奨時間: 50分
                            </div>
                        </div>

                        <div className="space-y-16">
                            {/* Step 1 */}
                            <ProjectStep
                                number={1}
                                icon={<Camera className="w-5 h-5 text-blue-500" />}
                                title="AIモデルの学習 (Teachable Machine)"
                                desc="GoogleのTeachable Machineを使って、カメラに映ったジェスチャーを学習させます。"
                                details={[
                                    "「画像プロジェクト」を選択し、「標準の画像モデル」を作成します。",
                                    "クラス1（例：笑顔）とクラス2（例：真顔）にそれぞれ20枚以上の画像を学習させます。",
                                    "「モデルをトレーニングする」をクリックして完了を待ちます。"
                                ]}
                                checkItems={[
                                    "クラス名を「笑顔」「真顔」などに変更した",
                                    "トレーニングが100%完了した"
                                ]}
                                action={{ text: "Teachable Machine を開く", url: "https://teachablemachine.withgoogle.com/" }}
                            />

                            {/* Step 2 */}
                            <ProjectStep
                                number={2}
                                icon={<Settings className="w-5 h-5 text-blue-500" />}
                                title="モデルのエクスポートとURL取得"
                                desc="学習したAIをプログラムから呼び出せるようにクラウドにアップロードします。"
                                details={[
                                    "「モデルをエクスポートする」をクリックします。",
                                    "「Tensorflow.js」タブを選択した状態で「モデルをアップロード」を押します。",
                                    "「自分の共有可能なリンク」に表示されたURLをコピーします。"
                                ]}
                                codeSnippet="https://teachablemachine.withgoogle.com/models/XXXXXXX/"
                                codeLabel="コピーするURLの形式"
                            />

                            {/* Step 3 */}
                            <ProjectStep
                                number={3}
                                icon={<Code className="w-5 h-5 text-blue-500" />}
                                title="micro:bit のプログラミング"
                                desc="MakeCodeエディタを使って、AIの判定結果をハードウェアの動きに変換します。"
                                details={[
                                    "「拡張機能」から『Teachable Machine』を検索して追加します。",
                                    "「もし『笑顔』の確信度が90%以上なら...」という条件分岐を作成します。"
                                ]}
                                checkItems={[
                                    "拡張機能「Teachable Machine」を追加した",
                                    "「URLをセットする」ブロックに自分のURLを入れた"
                                ]}
                                codeSnippet={`// 笑顔を検知した時のロジック
もし (確信度(笑顔) > 90) ならば
    サーボ(P0) を 90度 にする
そうでなければ
    サーボ(P0) を 0度 にする`}
                                codeLabel="主要なロジック"
                                action={{ text: "MakeCode エディタを開く", url: "https://makecode.microbit.org/" }}
                            />

                            {/* Step 4 */}
                            <ProjectStep
                                number={4}
                                icon={<CheckCircle2 className="w-5 h-5 text-blue-500" />}
                                title="ハードウェアの組み立てとテスト"
                                desc="サーボモーターをmicro:bitに接続し、実際に動かしてみましょう。"
                                details={[
                                    "micro:bitの0番ピンにサーボモーターを接続します（茶色:GND, 赤:3V, 橙:P0）。",
                                    "ブラウザ上の「Teachable Machine連携画面」で、カメラに向かって合図を出します。"
                                ]}
                                checkItems={[
                                    "ピンの接続（GND/3V/P0）が正しい",
                                    "電池ボックスのスイッチを入れた"
                                ]}
                            />
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800 p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
                        <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500 mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            うまくいかない時は？
                        </h3>
                        <div className="grid gap-4 text-sm text-amber-900 dark:text-amber-200">
                            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                                <p className="font-bold whitespace-nowrap mb-1">Q. カメラが有効になりません</p>
                                <p className="opacity-80 leading-relaxed">ブラウザのアドレスバー横にある「鍵マーク」をクリックして、カメラの許可をオンにしてください。</p>
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                                <p className="font-bold whitespace-nowrap mb-1">Q. AIの判定が不安定です</p>
                                <p className="opacity-80 leading-relaxed">背景がシンプルで、顔や手がはっきり映る場所で学習させてみてください。背景の変化も学習に影響します。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 sticky top-24 animate-fade-in">
                        <h2 className="text-xl font-bold mb-6 flex items-center text-blue-600 dark:text-blue-400">
                            <Cpu className="w-6 h-6 mr-2" />
                            準備リスト
                        </h2>
                        <ul className="space-y-4">
                            <PreparationItem label="micro:bit 本体" checked />
                            <PreparationItem label="サーボモーター (SG90)" checked />
                            <PreparationItem label="拡張ボード（電源用）" checked />
                            <PreparationItem label="Webカメラ付きパソコン" checked />
                            <PreparationItem label="工作用テープ・段ボール" />
                        </ul>

                        <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                            <h3 className="font-bold mb-4 flex items-center text-sm text-neutral-500">
                                <PlayCircle className="w-4 h-4 mr-2" />
                                チュートリアル動画
                            </h3>
                            <a href="https://www.youtube.com/watch?v=T2qQGqZxkD0" target="_blank" rel="noopener" className="block relative rounded-xl overflow-hidden group border border-neutral-200 dark:border-neutral-800">
                                <div className="bg-neutral-950 aspect-video flex items-center justify-center">
                                    <div className="bg-white/20 p-4 rounded-full group-hover:bg-red-600 transition-colors">
                                        <PlayCircle className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <p className="text-[10px] text-neutral-500 p-2 text-center group-hover:text-blue-500 transition-colors bg-neutral-50 dark:bg-neutral-900 italic">Teachable Machine × micro:bit 解説動画</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function ProjectStep({ number, icon, title, desc, details, checkItems, codeSnippet, codeLabel, action }: {
    number: number,
    icon: React.ReactNode,
    title: string,
    desc: string,
    details: string[],
    checkItems?: string[],
    codeSnippet?: string,
    codeLabel?: string,
    action?: { text: string, url: string }
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!codeSnippet) return;
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative pl-12 border-l-2 border-slate-100 dark:border-neutral-800 pb-2">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/20 z-10">
                {number}
            </div>
            <div className="space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center">
                        <span className="mr-2 opacity-50">{icon}</span>
                        {title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {desc}
                    </p>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-950/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800 space-y-6">
                    <ul className="space-y-3">
                        {details.map((detail, i) => (
                            <li key={i} className="flex items-start text-neutral-700 dark:text-neutral-300 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-3 flex-shrink-0" />
                                {detail}
                            </li>
                        ))}
                    </ul>

                    {codeSnippet && (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                <span>{codeLabel || 'CODE'}</span>
                                {copied && <span className="text-green-500 transition-opacity">COPIED!</span>}
                            </div>
                            <div className="relative group">
                                <pre className="bg-neutral-900 text-blue-300 p-4 rounded-lg text-xs font-mono overflow-x-auto border border-white/5">
                                    {codeSnippet}
                                </pre>
                                <button
                                    onClick={handleCopy}
                                    className="absolute right-2 top-2 p-1.5 bg-white/10 rounded-md hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-white" />}
                                </button>
                            </div>
                        </div>
                    )}

                    {checkItems && (
                        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            <p className="text-xs font-bold text-neutral-400 mb-3 uppercase tracking-tighter">Check Point</p>
                            <div className="grid gap-2">
                                {checkItems.map((item, i) => (
                                    <div key={i} className="flex items-center text-xs text-neutral-500">
                                        <div className="w-4 h-4 rounded border border-neutral-300 dark:border-neutral-700 mr-2 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {action && (
                    <a
                        href={action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md active:scale-95"
                    >
                        {action.text}
                        <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                )}
            </div>
        </div>
    );
}

function PreparationItem({ label, checked = false }: { label: string, checked?: boolean }) {
    return (
        <li className="flex items-center group">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-colors ${checked ? 'bg-blue-500 border-blue-500 shadow-sm shadow-blue-500/30' : 'border-neutral-300 dark:border-neutral-700'}`}>
                {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
            </div>
            <span className={`text-sm ${checked ? 'text-neutral-800 dark:text-neutral-200 font-medium' : 'text-neutral-400'}`}>{label}</span>
        </li>
    );
}
