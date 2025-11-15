import { Link } from "react-router";
const Navbar: React.FC = () => {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-xl border border-slate-200 flex items-center justify-center bg-slate-50">
              <span className="text-xs font-semibold tracking-[0.16em] text-slate-900">BP</span>
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
              BrandPulse
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="#docs" className="text-slate-600 hover:text-slate-900">Documentation</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4 text-sm">
            <Link to={'/signin'} className="text-slate-600 hover:text-slate-900">Sign in</Link>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/80
              px-4 py-1.5 text-sm font-medium text-white bg-slate-900/95 hover:bg-black"
            >
              Get Started Free
            </a>
          </div>

          <button className="md:hidden border border-slate-300 px-3 py-1.5 rounded-full text-xs">
            Menu
          </button>
        </div>
      </div>
    </header >
  );
};

export default Navbar;
