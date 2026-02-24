"use client";

import { useState } from "react";
import { Bot, Cpu, AlertTriangle, PlayCircle, ExternalLink, Camera, Settings, Code, Zap, CheckCircle2, Copy, Check, Info, Usb, MonitorPlay } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <Bot className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI×ガジェット制作：最終手順</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        JavaScriptとシリアル通信を使って、AIの判定結果をmicro:bitに送ろう。
                        拡張機能を使わずに、ブラウザとハードウェアを直接つなぐ高度な連携に挑戦。
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
                                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">実践編</span>
                                    <h2 className="text-2xl font-bold">AIガジェット制作：最終手順（拡張機能なし版）</h2>
                                </div>
                            </div>
                            <div className="flex items-center text-xs font-bold text-neutral-400">
                                <Info className="w-4 h-4 mr-1 text-blue-500" />
                                推奨時間: 45分
                            </div>
                        </div>

                        <div className="space-y-16">
                            {/* Step 1 */}
                            <ProjectStep
                                number={1}
                                icon={<Camera className="w-5 h-5 text-blue-500" />}
                                title="Teachable Machine での準備"
                                desc="PC側の「目（AI）」を完成させ、判定結果をクラウドから取得できるようにします。"
                                details={[
                                    "カメラで「グー」と「パー」を20枚以上ずつ撮影し、トレーニングします。",
                                    "「モデルをエクスポート」から「モデルをアップロード」を押し、URLをコピーします。",
                                    "プレビュー画面で判定が「99%」など正しく出ているか確認します。"
                                ]}
                                checkItems={[
                                    "クラス名を「Class 1」「Class 2」に設定した",
                                    "モデルのアップロードが完了し、URLを取得した"
                                ]}
                                action={{ text: "Teachable Machine を開く", url: "https://teachablemachine.withgoogle.com/" }}
                            />

                            {/* Step 2 */}
                            <ProjectStep
                                number={2}
                                icon={<Code className="w-5 h-5 text-blue-500" />}
                                title="MakeCode でのプログラミング"
                                desc="JavaScriptモードを使用して、PCからのシリアル通信を受け取るプログラムを書きます。"
                                details={[
                                    "MakeCodeで「新しいプロジェクト」を作ります。",
                                    "画面上部の「JavaScript」タブをクリックし、以下のコードを貼り付けます。"
                                ]}
                                codeSnippet={`// PCのAI判定結果（シリアル通信）を受け取る処理
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let line = serial.readLine()
    
    // AIが「Class 1（グー）」と判定したとき
    if (line == "Class 1") {
        basic.showIcon(IconNames.SmallSquare) // 小さい四角を表示
    }
    
    // AIが「Class 2（パー）」と判定したとき
    if (line == "Class 2") {
        basic.showIcon(IconNames.Square)      // 大きい四角を表示
    }
})

// 起動時に準備完了を表示
basic.showString("AI READY")`}
                                codeLabel="MakeCode JavaScriptコード"
                                action={{ text: "MakeCode エディタを開く", url: "https://makecode.microbit.org/" }}
                            />

                            {/* Step 3 */}
                            <ProjectStep
                                number={3}
                                icon={<Usb className="w-5 h-5 text-blue-500" />}
                                title="micro:bit との連携（最重要）"
                                desc="USB通信を使ってAIとmicro:bitを双方向につなぎます。"
                                details={[
                                    "「ダウンロード」横の「…」から「デバイスを接続する」を選び、micro:bitを選択します。",
                                    "書き込み後、画面左側に現れる「コンソールを表示 デバイス」ボタンをクリックします。",
                                    "これにより、PCの判定結果がUSBを通じてmicro:bitに送られ始めます。"
                                ]}
                                checkItems={[
                                    "「AI READY」とmicro:bitに流れた",
                                    "「コンソールを表示」ボタンが表示された"
                                ]}
                            />

                            {/* Step 4 */}
                            <ProjectStep
                                number={4}
                                icon={<MonitorPlay className="w-5 h-5 text-blue-500" />}
                                title="最終テスト"
                                desc="カメラに映る自分の動きに合わせて、micro:bitのLEDが反応するか確認しましょう。"
                                details={[
                                    "カメラに「グー」を映す → micro:bitのLEDに「小さい四角」が出るか？",
                                    "カメラに「パー」を映す → micro:bitのLEDに「大きい四角」が出るか？"
                                ]}
                            />
                        </div>
                    </div>

                    {/* Offline Alternative */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800 p-6 animate-fade-in">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-400 mb-4 flex items-center">
                            <Info className="w-5 h-5 mr-2" />
                            💡 もし「コンソール」ボタンが出ない場合
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                            学校の環境制限でUSB通信が遮断されている場合は、以下の「人間AI連携」で課題を完成させてください。
                        </p>
                        <div className="space-y-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg text-sm">
                                <p className="font-bold mb-1">人間AI連携による解決</p>
                                <p className="opacity-80">画面のAI判定を見て、<strong>自分でmicro:bitのAボタン（グー用）やBボタン（パー用）を押して</strong>LEDを切り替えるデモを行う。</p>
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg text-sm border-l-4 border-blue-400">
                                <p className="font-bold mb-1 italic">レポートへの記載例</p>
                                <p className="opacity-80">「ネットワーク制限により拡張機能が使用できなかったため、JavaScriptのシリアル通信機能を用いてAI判定結果を反映させる仕組みを構築した」</p>
                            </div>
                        </div>
                    </div>

                    {/* Common Errors */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800 p-6 animate-fade-in">
                        <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            エラー解決のヒント
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-neutral-200">
                            <li><strong>判定が逆になる：</strong> Teachable MachineのClass 1とClass 2の設定がJavaScriptのコードと一致しているか確認してください。</li>
                            <li><strong>読み込みが遅い：</strong> モデルの学習画像を撮りすぎている可能性があります（50枚程度で十分です）。</li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 sticky top-24 animate-fade-in">
                        <h2 className="text-xl font-bold mb-6 flex items-center text-blue-600 dark:text-blue-400">
                            <Cpu className="w-6 h-6 mr-2" />
                            必要なもの
                        </h2>
                        <ul className="space-y-4">
                            <PreparationItem label="micro:bit 本体 / ケーブル" checked />
                            <PreparationItem label="PC（Webカメラ内蔵）" checked />
                            <PreparationItem label="MakeCode（JavaScriptモード）" checked />
                            <PreparationItem label="Teachable Machine 連携用URL" />
                        </ul>

                        <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                            <h3 className="font-bold mb-4 flex items-center text-sm text-neutral-500">
                                <PlayCircle className="w-4 h-4 mr-2" />
                                プログラミングの補足
                            </h3>
                            <div className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                <p>JavaScriptタブに切り替えて貼り付けた後、また「ブロック」に戻すこともできます。中身がどうブロックに変換されたか見てみましょう。</p>
                            </div>
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
        <div className="relative pl-12 border-l-2 border-slate-100 dark:border-neutral-800 pb-2 animate-fade-in">
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
                            <div className="relative group/code">
                                <pre className="bg-neutral-900 text-blue-300 p-4 rounded-lg text-xs font-mono overflow-x-auto border border-white/5 leading-relaxed">
                                    {codeSnippet}
                                </pre>
                                <button
                                    onClick={handleCopy}
                                    className="absolute right-2 top-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-all opacity-0 group-hover/code:opacity-100"
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white" />}
                                </button>
                            </div>
                        </div>
                    )}

                    {checkItems && (
                        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            <div className="grid gap-2">
                                {checkItems.map((item, i) => (
                                    <div key={i} className="flex items-center text-xs text-neutral-500 font-medium">
                                        <div className="w-4 h-4 rounded border border-neutral-300 dark:border-neutral-700 mr-2 flex-shrink-0 bg-white dark:bg-neutral-900 shadow-inner" />
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
