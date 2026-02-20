import { Hammer, Printer, Scissors, Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function page() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                        <Hammer className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">ミニ・スマートハウス建築</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        3Dプリンタとレーザーカッターでパーツを作り、micro:bitで命を吹き込む。
                        デジタルファブリケーション×IoTの体験。
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {/* Steps */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold mb-4">建築プロセス</h2>
                        <StepTile
                            step="01"
                            title="設計図を描こう"
                            description="どんな家にしたい？間取りや必要なセンサー（人感センサー、明るさセンサーなど）を紙に書き出そう。"
                            delay="300ms"
                        />
                        <StepTile
                            step="02"
                            title="データ作成（モデリング）"
                            description="3D CADで家具を、ドローソフトで壁の展開図を作成します。"
                            links={[
                                { label: "Tinkercad (3D)", url: "https://www.tinkercad.com/" },
                                { label: "Inkscape (2D)", url: "https://inkscape.org/" }
                            ]}
                            delay="400ms"
                        />
                        <StepTile
                            step="03"
                            title="加工・出力"
                            description="実際に機械を動かしてパーツを出力します。※先生の指示に従って安全に作業しましょう。"
                            delay="500ms"
                        />
                        <StepTile
                            step="04"
                            title="IoT化（配線とプログラミング）"
                            description="micro:bitとLEDテープ、センサーを接続。「暗くなったら電気がつく」「人が来たらドアが開く」などのプログラムを組んで完成！"
                            delay="600ms"
                        />
                    </div>

                    {/* Safety Guide */}
                    <div className="bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800 p-6 animate-fade-in" style={{ animationDelay: "700ms" }}>
                        <h3 className="text-lg font-bold text-red-800 dark:text-red-500 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            安全ガイド（必ず読むこと）
                        </h3>
                        <ul className="space-y-2 text-sm text-red-900 dark:text-red-200">
                            <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                レーザーカッター使用中は絶対にその場を離れない（発火の危険）。
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                3Dプリンタのノズルは200度以上になります。絶対に素手で触らない。
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                ニッパーやカッターを使うときは、刃の方向に手を置かない。
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 sticky top-24 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                            <Printer className="w-6 h-6 mr-2 text-orange-500" />
                            使用機材・素材
                        </h2>

                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-neutral-500 mb-2 uppercase tracking-wider">Mochimono</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                                    MDF材 (2.5mm厚)
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                                    PLAフィラメント
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                                    木工用ボンド
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-neutral-500 mb-2 uppercase tracking-wider">Tools</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2" />
                                    レーザー加工機 (XTool)
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2" />
                                    3Dプリンタ (Bambu Lab)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function StepTile({ step, title, description, links, delay }: { step: string, title: string, description: string, links?: { label: string, url: string }[], delay?: string }) {
    return (
        <div className="group bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: delay }}>
            <div className="flex flex-col md:flex-row">
                <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 md:w-24 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400 tracking-wider">{step}</span>
                </div>
                <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                        {description}
                    </p>
                    {links && (
                        <div className="flex gap-3">
                            {links.map(link => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
                                >
                                    {link.label} ↗
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
