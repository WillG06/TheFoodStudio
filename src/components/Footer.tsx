import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[11px] uppercase tracking-eyebrow text-graphite">Colophon</p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-display text-ebony md:text-7xl">
              May the fork<br />
              <em className="text-umber">be with you.</em>
            </h2>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-eyebrow text-graphite">Find us</p>
            <p className="mt-6 font-display text-2xl leading-snug text-ebony">
              68 Aston Street<br />
              Birmingham<br />
              B4 7DF
            </p>
            <p className="mt-4 text-sm text-graphite">Closed · Opens 10am</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-eyebrow text-graphite">Index</p>
            <ul className="mt-6 space-y-2 font-display text-2xl text-ebony">
              <li><Link to="/menu" className="hover:text-umber transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-umber transition-colors">About</Link></li>
              <li><Link to="/reviews" className="hover:text-umber transition-colors">Reviews</Link></li>
              <li><Link to="/delivery" className="hover:text-umber transition-colors">Delivery</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-border/60 pt-6 text-[11px] uppercase tracking-eyebrow text-graphite md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} The Food Studio</span>
          <span>4.9 / 5 · 30 reviews · Google</span>
          <span>Site by Studio Practice</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
