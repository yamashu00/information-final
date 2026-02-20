import { Bot, Camera, Cpu, Download, AlertTriangle, PlayCircle, ExternalLink } from "lucide-react";

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
            <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Guide */}
                <div className="md:col-span-2 space-y-6">
                    {/* Steps */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-6">制作ステップ</h2>

                        <StepCard
                            number={1}
                            title="AIモデルを作ろう"
                            description="GoogleのTeachable Machineを使って、カメラに映ったジェスチャーを学習させます。「クラス1」を「動く合図（例：笑顔）」、「クラス2」を「止まる合図（例：真顔）」に設定しましょう。"
                            link={{ text: "Teachable Machineを開く", url: "https://teachablemachine.withgoogle.com/" }}
                            delay="200ms"
                        />

                        <StepCard
                            number={2}
                            title="モデルをエクスポート"
                            description="学習が終わったら「モデルをエクスポート」をクリック。「Tensorflow.js」タブの「モデルをアップロード」を選択し、発行されたURLをコピーします。"
                            delay="250ms"
                        />

                        <StepCard
                            number={3}
                            title="micro:bitと接続"
                            description="MakeCodeエディタで拡張機能「Teachable Machine」と「Servo」を追加。コピーしたURLをブロックに貼り付けます。"
                            link={{ text: "MakeCodeエディタを開く", url: "https://makecode.microbit.org/" }}
                            delay="300ms"
                        />

                        <StepCard
                            number={4}
                            title="サーボモーターを制御"
                            description="「もし『笑顔』の確信度が90%以上なら、サーボを90度にする。そうでなければ0度にする」というロジックを組みます。"
                            delay="400ms"
                        />
                    </div>

                    {/* Troubleshooting */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800 p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
                        <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-500 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            トラブルシューティング
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-yellow-900 dark:text-yellow-200">
                            <li><strong>カメラが映らない：</strong> ブラウザのカメラ許可設定を確認してください。他のタブでカメラを使っている場合は閉じてください。</li>
                            <li><strong>micro:bitが反応しない：</strong> USBケーブルがデータ通信対応か確認してください（充電専用ケーブルでは動きません）。</li>
                            <li><strong>サーボが震える：</strong> 電池ボックスの電源がONになっているか、電池残量があるか確認してください。micro:bitからの給電だけでは力不足の場合があります。</li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 sticky top-24 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                            <Cpu className="w-6 h-6 mr-2 text-blue-500" />
                            準備するもの
                        </h2>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center p-2 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                micro:bit 本体
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                拡張ボード
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                サーボモーター (SG90)
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                PC（Webカメラ必須）
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                工作素材（段ボール、テープ）
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                            <h3 className="font-bold mb-2">参考動画（英語）</h3>
                            <a href="https://www.youtube.com/watch?v=T2qQGqZxkD0" target="_blank" rel="noopener" className="block relative rounded-lg overflow-hidden group">
                                <div className="bg-neutral-900 aspect-video flex items-center justify-center">
                                    <PlayCircle className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-xs text-neutral-500 mt-1">Teachable Machine Tutorial</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function StepCard({ number, title, description, link, delay }: { number: number, title: string, description: string, link?: { text: string, url: string }, delay?: string }) {
    return (
        <div className="flex gap-4 p-6 bg-neutral-50 dark:bg-neutral-950/50 rounded-xl border border-neutral-100 dark:border-neutral-800 mb-4 last:mb-0 animate-fade-in" style={{ animationDelay: delay }}>
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {number}
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3 text-sm">
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
                        <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                )}
            </div>
        </div>
    );
}
