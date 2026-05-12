import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';

import ultimateReadingGuide from '../assets/Images/The-Ultimate-Reading-Guide-for-The-Hunger-Games-Series.png';
import warEducatorGuide from '../assets/Images/talking-about-war-educator-guide-dg.png';
import underlandGuide from '../assets/Images/underland-chronicles-dg-cover-page.png';
import gregorLessonPlan from '../assets/Images/gregor-the-overlander-storia-tg-cover.png';
import eduResourcesCover from '../assets/Images/edu_res_Cover.jpg';

const resourceCards = [
  {
    type: 'Teaching Guide',
    grades: 'Grades 7-12',
    title: "Scholastic's Ultimate Reading Guide for The Hunger Games Series",
    image: ultimateReadingGuide,
    alt: 'The Ultimate Reading Guide for The Hunger Games Series',
    downloadUrl: 'https://www.suzannecollinsbooks.com/attachments/Scholastic-SunriseontheReaping-ReadingGuide.pdf',
    forLabel: 'For: The Hunger Games',
  },
  {
    type: 'Teaching Guide',
    grades: 'Grades 7-12',
    title: "Scholastic's Guide to Teaching and Talking About War with Books for Children and Teens",
    image: warEducatorGuide,
    alt: 'Talking about war educator guide',
    downloadUrl: 'https://www.suzannecollinsbooks.com/attachments/talking-about-war-educator-guide-dg.pdf',
    forLabel: 'For: The Hunger Games and Year of the Jungle',
  },
  {
    type: 'Discussion Guide',
    grades: 'Grades 7-12',
    title: "Scholastic's The Underland Chronicles Discussion Guide",
    image: underlandGuide,
    alt: 'The Underland Chronicles discussion guide',
    downloadUrl: 'https://www.suzannecollinsbooks.com/attachments/underland-chronicles-dg.pdf',
    forLabel: 'For: The Underland Chronicles',
  },
  {
    type: 'Lesson Plan',
    grades: 'Grades 3-7',
    title: "Storia's Gregor the Overlander Lesson Plan",
    image: gregorLessonPlan,
    alt: 'Gregor the Overlander lesson plan',
    downloadUrl: 'https://www.suzannecollinsbooks.com/attachments/gregor-the-overlander-storia-tg.pdf',
    forLabel: 'For: Gregor the Overlander',
  },
];

function ResourceCard({ card, delay = 0 }) {
  return (
    <ScrollReveal as="article" delay={delay} className="grid gap-0 overflow-hidden border border-[#f0d3a8] bg-[#fffaf3] shadow-[0_16px_40px_-30px_rgba(180,74,13,0.35)] lg:grid-cols-[210px_1fr]" offset={18}>
      <div className="flex min-h-[220px] items-center justify-center border-b border-[#f0d3a8] bg-[#f6e8d5] px-6 py-8 text-center lg:border-b-0 lg:border-r">
        <img
          src={card.image}
          alt={card.alt}
          className="mt-5 h-32 w-full max-w-[160px] object-contain shadow-[0_10px_24px_-18px_rgba(0,0,0,0.45)]"
        />
      </div>

      <div className="flex flex-col px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#ff6d13]">
          <span className="rounded-sm bg-[#fff0e1] px-2 py-1 text-[#ff6d13]">{card.type}</span>
          <span className="text-[#bfa57f]">•</span>
          <span className="text-[#a38f79]">{card.grades}</span>
        </div>

        <h3 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-[#b6480c]">{card.title}</h3>
        <p className="mt-4 text-[0.9rem] leading-7 text-[#5f5448]">Free classroom resource available as a downloadable PDF.</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#8f7f6b]">{card.forLabel}</p>
          <a
            href={card.downloadUrl}
            className="inline-flex items-center justify-center bg-[#ff7a11] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
          >
            ⬇ Download
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#faf2e6] text-[#543f2c]">
      <SiteHeader />

      <main id="home">
        <section
          className="relative overflow-hidden border-b border-[#ead7ba] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 236, 219, 0.82), rgba(248, 236, 219, 0.84)), radial-gradient(circle at top, rgba(255, 255, 255, 0.28), transparent 44%), linear-gradient(135deg, rgba(186, 159, 118, 0.12), rgba(130, 94, 58, 0.06)), url(${eduResourcesCover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,198,129,0.12),transparent_22%),radial-gradient(circle_at_58%_36%,rgba(255,166,72,0.08),transparent_18%)]" />
          <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-center text-center" offset={18}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffd2a3] text-4xl text-[#ff6d13] shadow-[0_12px_30px_-16px_rgba(180,74,13,0.65)]">
              🕮
            </div>
            <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[0.98] text-[#b64d0a] sm:text-6xl lg:text-[4.25rem]">
              Educational Resources
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#5f5448] sm:text-lg">
              Free downloadable classroom materials for educators using Suzanne Collins&apos; books.
            </p>
          </ScrollReveal>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-8 text-center" offset={16}>
              <h2 className="font-display text-4xl text-[#b6480c] sm:text-5xl">Available Resources</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5f5448] sm:text-lg">
                Each card links directly to the matching PDF download.
              </p>
            </ScrollReveal>

            <div className="grid gap-4">
              {resourceCards.map((card, index) => (
                <ResourceCard key={card.title} card={card} delay={index * 80} />
              ))}
            </div>
          </div>
        </section>

        <footer id="footer" className="border-t border-[#d3b48f] bg-[#f5e0bf] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <p className="font-display text-2xl text-[#b84a0d]">Suzanne Collins</p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#6f6257]">
                Award-winning author of The Hunger Games trilogy and The Underland Chronicles series.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-[#6f6257]">
                <li><Link to="/" className="transition hover:text-[#b84a0c]">Home</Link></li>
                <li><Link to="/about" className="transition hover:text-[#b84a0c]">About</Link></li>
                <li><Link to="/books-interviews" className="transition hover:text-[#b84a0c]">Books and Interviews</Link></li>
                <li><Link to="/audio-books" className="transition hover:text-[#b84a0c]">Audio Books</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">Publishers</p>
              <ul className="mt-4 space-y-2 text-sm text-[#6f6257]">
                <li>Scholastic Press</li>
                <li>Scholastic Audio Books</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl border-t border-[#e3c7a1] pt-6 text-center text-sm text-[#9a8772]">
            © 2026 Suzanne Collins. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default ResourcesPage;
