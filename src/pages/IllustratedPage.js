import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';

import mockingjayCover from '../assets/Images/Mockingjay-Illustrated-Edition_1.jpg';
import mockingjayInterior2 from '../assets/Images/Mockingjay_Illustrated_2.png';
import mockingjayInterior3 from '../assets/Images/Mockingjay_Illustrated_3.png';
import mockingjayInterior4 from '../assets/Images/Mockingjay_Illustrated_4.png';
import catchingFireCover from '../assets/Images/Catching-Fire-Illustrated-Cover.jpg';
import catchingFireInterior1 from '../assets/Images/CatchingFireIllustrated-Interior-1.jpg';
import catchingFireInterior2 from '../assets/Images/CatchingFireIllustrated-Interior2.jpg';
import hungerGamesCover from '../assets/Images/HG-illus-Final-Cover.jpg';
import hungerGamesPin from '../assets/Images/HG-Illustrated-PIN.jpg';
import hungerGamesCornucopia from '../assets/Images/HGillustratedCornucopia2.jpg';
import hgIllustratedCover from '../assets/Images/hg_illustrated_cover.jpg';

const illustratedBooks = [
  {
    title: 'Mockingjay',
    subtitle: 'Illustrated Edition',
    highlight: 'Coming October 6, 2026!',
    cover: mockingjayCover,
    coverAlt: 'Mockingjay illustrated cover',
    quote:
      "Certain illustrations made an indelible impression on me growing up, and the images are forever linked to books I love, including John Tenniel's classic drawings for Alice's Adventures in Wonderland and Fritz Eichenberg's wood engravings for Wuthering Heights. I'm thrilled with Nico Delort's striking black-and-white scratchboard artwork for The Hunger Games and feel it will have the same lasting influence on a new generation of Panem readers." +
      ' -- S.C.',
    details: [mockingjayInterior2, mockingjayInterior3, mockingjayInterior4],
    detailsAlt: 'Mockingjay illustrated interior art',
  },
  {
    title: 'Catching Fire',
    subtitle: 'Illustrated Edition',
    highlight: null,
    cover: catchingFireCover,
    coverAlt: 'Catching Fire illustrated cover',
    quote:
      "Back to the Games—and some really beautiful art. Following the release of The Hunger Games: Illustrated Edition (2024), this new edition of the second series entry (originally released in 2009) once again pairs Delort's impressive scratchboard artwork with Collins' enduringly popular text to create a work that will be treasured by old and new fans alike. In this installment, Hunger Games victors Katniss Everdeen and Peeta Mellark return to their economically depressed district of Panem, a country run by the elderly totalitarian dictator President Snow. The teens' enjoyment of their time as victors is cut short when they're unexpectedly recruited to again participate in the cutthroat annual competition, all while maintaining a fictitious version of their relationship to win support from viewers. While the storyline may be familiar to many, the illustrations in this new edition enhance the plot. Delort makes use of interesting angles and perspectives to create tension: A portrait of President Snow is cropped to emphasize his mouth and hands; Peeta's on-air proposal to Katniss is depicted from a distance, highlighting the cameras capturing every moment; and the introduction of Finnick Odair, standing beside his horse, emphasizes his physical prowess and beauty. Those familiar with the movie will appreciate this new visual interpretation, and those who love the books will marvel at the artistic additions to the story. This book is lit! -- Kirkus Reviews, STARRED REVIEW",
    details: [catchingFireInterior1, catchingFireInterior2],
    detailsAlt: 'Catching Fire illustrated interior art',
  },
  {
    title: 'The Hunger Games',
    subtitle: 'Illustrated Edition',
    highlight: 'A 2025 Locus Award Top Ten Finalist',
    cover: hungerGamesCover,
    coverAlt: 'The Hunger Games illustrated cover',
    quote:
      'Once more into the fray…but with pictures! Readers are invited to revisit Panem, a fascist country "that rose up out of the ashes of a place that was one called North America" and is run by an elderly totalitarian dictator. The harmful, long-reaching influence of reality television is on full display in this excellent read that remains as relevant to modern audiences as when the novel was originally published in 2008. While Katniss Everdeen, the selfless and determined young hero from a region that\'s strongly reminiscent of Appalachia, is the star of that world, the star of this edition is Delort, whose scratchboard art deftly imagines memorable scenes throughout the story while avoiding influences from the film series. These illustrations are new and wholly themselves, and the book\'s large format shows them off to great advantage. The black-and-white art brings a hefty weight to the poverty and despair of District 12, the poorest sector of Panem, while at the same time capturing the affected excesses of the Capitol and its citizens. Delort\'s talent is fully evident when capturing Katniss in her fire-tinged dress; readers will be able to feel the heat thanks to the dazzling interplay of positive and negative space. Fans of Barry Moser, take note: There\'s a new tribute in town. Vivid and well worth a look from new and returning fans alike." -- Kirkus Reviews, STARRED REVIEW',
    details: [hungerGamesPin, hungerGamesCornucopia],
    detailsAlt: 'The Hunger Games illustrated interior art',
  },
];

