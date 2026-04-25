import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const LINKS = [
  { to: "/", label: "Index" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/delivery", label: "Delivery" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "backdrop-blur-md bg-background/70 border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-xl tracking-display text-ebony md:text-2xl">
              The Food Studio
            </span>
            <span className="hidden text-[10px] uppercase tracking-eyebrow text-graphite md:inline">
              Birmingham
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group relative text-[11px] uppercase tracking-eyebrow transition-colors ${
                    isActive ? "text-ebony" : "text-graphite hover:text-ebony"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-umber transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <a
              href="tel:+441234567890"
              className="text-[11px] uppercase tracking-eyebrow text-ebony"
            >
              0121 — Reserve
            </a>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="block h-px w-7 bg-ebony" />
            <span className="block h-px w-5 bg-ebony" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="fixed inset-0 z-[60] bg-paper md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl text-ebony">The Food Studio</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-[11px] uppercase tracking-eyebrow text-ebony"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-12">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: easeOut }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className="block font-display text-6xl tracking-display text-ebony"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between text-[11px] uppercase tracking-eyebrow text-graphite">
              <span>68 Aston St<br />Birmingham B4 7DF</span>
              <span>4.9 / 5</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
