"use client";

import { PromptCard } from "@/components/PromptCard";
import { Sparkles, ImageIcon, Code, ShieldCheck, BrainCircuit, Lightbulb, Zap, Rocket, ChevronRight } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-500 to-pink-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <Sparkles className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">生成AI活用：プロンプトエンジニアリング</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        AIを「魔法の杖」から「信頼できる相棒」へ。
                        指示（プロンプト）の出し方ひとつで、世界が変わる体験を。
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 mt-12 space-y-12">

                {/* Progressive Steps Wrapper */}
                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">

                    {/* Header */}
                    <div className="p-8 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                        <div className="flex items-center mb-4">
                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">MISSION</span>
                            <h2 className="text-2xl font-bold">AIを使いこなす4つのステップ</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            ただ「文章を入力する」のではなく、戦略的にプロンプトを組み立てるスキルを身につけましょう。
                        </p>
                    </div>

                    <div className="p-8 space-y-20">
                        {/* Step 1: The Basics */}
                        <div className="relative">
                            <StepBadge number={1} />
                            <div className="ml-4 pl-10 border-l-2 border-purple-100 dark:border-purple-900 pb-4">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                                    「型」を使って指示を出す
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
                                    AIに最高のパフォーマンスを出させるための「黄金の型」を覚えましょう。
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <FrameworkItem label="Role" desc="AIの役割（例：プロの絵師）" color="bg-blue-500" />
                                    <FrameworkItem label="Instruction" desc="具体的な命令（例：〜を書いて）" color="bg-purple-500" />
                                    <FrameworkItem label="Constraint" desc="制約条件（例：〜は入れない）" color="bg-pink-500" />
                                    <FrameworkItem label="Output" desc="出力形式（例：箇条書き）" color="bg-amber-500" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Image Generation */}
                        <div className="relative">
                            <StepBadge number={2} />
                            <div className="ml-4 pl-10 border-l-2 border-purple-100 dark:border-purple-900 pb-4">
                                <div className="flex items-center mb-6">
                                    <ImageIcon className="w-6 h-6 mr-3 text-pink-500" />
                                    <h3 className="text-xl font-bold">視覚情報の言語化 (Image Generation)</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <PromptCard
                                        title="サイバーパンクな都市"
                                        badExample="かっこいい未来の街の絵を描いて"
                                        prompt="サイバーパンク風の未来都市、ネオンライトが輝く雨の夜、高層ビルの間を飛行車が飛び交う、映画のような構図、高画質、8k、詳細な書き込み"
                                        description="具体的なスタイル、環境（天気・時間）、構成要素を含めると品質が向上します。"
                                    />
                                    <PromptCard
                                        title="水彩画風の風景"
                                        badExample="綺麗な森の絵"
                                        prompt="ジブリ映画のような優しい水彩画スタイル、霧に包まれた朝の静かな森、木漏れ日、奥に小さな小屋、癒やしの雰囲気、パステルカラー、繊細な筆致"
                                        description="「〜風」といったスタイル指定が、AIの『引き出し』を決定します。"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Creative Writing & Code */}
                        <div className="relative">
                            <StepBadge number={3} />
                            <div className="ml-4 pl-10 border-l-2 border-purple-100 dark:border-purple-900 pb-4">
                                <div className="flex items-center mb-6">
                                    <Code className="w-6 h-6 mr-3 text-blue-500" />
                                    <h3 className="text-xl font-bold">構造的な出力の要求 (Coding)</h3>
                                </div>
                                <PromptCard
                                    title="Webサイトのコード生成"
                                    badExample="おしゃれなサイトを作って"
                                    prompt={`あなたは熟練したWebエンジニアです。
以下の要件に従って、HTMLとTailwind CSSを使用した「自己紹介カード」を1つ出力してください。

# 要件
- デザイン：ミニマル、ダークモード対応
- 要素：丸いプロフィールアイコン、名前、SNSボタン、一言メッセージ
- 配色：アクセントカラーに「バイオレット」を使用

# 出力形式
1つのHTMLファイルとしてコードブロックで出力してください。`}
                                    description="命令書形式（Markdown）で、要件を箇条書きにするのが最も効果的です。"
                                />
                            </div>
                        </div>

                        {/* Step 4: Logic & Reasoning */}
                        <div className="relative">
                            <StepBadge number={4} />
                            <div className="ml-4 pl-10 pb-4">
                                <div className="flex items-center mb-6">
                                    <BrainCircuit className="w-6 h-6 mr-3 text-indigo-500" />
                                    <h3 className="text-xl font-bold">思考の連鎖 (CoT: Chain of Thought)</h3>
                                </div>
                                <PromptCard
                                    title="論理的な思考を促す"
                                    badExample="リンゴが5個あり、2個食べて、3個買いました。今いくつ？"
                                    prompt={`リンゴが5個あります。そこから2個食べました。そのあと、3個買いました。今、手元には何個ありますか？
ステップバイステップで、順を追って考えてください。`}
                                    description="「ステップバイステップで考えて」と付け加えるだけで、AIの計算ミスや論理ミスが劇的に減ります。"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ethics & Future */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 border-l-4 border-neutral-400">
                        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
                            <ShieldCheck className="w-6 h-6 mr-2 text-green-500" />
                            AI倫理とリテラシー
                        </h3>
                        <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><span className="font-bold">著作権：</span> AI生成物が著作権を侵害していないか確認しましょう。</li>
                            <li><span className="font-bold">ファクトチェック：</span> AIは平気で嘘をつく（ハルシネーション）ことがあります。</li>
                            <li><span className="font-bold">個人情報：</span> 住所や本名などの機密情報を入力してはいけません。</li>
                        </ul>
                    </div>
                    <div className="bg-purple-600 text-white rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group">
                        <Zap className="absolute top-0 right-0 w-32 h-32 text-white/5 -mr-8 -mt-8 rotate-12 group-hover:scale-125 transition-transform" />
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Rocket className="w-6 h-6 mr-3" />
                            次のレベルへ挑戦
                        </h3>
                        <p className="text-sm opacity-90 mb-6 leading-relaxed">
                            プロンプトを極めたら、複数のAIを連携させたり、APIを使って自分専用のツールを作ってみましょう。
                        </p>
                        <div className="flex items-center text-sm font-bold group/link cursor-pointer">
                            学習リソースを探す
                            <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function StepBadge({ number }: { number: number }) {
    return (
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-lg shadow-purple-500/30 z-10">
            {number}
        </div>
    );
}

function FrameworkItem({ label, desc, color }: { label: string, desc: string, color: string }) {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow">
            <div className={`w-2 h-2 rounded-full mb-3 ${color}`} />
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{label}</p>
            <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">{desc}</p>
        </div>
    );
}
