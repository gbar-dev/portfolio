import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

interface HeaderProps {
  scrollToSection: (section: string) => void;
  activeSection: string;
}

export default function Header({
  scrollToSection,
  activeSection,
}: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ["about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    if (isMenuOpen) setIsMenuOpen(false); // close mobile menu on nav click
  };

  const headerBg = scrollY > 50 ? "bg-[#F2FAFB]" : "bg-[#F2FAFB]";

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[75%] 
      rounded-full px-6 py-3 backdrop-blur-md shadow-xl transition-all 
      duration-300 flex items-center border border-black/10 ${headerBg}
      animate-expandX transform origin-center`}
      >
        <nav
          className="flex items-center justify-between w-full"
          role="navigation"
          aria-label="Main Navigation"
        >
          <div className="flex items-center gap-3  bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed bg-clip-text text-transparent font-bold">
            baroin.guillaume.pro@gmail.com
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize px-4 py-1 rounded-full transition-all duration-300 font-medium
                  hover:text-sky-800 hover:bg-[#CAF1F6] 
                  ${
                    activeSection === section
                      ? "text-sky-800 font-medium bg-blue-500/10 text-bold"
                      : "text-sky-600 text-bolder"
                  }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black p-0 w-6 h-6 flex md:hidden items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <FiMenu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 z-80 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] bg-[#F4FAFF] shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full justify-between py-10 px-6">
            {/* Nav Items */}
            <div className="flex flex-col gap-6">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className="capitalize text-[#0D74CE] text-lg text-left font-bold hover:text-blue-400 transition-colors duration-300"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Footer / Close Info */}
            <div className="text-sm text-[#0D74CE] mt-auto text-center">
              Guillaume © 2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