function IllustratedBookSection({ book, reverse = false, delay = 0 }) {
  return (
    <ScrollReveal as="section" delay={delay} className="border border-[#efd1ad] bg-[#fffaf3] p-4 shadow-[0_16px_40px_-32px_rgba(84,63,44,0.35)] sm:p-6 lg:p-8" offset={18}>
      <div className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] ${reverse ? 'lg:[direction:rtl]' : ''}`}>
        <div className={`flex flex-col items-center text-center ${reverse ? 'lg:[direction:ltr]' : ''}`}>
          <p className="font-display text-3xl italic text-[#ff7a11] sm:text-[2.35rem]">{book.title}:</p>
          <p className="mt-1 text-sm italic text-[#c77a36]">{book.subtitle}</p>
          {book.highlight ? <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#b6480c]">{book.highlight}</p> : null}

          <div className="mt-6 w-full max-w-[300px] overflow-hidden border border-[#f0c99c] bg-[#f8e4c6] p-3">
            <img
              src={book.cover}
              alt={book.coverAlt}
              className="mx-auto h-auto w-full max-w-[260px] object-contain"
            />
          </div>

          <p className="mt-6 max-w-xl text-left text-[0.95rem] leading-8 text-[#5e5347]">{book.quote}</p>
        </div>

        <div className={`space-y-4 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
          {book.details.map((image) => (
            <div key={image} className="overflow-hidden border border-[#efd1ad] bg-[#f6e7cf] p-2">
              <img src={image} alt={book.detailsAlt} className="h-auto w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function IllustratedPage() {
  return (
    <div className="min-h-screen bg-[#f9f2e4] text-[#543f2c]">
      <SiteHeader />

      <main>
        <section
          className="relative overflow-hidden border-b border-[#e8d4b9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 236, 219, 0.82), rgba(248, 236, 219, 0.84)), radial-gradient(circle at top, rgba(255, 255, 255, 0.28), transparent 44%), linear-gradient(135deg, rgba(186, 159, 118, 0.12), rgba(130, 94, 58, 0.06)), url(${hgIllustratedCover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,198,129,0.12),transparent_22%),radial-gradient(circle_at_58%_36%,rgba(255,166,72,0.08),transparent_18%)]" />
          <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center text-center" offset={18}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffd2a3] text-4xl text-[#ff6d13] shadow-[0_12px_30px_-16px_rgba(180,74,13,0.65)]">
              🖌
            </div>
            <h1 className="mt-8 font-display text-5xl text-[#b64d0a] sm:text-6xl lg:text-[4.4rem]">HG Illustrated</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f5448] sm:text-lg">
              The Hunger Games series appears for the first time in a deluxe illustrated edition, with spellbinding art from internationally acclaimed artist Nico Delort. (Scholastic Press, 2024)
            </p>
          </ScrollReveal>
        </section>

        <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {illustratedBooks.map((book, index) => (
            <IllustratedBookSection key={book.title} book={book} reverse={index % 2 === 1} delay={index * 90} />
          ))}
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

export default IllustratedPage;