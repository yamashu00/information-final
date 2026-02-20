import { Hammer, Printer, Scissors, Lightbulb } from "lucide-react";

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
            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">

                {/* Intro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <h2 className="text-xl font-bold mb-3 flex items-center text-orange-600 dark:text-orange-400">
                            <Printer className="w-5 h-5 mr-2" />
                            3Dプリンタ
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            家具や細かいパーツを作成します。Tinkercadを使ってモデリングし、スライサーソフトで変換して出力します。
                        </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <h2 className="text-xl font-bold mb-3 flex items-center text-orange-600 dark:text-orange-400">
                            <Scissors className="w-5 h-5 mr-2" />
                            レーザーカッター
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            家の壁や床をMDF材から切り出します。ベクターデータ（AI/SVG）を作成し、精密なカットを行います。
                        </p>
                    </div>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">建築ステップ</h2>

                    <StepTile
                        step="STEP 01"
                        title="設計図を描こう"
                        description="どんな家にしたい？間取りや必要なセンサー（人感センサー、明るさセンサーなど）を紙に書き出そう。"
                        delay="300ms"
                    />

                    <StepTile
                        step="STEP 02"
                        title="データ作成（モデリング）"
                        description="3D CADで家具を、ドローソフトで壁の展開図を作成します。"
                        links={[
                            { label: "Tinkercad (3D)", url: "https://www.tinkercad.com/" },
                            { label: "Inkscape (2D)", url: "https://inkscape.org/" }
                        ]}
                        delay="400ms"
                    />

                    <StepTile
                        step="STEP 03"
                        title="加工・出力"
                        description="実際に機械を動かしてパーツを出力します。※先生の指示に従って安全に作業しましょう。"
                        delay="500ms"
                    />

                    <StepTile
                        step="STEP 04"
                        title="IoT化（配線とプログラミング）"
                        description="micro:bitとLEDテープ、センサーを接続。「暗くなったら電気がつく」「人が来たらドアが開く」などのプログラムを組んで完成！"
                        delay="600ms"
                    />
                </div>
            </div>
        </div>
    );
}

function StepTile({ step, title, description, links, delay }: { step: string, title: string, description: string, links?: { label: string, url: string }[], delay?: string }) {
    return (
        <div className="group bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: delay }}>
            <div className="flex flex-col md:flex-row">
                <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 md:w-32 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 tracking-wider bg-white dark:bg-neutral-800 px-2 py-1 rounded mb-1">{step}</span>
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
