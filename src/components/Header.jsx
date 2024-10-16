import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a className="flex items-center justify-center" href="/">
        <span className="sr-only text-black">Archilli Matias</span>
        <span className="font-bold text-xl text-black">AM</span>
      </a>
      {/* Hamburguesa para vista mobile */}
      <button
        className="ml-auto lg:hidden text-black bg-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {/* Navegación para escritorio */}
      <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4 text-black"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4 text-black"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4 text-black"
          href="#contact"
        >
          Contact
        </a>
      </nav>
      {/* Menú desplegable para mobile */}
      {isOpen && (
        <nav className="fixed inset-0 bg-white shadow-md p-8 flex flex-col gap-4 z-50">
          <button
            className="absolute top-4 right-4 text-black bg-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            className="text-lg font-medium hover:underline underline-offset-4 text-black"
            href="#projects"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            className="text-lg font-medium hover:underline underline-offset-4 text-black"
            href="#skills"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            className="text-lg font-medium hover:underline underline-offset-4 text-black"
            href="#contact"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
