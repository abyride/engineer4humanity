import { Home } from "lucide-react";

const Header = ({ title = "About Us", path = "About Us" }) => {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80')`,
        }}
      >
        {/* Simple Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-3 text-base md:text-lg">
          <a 
            href="/" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
          >
            Home
          </a>
          
          <span className="text-white">/</span>
          
          <span className="text-yellow-400 font-medium">
            {path}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;