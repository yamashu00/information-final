import { Bot, Camera, Cpu, Download } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <Bot className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">ジェスチャーで動く魔法のデバイス作り</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        画像認識AIを使って、あなたの笑顔やポーズに反応するデバイスを作ろう！
                        「AI」と「モノ」をつなぐ体験開発。
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
                {/* Requirements Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 mb-8 border border-neutral-200 dark:border-neutral-800 animate-fade-in" style={{ animationDelay: "100ms" }}>
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <Cpu className="w-6 h-6 mr-2 text-blue-500" />
                        準備するもの
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            micro:bit 本体
                        </li>
                        <li className="flex items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            拡張ボード（ワークショップモジュール）
                        </li>
                        <li className="flex items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            サーボモーター
                        </li>
                        <li className="flex items-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            PC（カメラ付き）
                        </li>
                    </ul>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">制作ステップ</h2>

                    <StepCard
                        number={1}
                        title="AIモデルを作ろう"
                        description="GoogleのTeachable Machineを使って、カメラに映ったジェスチャーを学習させます。"
                        link={{ text: "Teachable Machineを開く", url: "https://teachablemachine.withgoogle.com/" }}
                        delay="200ms"
                    />

                    <StepCard
                        number={2}
                        title="micro:bitと接続しよう"
                        description="MakeCodeエディタを開き、拡張機能から「Teachable Machine」を追加します。作成したモデルのURLを貼り付けます。"
                        link={{ text: "MakeCodeエディタを開く", url: "https://makecode.microbit.org/" }}
                        delay="300ms"
                    />

                    <StepCard
                        number={3}
                        title="サーボモーターを制御しよう"
                        description="「もし『笑顔』ならサーボを90度、『真顔』なら0度」といったプログラムを組みます。AIの判断結果を受け取ってモノを動かそう！"
                        delay="400ms"
                    />

                    <StepCard
                        number={4}
                        title="筐体（ケース）を作ろう"
                        description="厚紙や工作素材を使って、デバイスの見た目を作ります。魔法の杖？動くぬいぐるみ？アイデア次第！"
                        delay="500ms"
                    />
                </div>
            </div>
        </div>
    );
}

function StepCard({ number, title, description, link, delay }: { number: number, title: string, description: string, link?: { text: string, url: string }, delay?: string }) {
    return (
        <div className="flex gap-4 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 animate-fade-in" style={{ animationDelay: delay }}>
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-lg">
                {number}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {description}
                </p>
                {link && (
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {link.text}
                        <Download className="w-4 h-4 ml-1" />
                    </a>
                )}
            </div>
        </div>
    );
}
