import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books & Interviews', href: '/books-interviews' },
  { label: 'Audio Books', href: '/audio-books' },
  { label: 'HG Illustrated', href: '/hg-illustrated' },
  { label: 'Educ. Resources', href: '/educ-resources' },
];

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#f0cfab] bg-[#fffaf3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="leading-tight">
          <p className="font-display text-[1.35rem] font-semibold text-[#c54f10]">Suzanne Collins</p>
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#b8a894]">Official Website</p>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `border-b-2 px-1 pb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'border-[#ff7f1f] text-[#ff7f1f]'
                    : 'border-transparent text-[#8a7c6d] hover:border-[#f6b37a] hover:text-[#c85f1a]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-[#f0cfab] bg-white px-4 py-2 text-sm font-semibold text-[#c85f1a] shadow-sm transition hover:-translate-y-0.5 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-[#f0cfab] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#fdf1e3] text-[#c85f1a]'
                      : 'text-[#8a7c6d] hover:bg-[#fdf1e3] hover:text-[#c85f1a]'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default SiteHeader;
