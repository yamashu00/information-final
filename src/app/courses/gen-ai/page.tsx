"use client";

import { useState } from "react";
import { PromptCard } from "@/components/PromptCard";
import { Sparkles, ImageIcon, Code, ShieldCheck, BrainCircuit, Lightbulb, Zap, Rocket, ChevronRight, CheckCircle2, Target, MessageSquare } from "lucide-react";

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
                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden animate-fade-in">

                    {/* Header */}
                    <div className="p-8 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">MISSION</div>
                            <h2 className="text-2xl font-bold">AIを使いこなす4つの課題</h2>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            ただ「文章を入力する」のではなく、戦略的にプロンプトを組み立てるスキルを身につけましょう。
                            各ステップの「Good Prompt」をコピーして、自分なりにアレンジしてみてください。
                        </p>
                    </div>

                    <div className="p-8 space-y-16">
                        {/* Step 1: The Basics */}
                        <DetailedStep
                            number={1}
                            icon={<Lightbulb className="w-6 h-6 text-yellow-500" />}
                            title="「型」を使って指示を出す"
                            desc="AIに最高のパフォーマンスを出させるための「黄金の型」を覚えましょう。"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <FrameworkItem label="Role" desc="AIの役割を設定" color="bg-blue-500" example="あなたはプロの絵師です" />
                                <FrameworkItem label="Instruction" desc="具体的な命令" color="bg-purple-500" example="〜を詳細に描いて" />
                                <FrameworkItem label="Constraint" desc="制約条件の指定" color="bg-pink-500" example="文字は入れないで" />
                                <FrameworkItem label="Output" desc="出力形式の指定" color="bg-amber-500" example="表形式で出して" />
                            </div>
                            <MissionBox
                                title="最初のミッション"
                                task="ChatGPTなどのAIに対し、「あなたはプロの家庭教師です」というRoleを与えて、難しい単語の解説を求めてみましょう。"
                            />
                        </DetailedStep>

                        {/* Step 2: Image Generation */}
                        <DetailedStep
                            number={2}
                            icon={<ImageIcon className="w-6 h-6 text-pink-500" />}
                            title="視覚情報の言語化 (Image Generation)"
                            desc="具体的なキーワードを重ねて、AIのイメージを固定します。"
                        >
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <PromptCard
                                    title="サイバーパンクな都市"
                                    badExample="かっこいい未来の街の絵を描いて"
                                    prompt="サイバーパンク風の未来都市、ネオンライトが輝く雨の夜、高層ビルの間を飛行車が飛び交う、映画のような構図、高画質、8k、詳細な書き込み"
                                    description="環境（天気・時間）と具体的な要素（ネオン・飛行車）がポイントです。"
                                />
                                <PromptCard
                                    title="ピクサー風の猫"
                                    badExample="かわいい猫を描いて"
                                    prompt="ピクサー風の3Dキャラクター、ふわふわの茶トラ猫、大きな期待に満ちた目、赤い首輪、柔らかいスタジオ照明、背景はパステルカラー、4k"
                                    description="「スタイル（ピクサー風）」と「質感（ふわふわ）」を指定しています。"
                                />
                            </div>
                            <MissionBox
                                title="アレンジに挑戦！"
                                task="上記の『サイバーパンクな都市』のプロンプトをコピーし、『雨の夜』を『雪の降る夕暮れ』に変えて生成してみてください。"
                            />
                        </DetailedStep>

                        {/* Step 3: Creative Writing & Code */}
                        <DetailedStep
                            number={3}
                            icon={<Code className="w-6 h-6 text-blue-500" />}
                            title="構造的な出力の要求 (Coding)"
                            desc="Markdown（# や - ）を使って、命令を構造化します。"
                        >
                            <div className="mb-8">
                                <PromptCard
                                    title="Webサイトのコード生成"
                                    badExample="おしゃれなサイトを作って"
                                    prompt={`あなたは熟練したWebエンジニアです。
以下の要件に従って、HTMLとTailwind CSSを使用した「自己紹介カード」を1つ出力してください。

# 要件
- デザイン：ミニマル、ダークモード対応
- 要素：名前、SNSボタン、一言メッセージ
- 配色：バイオレットを基調に

# 出力形式
1つのHTMLファイルとしてコードブロックで出力してください。`}
                                    description="「命令書」形式にすることで、AIが要件を漏らすのを防ぎます。"
                                />
                            </div>
                            <MissionBox
                                title="出力形式を変える"
                                task="「出力形式」を『表形式』や『JSON形式』に変更して、データの扱いやすさがどう変わるか試してみましょう。"
                            />
                        </DetailedStep>

                        {/* Step 4: Logic & Reasoning */}
                        <DetailedStep
                            number={4}
                            icon={<BrainCircuit className="w-6 h-6 text-indigo-500" />}
                            title="思考の連鎖 (CoT: Chain of Thought)"
                            desc="「少しずつ考える」プロセスをAIに共有させます。"
                        >
                            <div className="mb-8">
                                <PromptCard
                                    title="論理的な思考を促す魔法の言葉"
                                    badExample="この数学の問題を解いて"
                                    prompt={`以下の問題を解いてください。
[問題の内容を入力]
回答する前に、ステップバイステップで論理的に考えてください。`}
                                    description="「ステップバイステップで」という言葉だけで、正答率が劇的に上がることが研究で証明されています。"
                                />
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                <div className="flex items-center text-indigo-700 dark:text-indigo-300 font-bold text-sm mb-2">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    One more tip:
                                </div>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    AIに「最後に私のプロンプトに点数をつけて改善案を出して」と頼むと、自分のプロンプトスキルを爆速で上げることができます。
                                </p>
                            </div>
                        </DetailedStep>
                    </div>
                </div>

                {/* Ethics Guide */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-neutral-900 text-white rounded-2xl p-8 relative overflow-hidden group">
                        <ShieldCheck className="absolute top-0 right-0 w-32 h-32 text-white/5 -mr-8 -mt-8 rotate-12" />
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <ShieldCheck className="w-6 h-6 mr-3 text-green-400" />
                            AI倫理チェック：正しく使いこなすために
                        </h3>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <EthicsItem title="著作権" desc="他人の作品を模倣しすぎない。生成物の権利関係を確認。" />
                            <EthicsItem title="真偽確認" desc="AIは嘘（ハルシネーション）をつきます。重要情報は自分で検索。" />
                            <EthicsItem title="個人情報" desc="名前、住所、パスワードなどは絶対に入力しない。" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 flex flex-col justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <Rocket className="w-8 h-8 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Next Step</h3>
                        <p className="text-sm opacity-90 mb-6 font-medium">
                            プロンプトをマスターしたら、複数のAIを組み合わせて「自分だけのアプリ」を作ってみましょう。
                        </p>
                        <div className="flex items-center text-sm font-bold group cursor-pointer border-t border-white/20 pt-4">
                            応用テクニックを見る
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function DetailedStep({ number, icon, title, desc, children }: { number: number, icon: React.ReactNode, title: string, desc: string, children: React.ReactNode }) {
    return (
        <div className="relative pl-12 border-l-2 border-neutral-100 dark:border-neutral-800 pb-2">
            <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-lg shadow-purple-500/20 z-10">
                {number}
            </div>
            <div className="space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center">
                        <span className="mr-3">{icon}</span>
                        {title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {desc}
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
}

function FrameworkItem({ label, desc, color, example }: { label: string, desc: string, color: string, example: string }) {
    return (
        <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-all group">
            <div className={`w-6 h-1 rounded-full mb-3 ${color}`} />
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2">{desc}</p>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-500 italic border-t border-neutral-200 dark:border-neutral-700 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">例：{example}</p>
        </div>
    );
}

function MissionBox({ title, task }: { title: string, task: string }) {
    return (
        <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-xl border border-purple-100 dark:border-purple-800/50 flex items-start">
            <div className="p-2 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-lg mr-4 mt-1 flex-shrink-0">
                <Target className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm mb-1">{title}</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                    {task}
                </p>
            </div>
        </div>
    );
}

function EthicsItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center text-sm font-bold text-neutral-100">
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                {title}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">{desc}</p>
        </div>
    );
}
