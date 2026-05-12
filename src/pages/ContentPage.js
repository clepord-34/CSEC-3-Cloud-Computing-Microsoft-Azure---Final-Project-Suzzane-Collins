import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';

function ContentPage({ title, subtitle, intro, points = [], accentLabel, ctaLabel, ctaTo }) {
  return (
    <div className="min-h-screen bg-[#f8ead3] text-[#5a4938]">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ScrollReveal as="section" className="rounded-[1.8rem] border border-[#e7cda8] bg-white p-8 shadow-[0_20px_60px_-38px_rgba(84,63,44,0.4)] sm:p-10 lg:p-14" offset={18}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6d13]">{accentLabel}</p>
          <h1 className="mt-4 font-display text-5xl text-[#b6480c] sm:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-xl leading-8 text-[#5d544a]">{subtitle}</p>
          <p className="mt-8 max-w-3xl leading-8 text-[#5f5346]">{intro}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {points.map((point, index) => (
              <ScrollReveal key={point.title} as="article" delay={index * 80} className="rounded-[1.4rem] border border-[#eed6b8] bg-[#fff8f0] p-6" offset={18}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6d13]">{point.kicker}</p>
                <h2 className="mt-3 font-display text-2xl text-[#b6480c]">{point.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#6f6257]">{point.description}</p>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={ctaTo}
              className="inline-flex items-center justify-center bg-[#ff7a11] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
            >
              {ctaLabel}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-[#f0c99c] bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#b6480c] transition hover:-translate-y-0.5 hover:bg-[#fff6eb]"
            >
              Back Home
            </Link>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
}

export default ContentPage;