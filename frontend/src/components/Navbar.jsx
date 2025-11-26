import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Grid3x3, ArrowRight, HeartHandshake } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) setMenuOpen(false);
    const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const navLinks = [
    { 
      name: "Home", 
      path: "/",
    
    },
            { name: "About Us", path: "/about-us" },
            { name: "Get Involved", path: "/get-involved" },
        { name: "Team", path: "/team-member" },
      
   
    { 
      name: "Services", 
      path: "/services",

    },
    { 
      name: "Blog", 
      path: "/blogs",
   
    },
    { name: "Contact Us", path: "/contact-us" },
  ];


  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}>
        <nav className="px-6 lg:px-16 mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* Logo – Now E4H */}
            <a href="/" className="flex items-center space-x-3 group">
             
              <span className="text-2xl font-bold text-white tracking-tight">
                Engineers4Humanity
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-9">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-white hover:text-yellow-500 font-medium text-sm tracking-wide transition-colors duration-200 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300">
                <Search size={20} />
              </button>

              <a
                href="/donate"
                className="flex items-center space-x-2 px-7 py-3.5 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                <span>Donate Now</span>
                <ArrowRight size={18} />
              </a>

              <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-900 transition-all duration-300">
                <Grid3x3 size={20} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-yellow-500 transition-colors"
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {menuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            <div className="lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <HeartHandshake className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Engineers4Humanity</span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <ul className="py-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block px-8 py-4 text-white hover:bg-gray-800 text-lg font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Footer Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4 bg-gray-900 border-t border-gray-800">
                <a
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all shadow-lg"
                >
                  <span>Donate Now</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/get-involved"
                  onClick={() => setMenuOpen(false)}
                  className="w-full block text-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all backdrop-blur-sm border border-white/20"
                >
                  Volunteer With Us
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </>
  );
}

export default NavBar;