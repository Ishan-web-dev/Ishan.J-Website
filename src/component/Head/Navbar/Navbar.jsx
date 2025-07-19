import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const NavbarLinks = [
  { id: 1, name: "Home", link: "/", path: "/" },
  { id: 2, name: "About", link: "about", path: "/about" },
  { id: 3, name: "Services", link: "services", path: "/Services" },
  { id: 4, name: "Review", link: "review", path: "/Review" },
  { id: 5, name: "Projects", link: "Projects", path: "/Projects" },
  // { id: 5, name: 'Bloges', link: 'Blogs', path: '/PersonalBloges' },
  { id: 6, name: "Contact Us", link: "contact", path: "/Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link, path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      scrollToElementWithOffset(link);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Automatically close mobile menu on route change
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-[#0000005f]"
      } navbar-shadow Kodchasan`}
    >
      <div className="container mx-auto px-9 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-white kodchasan-light">
          <Link to="/">Ishan.j</Link>
        </div>

        <ul className="hidden md:flex gap-6 kodchasan-light">
          {NavbarLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.link, item.path)}
                className="text-gray-300 hover:text-[#b728ff] uppercase cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/PersonalInfo">
            <button className="kodchasan-light primary-btn bg-[#b728ff] text-white hover:bg-yellow-400 transition duration-200 rounded-xl cursor-pointer">
              Personal Info
            </button>
          </Link>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black shadow-md`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {NavbarLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.link, item.path)}
                className="text-gray-300 hover:text-[#d0cec8] uppercase cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </button>
            </li>
          ))}
          <div className="block">
            <Link to="/personalInfo">
              <button className="primary-btn bg-[#b728ff] text-black hover:bg-yellow-400 transition duration-200 cursor-pointer">
                Personal Info
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
