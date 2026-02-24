import { CourseCard } from "@/components/CourseCard";
import { Bot, FileQuestion, Sparkles, FileSpreadsheet } from "lucide-react";

export default function Home() {
  const courses = [
    {
      title: "業務効率化",
      description: "目指せスプシマスター！将来役立つスプレッドシートの関数と裏ワザを習得。",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      href: "/courses/spreadsheet",
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "AI×ガジェット開発",
      description: "画像認識AIを使って、ジェスチャーで動く魔法のデバイスを作ろう！micro:bitとAIの連携を体験。",
      icon: <Bot className="w-8 h-8" />,
      href: "/courses/ai-gadget",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "入試・実力試し",
      description: "大学入学共通テスト「情報I」に挑戦！クイズ形式で楽しく実力をチェックしよう。",
      icon: <FileQuestion className="w-8 h-8" />,
      href: "/courses/exam-challenge",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "生成AI活用",
      description: "プロンプトエンジニアリング選手権！AIに思い通りの指示を出して、画像やコードを生成しよう。",
      icon: <Sparkles className="w-8 h-8" />,
      href: "/courses/gen-ai",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/50 via-transparent to-transparent dark:from-primary-900/20" />

        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
            <span className="block text-primary-600 dark:text-primary-400 mb-2">情報I 最終課題</span>
            未来を創るスキルを選ぼう
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10">
            AI、IoT、データ分析、業務効率化... <br className="hidden sm:inline" />
            興味のある分野を選んで、実践的なプロジェクトに挑戦しよう。
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.href}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
