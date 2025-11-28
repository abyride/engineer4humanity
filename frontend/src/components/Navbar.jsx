import { useState, useEffect } from "react";
import { Menu, X, Search, Grid3x3, ArrowRight, Building2, Mail, Phone } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    handleResize();
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
        { name: "Member", path: "/team-member" },
      
   
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
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/98 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-gray-900/90 backdrop-blur-md'
      }`}>
        <nav className="px-6 lg:px-16 2xl:px-24 mx-auto ">
          <div className="flex justify-between items-center h-20 lg:h-24">

            {/* Logo */}
            <a href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-7 h-7 text-gray-900" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Engineers4Humanity
                </span>
                <p className="text-xs text-primary-400 font-medium tracking-wider">Consultancy Ltd</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={`relative font-medium text-white/90 hover:text-white transition-all duration-300 group ${
                      link.highlight ? 'text-primary-400' : ''
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300 ${
                      link.highlight ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-5">
              <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm border border-white/10">
                <Search size={20} />
              </button>

              <a
                href="/contact"
                className="flex items-center space-x-3 px-8 py-3.5 bg-primary-500 hover:bg-primary-400 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-primary-500/50 hover:scale-105 text-sm tracking-wide"
              >
                <span>Request Proposal</span>
                <ArrowRight size={18} />
              </a>

              <button className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-900 transition-all shadow-md">
                <Grid3x3 size={20} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-3 text-white hover:text-primary-400 transition-colors"
            >
              {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {menuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="lg:hidden fixed top-0 right-0 h-screen w-88 bg-gray-900 shadow-2xl z-50 overflow-y-auto border-l border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Building2 className="w-9 h-9 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Engineers4Humanity</div>
                    <div className="text-xs text-primary-400">Consultancy Ltd</div>
                  </div>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 text-white">
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Links */}
              <ul className="py-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-8 py-5 text-lg font-medium transition-colors ${
                        link.highlight 
                          ? 'text-primary-400 bg-primary-500/10 border-l-4 border-primary-400' 
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="px-8 py-6 border-t border-white/10 space-y-4">
                <a href="tel:+250788123456" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+250 788 123 456</span>
                </a>
                <a href="mailto:info@e4hconsult.com" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>info@e4hconsult.com</span>
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="p-8 space-y-4 bg-gradient-to-t from-black/50 to-transparent">
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full block text-center px-8 py-5 bg-primary-500 hover:bg-primary-400 text-gray-900 font-bold rounded-full transition-all shadow-xl text-lg"
                >
                  Request a Proposal
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default NavBar;