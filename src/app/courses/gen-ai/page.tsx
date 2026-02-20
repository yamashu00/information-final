import { PromptCard } from "@/components/PromptCard";
import { Sparkles, Image, Code, MessageSquare, ShieldCheck, BrainCircuit } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            <section className="bg-gradient-to-br from-purple-500 to-pink-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <Sparkles className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI使いこなし選手権</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        プロンプトエンジニアリングを極めよう。
                        AIに「伝わる」指示の出し方を学び、思い通りのアウトプットを引き出す技術。
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">

                {/* Intro */}
                <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 text-center animate-fade-in">
                    <h2 className="text-2xl font-bold mb-4">プロンプトの「型」を覚えよう</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        ただ話しかけるだけではAIは真価を発揮しません。
                        「役割（Role）」「命令（Instruction）」「制約（Constraint）」「出力形式（Output）」
                        の4つを意識するだけで、結果は劇的に変わります。
                    </p>
                </div>

                {/* Round 1: Image Generation */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg">
                            <Image className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Round 1: 画像生成</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <PromptCard
                            title="サイバーパンクな都市"
                            badExample="かっこいい未来の街の絵を描いて"
                            prompt="サイバーパンク風の未来都市、ネオンライトが輝く雨の夜、高層ビルの間を飛行車が飛び交う、映画のような構図、高画質、8k、詳細な書き込み"
                            description="具体的なスタイル、環境（天気・時間）、構成要素、画質指示を含めると品質が向上します。"
                        />
                        <PromptCard
                            title="猫のキャラクター"
                            badExample="かわいい猫"
                            prompt="ピクサー風の3Dアニメーションスタイル、ふわふわの白いペルシャ猫、大きな目、赤い蝶ネクタイをしている、明るいリビングルームの背景、柔らかい照明、キュート、4k"
                            description="「ピクサー風」「水彩画風」などのスタイル指定が重要です。"
                        />
                    </div>
                </div>

                {/* Round 2: Coding */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                            <Code className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Round 2: プログラミング</h2>
                    </div>
                    <PromptCard
                        title="Webサイトのコード生成"
                        badExample="おしゃれなサイトを作って"
                        prompt={`# 命令書
あなたは熟練したWebエンジニアです。以下の要件に従って、HTMLとTailwind CSSを使用したランディングページのヒーローセクションを作成してください。

# 要件
- デザイン：ミニマルでモダン、白と青を基調
- 要素：大きな見出し、サブテキスト、CTAボタン（「無料で始める」）
- レスポンシブ：スマホ対応
- 全体的に余白を大きくとること

# 出力形式
1つのHTMLファイルとしてコードブロックで出力してください。`}
                        description="「命令書」形式（Markdown）で、役割・要件・出力形式を明確に定義するのがコツです。"
                    />
                </div>

                {/* Round 3: Reasoning (Chain of Thought) */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                            <BrainCircuit className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Round 3: 複雑な推論</h2>
                    </div>
                    <PromptCard
                        title="思考の連鎖 (Chain of Thought)"
                        badExample="リンゴが5個あり、2個食べて、3個買いました。今いくつ？"
                        prompt={`リンゴが5個あります。そこから2個食べました。そのあと、3個買いました。今、手元には何個ありますか？
ステップバイステップで考えてください。`}
                        description="「ステップバイステップで考えて」と付け加えるだけで、AIの計算ミスや論理ミスが激減します。"
                    />
                </div>

                {/* Ethics Guide */}
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 border-l-4 border-neutral-500">
                    <h3 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center">
                        <ShieldCheck className="w-5 h-5 mr-2" />
                        AI倫理チェック
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <li><strong>著作権：</strong> 特定のアーティストの画風を模倣したり、既存のキャラクターを生成して公開することは著作権侵害になる可能性があります。</li>
                        <li><strong>フェイクニュース：</strong> 実在の人物が言っていないことを言わせたり、嘘の画像を作成して拡散してはいけません。</li>
                        <li><strong>個人情報：</strong> プロンプトに自分や他人の名前、住所などの個人情報を入力してはいけません。</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
