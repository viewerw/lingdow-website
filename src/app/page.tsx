export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Immersive AI
            <br />
            <span className="text-purple-400">Language Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Learn languages naturally through YouTube videos with bilingual
            subtitles, AI-powered word lookup, and smart practice tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/lingdow/id6760874058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Learn from Real Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎬"
              title="Bilingual Subtitles"
              description="Watch YouTube videos with dual-language subtitles. Tap any word for instant translation and AI-powered grammar analysis."
            />
            <FeatureCard
              icon="🔍"
              title="AI Word Lookup"
              description="Get detailed word definitions, example sentences, and pronunciation in context. Save words to your personal vocabulary list."
            />
            <FeatureCard
              icon="🗣️"
              title="Shadow Reading"
              description="Practice pronunciation by shadowing native speakers. Get real-time accuracy and fluency scores powered by speech recognition."
            />
            <FeatureCard
              icon="✍️"
              title="Writing Practice"
              description="Improve your writing by transcribing video subtitles. Choose from pick, type, translate, or dictate modes."
            />
            <FeatureCard
              icon="📝"
              title="Smart Review"
              description="Save words and sentences from videos. Build your own learning deck and review anytime with spaced repetition."
            />
            <FeatureCard
              icon="🤖"
              title="AI Summary"
              description="Get AI-generated video summaries with key vocabulary, phrases, slang, and grammar points before you watch."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Learning Today
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Turn every video into a language lesson. Download Lingdow and start
            your immersive learning journey.
          </p>
          <a
            href="https://apps.apple.com/app/lingdow/id6760874058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors"
          >
            Download for Free
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
