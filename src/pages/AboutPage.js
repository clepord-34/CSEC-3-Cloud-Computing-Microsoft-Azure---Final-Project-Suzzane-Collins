import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';
import aboutIcon from '../assets/Images/about_Icon.png';
import aboutPageImage from '../assets/Images/about_page.jpg';
// removed unused image import to resolve ESLint no-unused-vars warning

const highlights = [
  {
    title: 'Author',
    description: 'Multiple New York Times bestselling novels across different age groups',
    icon: '✎',
  },
  {
    title: 'Screenwriter',
    description: "Emmy-nominated television writer for children's programming",
    icon: '◫',
  },
  {
    title: 'Awards',
    description: 'Multiple literary awards and honors including TIME’s Most Influential People',
    icon: '✪',
  },
  {
    title: 'Influence',
    description: 'Inspired a new generation of readers and writers worldwide',
    icon: '◔',
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8ead3] text-[#5a4938]">
      <SiteHeader activeItem="About" />

      <main id="home">
        <section
          className="border-b border-[#e6ceb1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 236, 219, 0.82), rgba(248, 236, 219, 0.84)), radial-gradient(circle at top, rgba(255, 255, 255, 0.28), transparent 44%), linear-gradient(135deg, rgba(186, 159, 118, 0.12), rgba(130, 94, 58, 0.06)), url(${aboutPageImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <ScrollReveal className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#ffd7ad] shadow-sm">
              <img src={aboutIcon} alt="About" className="h-full w-full object-cover" />
            </div>
            <h1 className="mt-8 font-display text-5xl text-[#b6480c] sm:text-6xl lg:text-[4.9rem]">
              About Suzanne Collins
            </h1>
            <p className="mt-4 text-xl text-[#5d544a] sm:text-2xl">
              Award-winning author and screenwriter
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-[#ff7a11] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
              >
                Home
              </Link>
              <Link
                to="/books-interviews"
                className="inline-flex items-center justify-center border border-[#f0c99c] bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#b6480c] transition hover:-translate-y-0.5 hover:bg-[#fff6eb]"
              >
                Books
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <ScrollReveal className="space-y-6 text-[0.95rem] leading-8 text-[#5f5346] text-justify" offset={18}>
            <p>
              In 1991, Suzanne Collins began her professional career writing for children's television. She worked on the staffs of several Nickelodeon shows, including the Emmy-nominated hit <em>Clarissa Explains It All</em> and <em>The Mystery Files of Shelby Woo</em>. For preschool viewers, she penned multiple stories for the Emmy-nominated <em>Little Bear</em> and <em>Oswald</em>. She also co-wrote the Rankin/Bass Christmas special <em>Santa, Baby!</em> with her friend Peter Bakalian, which was nominated for a WGA Award in Animation. Most recently she was the Head Writer for Scholastic Entertainment's <em>Clifford's Puppy Days</em> and a freelancer on <em>Wow! Wow! Wubbzy!</em>. While working on a Kids' WB show called <em>Generation O!</em> she met children's author and illustrator James Proimos, who encouraged her to try writing children's books.
            </p>

            <p>
              Thinking one day about <em>Alice in Wonderland</em>, she was struck by how pastoral that setting must seem to kids who, like her own, lived in urban surroundings. In New York City, you're much more likely to fall down a manhole than a rabbit hole and, if you do, you're not going to find a tea party. What you might find... well, that's the story of <em>Gregor the Overlander</em>, the first book in her five-part fantasy war series, <em>The Underland Chronicles</em>, which became a New York Times bestseller. Internationally, it has been sold in 21 languages. Audio books in English are read by Paul Boehmer and the first and final books were chosen as ALSC Notable Children's Recordings.
            </p>

            <p>
              Her next series, <em>The Hunger Games</em>, is a dystopian war story composed of five books, including the initial trilogy of <em>The Hunger Games</em>, <em>Catching Fire</em>, and <em>Mockingjay</em>, and two prequels, <em>The Ballad of Songbirds and Snakes</em> and <em>Sunrise on the Reaping</em>. It's spent many years on The New York Times bestseller list since publication in September 2008, and has also appeared consistently on USA Today and Publishers Weekly bestseller lists. An international bestseller, it has been sold in 55 languages. October 1, 2024, saw the publication of the first book in the illustrated series with art by Nico Delort. Recent audio books in English are read by Tatiana Maslany (The Hunger Games Trilogy) and Santino Fontana (The Ballad of Songbirds and Snakes). <em>Sunrise on the Reaping</em>, read by Jefferson White, won the 2026 Audie Awards Audiobook of the Year. All five are New York Times Audio Children's bestsellers.
            </p>

            <p>
              Lionsgate released a film adaptation of <strong>THE HUNGER GAMES</strong> on March 23, 2012, directed by Gary Ross who shared screenplay credit with Suzanne and Billy Ray. It broke multiple box office records and went on to become one of the highest-grossing North American releases of all time, eventually generating nearly $700 million worldwide. Lionsgate released the second installment <strong>THE HUNGER GAMES: CATCHING FIRE</strong> worldwide on November 22, 2013, directed by Francis Lawrence from a screenplay by Simon Beaufoy and Michael (Arndt) DeBruyn and bringing back stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Willow Shields, Paula Malcomson, Donald Sutherland, Stanley Tucci and Lenny Kravitz along with new cast members Philip Seymour Hoffman, Sam Claflin, Jena Malone and Jeffrey Wright. It was the highest-grossing domestic box office release of 2013 and among the highest-grossing domestic releases of all time. Lionsgate released <strong>THE HUNGER GAMES: MOCKINGJAY – PART 1</strong> on November 21, 2014 and <strong>THE HUNGER GAMES: MOCKINGJAY – PART 2</strong> on November 20, 2015, also directed by Lawrence and welcoming Julianne Moore, Mahershala Ali, Natalie Dormer, and Patina Miller to the cast. Both screenplays were by Peter Craig and Danny Strong from an adaptation by Suzanne Collins. All four films were produced by Nina Jacobson of Color Force and Jon Kilik. On November 17, 2023, Lionsgate released <strong>THE HUNGER GAMES: THE BALLAD OF SONGBIRDS AND SNAKES</strong> directed by Francis Lawrence, written by Michael Lesslie and Michael Arndt, and produced by Nina Jacobson, Brad Simpson and Lawrence. It starred Tom Blyth, Rachel Zegler, Viola Davis, Peter Dinklage, Hunter Schafer, Fionnula Flanagan, Jason Schwartzman, and Josh Andres Rivera. <strong>THE HUNGER GAMES: SUNRISE ON THE REAPING</strong>, directed by Lawrence and produced by Jacobson, Simpson and Lawrence with Executive Producer Cameron MacConomy, is set to be released by Lionsgate on November 20, 2026, with an ensemble cast. Suzanne has been an Executive Producer on all six films. The worldwide box for the entire franchise is over $3.4 billion.
            </p>

            <p>
              <strong>THE HUNGER GAMES: ON STAGE</strong>, the first-ever live stage adaptation of <em>The Hunger Games</em>, began performances on Oct. 20, 2025 at the Troubadour Canary Wharf Theatre in London. Adapted from the first book and the first film by award-winning playwright Conor McPherson, it was helmed by director Matthew Dunster.
            </p>

            <p>
              In September 2013, Suzanne released a critically acclaimed autobiographical picture book, <em>Year of the Jungle</em>, illustrated by James Proimos. It deals with the year she was six and her father was deployed to Viet Nam. It has been sold into 12 territories in 11 languages. Her first picture book, <em>When Charlie McButton Lost Power</em>, about a boy obsessed with computer games, was illustrated by Mike Lester and came out in 2005. It has been sold into 4 foreign territories.
            </p>

            <p>
              In 2010, Suzanne was named to the TIME 100 list as well as the Entertainment Weekly Entertainers of the Year list. In 2016, she was presented with the Authors Guild Award for Distinguished Service to the Literary Community for exemplifying the unique power of young people's literature to change lives and create lifelong book lovers. It was the first time the Guild presented the award to a YA author. She was a nominee for the 2026 Astrid Lindgren Memorial Award, a global award given annually for outstanding contribution to children's and young adult literature.
            </p>

            <p>
              Her books have sold over 100 million copies worldwide.
            </p>
          </ScrollReveal>
        </section>

        <section className="bg-[#f5e1c5] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-sm bg-[#f6e7cf] p-4 sm:p-6">
            <ScrollReveal className="text-center" offset={16}>
              <h2 className="font-display text-4xl text-[#b6480c]">Career Highlights</h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} as="article" delay={index * 80} className="flex flex-col items-center px-4 py-6 text-center" offset={18}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffd4a6] text-2xl text-[#ff6d13]">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-[#b6480c]">{item.title}</h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-6 text-[#6f6257]">{item.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Background section removed per request */}

        <footer id="footer" className="border-t border-[#d4b792] bg-[#f3dfbd] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <p className="font-display text-2xl text-[#b6480c]">Suzanne Collins</p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#6f6257]">
                Award-winning author of The Hunger Games trilogy and The Underland Chronicles series.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-[#6f6257]">
                <li><Link to="/" className="transition hover:text-[#b6480c]">Home</Link></li>
                <li><Link to="/about" className="transition hover:text-[#b6480c]">About</Link></li>
                <li><Link to="/books-interviews" className="transition hover:text-[#b6480c]">Books and Interviews</Link></li>
                <li><Link to="/audio-books" className="transition hover:text-[#b6480c]">Audio Books</Link></li>
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

export default AboutPage;