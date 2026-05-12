import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';
import suzzaneCollinsImage from '../assets/Images/suzzaneCollins_image.jpg';
import mainPosterImage from '../assets/Images/main_Poster.jpg';
import { books } from '../data/books';

const stats = [
  { value: '100M+', label: 'Books Sold', icon: '$' },
  { value: 'Multiple', label: 'Literary Awards', icon: '✪' },
  { value: '50+', label: 'Languages', icon: '◫' },
];

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Books and Interviews', to: '/books-interviews' },
  { label: 'Audio Books', to: '/audio-books' },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const booksToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleBooks = () => {
    const result = [];
    for (let i = 0; i < booksToShow; i++) {
      result.push(books[(currentIndex + i) % books.length]);
    }
    return result;
  };

  const visibleBooks = getVisibleBooks();

  return (
    <div className="min-h-screen bg-[#f7ebdb] text-[#543f2c]">
      <SiteHeader />

      <main id="home">
        <section
          className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden border-b border-[#e9cfb4] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 236, 219, 0.7), rgba(248, 236, 219, 0.72)), radial-gradient(circle at top, rgba(255, 255, 255, 0.35), transparent 44%), linear-gradient(135deg, rgba(186, 159, 118, 0.14), rgba(130, 94, 58, 0.08)), url(${mainPosterImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-center text-center">
            <p className="max-w-2xl font-display text-5xl leading-none text-[#b84a0d] sm:text-6xl lg:text-[5.5rem]">
              Suzanne Collins
            </p>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5b5145] sm:text-2xl">
              New York Times bestselling author of The Hunger Games trilogy and The Underland Chronicles
            </p>
            <Link
              to="/books-interviews"
              className="mt-8 inline-flex items-center justify-center bg-[#ff7a11] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
            >
              Explore Books
            </Link>
          </ScrollReveal>
        </section>

        <section id="featured" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <ScrollReveal className="text-center" offset={16}>
            <h2 className="font-display text-4xl text-[#b84a0d] sm:text-5xl">Featured Works</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {visibleBooks.map((book) => (
              <article key={book.title} className="space-y-4">
                <div className="overflow-hidden rounded-[0.45rem] border-2 border-[#f6d69e] bg-[#f4ead9] shadow-[0_14px_35px_-20px_rgba(76,48,24,0.45)] transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_22px_42px_-20px_rgba(76,48,24,0.6)]">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
                <h3 className="text-center font-display text-xl text-[#b84a0d]">{book.title}</h3>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? 'w-8 bg-[#ff7a11]' : 'w-2 bg-[#d4c4b0]'
                }`}
                aria-label={`Go to book ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="stats" className="border-y border-[#e9cfb4] bg-[#f2dfc3] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {stats.map((item, index) => (
              <ScrollReveal key={item.label} as="article" delay={index * 80} className="flex items-center justify-center gap-4 bg-[#f7e3c0] px-6 py-5 text-center" offset={18}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffd7a9] text-xl text-[#ff6d13]">
                  {item.icon}
                </div>
                <div>
                  <p className="font-display text-4xl text-[#ff6d13]">{item.value}</p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-[#7b6a57]">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 bg-white p-6 shadow-[0_18px_60px_-35px_rgba(84,63,44,0.4)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <ScrollReveal className="pt-4 lg:py-10" offset={18}>
              <h2 className="font-display text-4xl text-[#b84a0d] sm:text-5xl">About the Author</h2>
              <div className="mt-6 space-y-5 text-[0.94rem] leading-7 text-[#5c4f44]">
                <p>
                  Suzanne Collins is the author of the groundbreaking Hunger Games trilogy: The Hunger Games, Catching Fire, and Mockingjay. She is also the author of the picture book Year of the Jungle, and the New York Times bestselling Underland Chronicles series.
                </p>
                <p>
                  Her books have been published in more than fifty languages and have sold over 100 million copies worldwide. The Hunger Games was adapted into a blockbuster film series that captivated audiences globally.
                </p>
                <p>
                  Prior to her literary career, Collins was a successful children&apos;s television writer, working on shows for Nickelodeon and developing her storytelling craft.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6d13] transition hover:text-[#cc550c]"
              >
                Learn More →
              </Link>
            </ScrollReveal>

            <ScrollReveal className="flex items-center justify-center" delay={120} offset={18}>
              <div className="w-full max-w-[28rem] rounded-[0.4rem] border-2 border-[#f6d69e] bg-[#f4ead9] p-4 shadow-[0_18px_50px_-24px_rgba(84,63,44,0.55)]">
                <img 
                  src={suzzaneCollinsImage} 
                  alt="Suzanne Collins portrait" 
                  className="min-h-[26rem] w-full rounded-[0.2rem] object-cover"
                />
              </div>
            </ScrollReveal>
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
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition hover:text-[#b84a0c]">
                      {link.label}
                    </Link>
                  </li>
                ))}
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

export default HomePage;
