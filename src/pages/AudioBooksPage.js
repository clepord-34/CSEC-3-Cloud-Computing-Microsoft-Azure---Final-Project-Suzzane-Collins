import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';
import micIcon from '../assets/Images/mic_icon.png';
import hungerGamesCover from '../assets/Images/about_Icon.png';
import underlandCover from '../assets/Images/underland_icon.png';
import balladCover from '../assets/Images/The_Ballad.jpg';
import hungerGamesBackground from '../assets/Images/The_Hunger_Games.jpg';
import catchingFireBackground from '../assets/Images/Catching_Fire.jpg';
import mockingjayBackground from '../assets/Images/Mockingjay.jpg';
import gregorOverlanderBackground from '../assets/Images/gregor_the_overlander.jpg';
import audioBooksCoverPage from '../assets/Images/Audio_books_coverPage.jpg';

const audioBooks = [
  {
    title: 'The Ballad of Songbirds and Snakes',
    year: '2020',
    series: 'The Hunger Games',
    duration: '15h 16m',
    narrator: 'Santino Fontana',
    description:
      'Full audiobook available on YouTube — Free Audiobook Gallery.',
    source: 'YT Channel - Free Audiobook Gallery',
    listenUrl: 'https://youtu.be/s9GZCUHh8PA?si=-yJWkbnGYtpnARsU',
  },
  {
    title: 'Mockingjay',
    year: '2010',
    series: 'The Hunger Games',
    duration: '11h 41m',
    narrator: 'Carolyn McCormick',
    description:
      'Full audiobook available on YouTube — Audiobooks Enthusiast.',
    source: 'YT Channel - Audiobooks Enthusiast',
    listenUrl: 'https://youtu.be/l9r8bG5qZjw?si=CzgEcMG77FiMCnpr',
  },
  {
    title: 'Catching Fire',
    year: '2009',
    series: 'The Hunger Games',
    duration: '11h 43m',
    narrator: 'Carolyn McCormick',
    description:
      'Full audiobook available on YouTube — Audiobooks Enthusiast.',
    source: 'YT Channel - Audiobooks Enthusiast',
    listenUrl: 'https://youtu.be/fMy6RLAvDUE?si=-mNlPNidj9C5IUTD',
  },
  {
    title: 'The Hunger Games',
    year: '2008',
    series: 'The Hunger Games',
    duration: '11h 59m',
    narrator: 'Carolyn McCormick',
    description:
      'Full audiobook available on YouTube — Audiobooks Enthusiast.',
    source: 'YT Channel - Audiobooks Enthusiast',
    listenUrl: 'https://youtu.be/r-XfamQciCs?si=W3gFm1-VyFTHGBz-',
  },
  {
    title: 'Gregor the Overlander',
    year: '2003',
    series: 'The Underland Chronicles',
    duration: '6h 57m',
    narrator: 'Paul Boehmer',
    description:
      'Complete Gregor audiobook playlist on YouTube — EPIC Eagles.',
    source: 'YT Channel - EPIC Eagles',
    listenUrl: 'https://youtube.com/playlist?list=PLSW9dumH4EWEwljDo4JZ_bhVkJmCtDIr3&si=NiGcFcJzF0fYuXRe',
  },
  
];

const audioBookBackgrounds = {
  'The Ballad of Songbirds and Snakes': balladCover,
  'Mockingjay': mockingjayBackground,
  'Catching Fire': catchingFireBackground,
  'The Hunger Games': hungerGamesBackground,
  'Gregor the Overlander': gregorOverlanderBackground,
};

function AudioCard({ item, delay = 0 }) {
  return (
    <ScrollReveal as="article" delay={delay} className="grid gap-0 overflow-hidden border border-[#f0c99c] bg-[#fffaf3] lg:grid-cols-[210px_1fr]" offset={18}>
      <div className="relative flex min-h-[210px] flex-col items-center justify-center overflow-hidden border-b border-[#f0c99c] bg-[#f8d9ae] px-6 py-8 text-center lg:border-b-0 lg:border-r">
        {audioBookBackgrounds[item.title] ? (
          <img
            src={audioBookBackgrounds[item.title]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
          />
        ) : null}

        <div className="relative z-10 flex w-full flex-col items-center justify-center">
          <span className="self-start rounded-sm bg-[#f39b63] px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white">
            {item.year}
          </span>
          {item.series === 'The Hunger Games' || item.series === 'The Underland Chronicles' ? (
            <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#f7b47d]/55 p-2">
              <img
                src={item.series === 'The Hunger Games' ? hungerGamesCover : underlandCover}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#f7b47d]/55 text-3xl text-[#ff6d13]">
              🎧
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">
          <span className="rounded-sm bg-[#fff0e1] px-2 py-1 text-[#ff6d13]">{item.series}</span>
          <span className="text-[#bfa57f]">•</span>
          <span className="text-[#8f7f6b]">{item.duration}</span>
        </div>

        <h2 className="mt-3 font-display text-3xl leading-tight text-[#b6480c]">{item.title}</h2>
        <p className="mt-3 max-w-3xl text-[0.92rem] leading-7 text-[#5e5347]">{item.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#8f7f6b]">{item.source}</p>
          <a
            href={item.listenUrl || '#listen-anywhere'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#ff7a11] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
          >
            ▶ Listen
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

function AudioBooksPage() {
  return (
    <div className="min-h-screen bg-[#f7ebdb] text-[#543f2c]">
      <SiteHeader />

      <main id="home">
        <section
          className="relative overflow-hidden border-b border-[#e8caa0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 236, 219, 0.82), rgba(248, 236, 219, 0.84)), radial-gradient(circle at top, rgba(255, 255, 255, 0.28), transparent 44%), linear-gradient(135deg, rgba(186, 159, 118, 0.12), rgba(130, 94, 58, 0.06)), url(${audioBooksCoverPage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-center text-center" offset={18}>
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#ffd7ad] p-3 shadow-sm sm:h-20 sm:w-20 lg:h-24 lg:w-24">
              <img src={micIcon} alt="Microphone" className="h-full w-full object-contain" />
            </div>
            <h1 className="mt-8 font-display text-5xl text-[#b64d0a] sm:text-6xl lg:text-[4.6rem]">Audio Books</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f5448] sm:text-lg">
              Experience Suzanne Collins&apos; stories through professionally narrated audiobooks, bringing the worlds of Panem and the Underland to life.
            </p>

          </ScrollReveal>

          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-[8%] top-[24%] hidden h-48 w-72 -rotate-12 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.55),_rgba(255,255,255,0.04)_72%)] blur-2xl lg:block" />
            <div className="absolute right-[15%] top-[8%] hidden h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_rgba(255,255,255,0)_70%)] blur-2xl lg:block" />
            <div className="absolute right-[16%] top-[18%] hidden h-72 w-56 rounded-[2rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.26),_rgba(255,255,255,0.02))] blur-[1px] lg:block" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <div className="space-y-4">
            {audioBooks.map((item, index) => (
              <AudioCard key={item.title} item={item} delay={index * 80} />
            ))}
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

export default AudioBooksPage;