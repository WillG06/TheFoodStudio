import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/RevealText";
import Seo from "@/components/Seo";
import LogoMark from "@/components/LogoMark";
import SideOrnament from "@/components/SideOrnament";
import { WireCube, WireRing, WireSphere } from "@/components/LineArt";
import { easeOut, fadeUp, staggerSlow } from "@/lib/motion";
import heroDish from "@/assets/hero-dish.jpg";
import showcase from "@/assets/showcase-dish.jpg";
import handsImg from "@/assets/hands.jpg";
import chaiImg from "@/assets/chai.jpg";
import spicesImg from "@/assets/spices.jpg";

const SIGNATURE = [
  { no: "01", name: "Chicken Manchurian", note: "Slow wok, dark sauce", price: "£10.90" },
  { no: "02", name: "Tandoori Chicken Wrap", note: "From the clay oven", price: "£6.90" },
  { no: "03", name: "Paneer Tikka", note: "Charred over flame", price: "£6.90" },
  { no: "04", name: "Masala Chai", note: "Brewed long, brewed slow", price: "£2.20" },
];

const MARQUEE = [
  "Indo-Chinese",
  "·",
  "Tandoor",
  "·",
  "Hand-rolled wraps",
  "·",
  "Slow chai",
  "·",
  "Aston Street",
  "·",
  "Birmingham",
  "·",
  "Est. Vol. 01",
  "·",
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Image gently parallaxes
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);
  // Wordmark: large under the lamp, then zooms + expands as you scroll past
  const wordmarkScale = useTransform(scrollYProgress, [0, 0.6], [1, 2.4]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const wordmarkLetter = useTransform(scrollYProgress, [0, 0.6], ["0em", "0.06em"]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1, 1, 0]);
  const tagOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <Layout>
      <Seo
        title="Indo-Chinese takeaway on Aston Street, Birmingham"
        description="A small takeaway counter on Aston Street making slow, considered Indo-Chinese food. Tandoori wraps, hand-rolled rolls and the masala chai we are proud of. Walk up or order delivery."
        path="/"
      />

      {/* HERO — minimal, single light, brand line lit beneath */}
      <section ref={heroRef} className="relative h-[140vh] overflow-hidden bg-background">
        {/* Image layer — sticks while you scroll past */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 will-change-transform"
          >
            <img
              src={heroDish}
              alt="A single warm pendant light hanging over an empty steel takeaway counter in a dark room"
              className="absolute inset-0 h-full w-full object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>

          {/* Subtle vignette + grain — no white wash */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 50%, transparent 55%, hsl(var(--background) / 0.6) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute inset-0 grain" />
          </div>

          {/* Top utility row — small wordmark + nav coords */}
          <motion.div
            style={{ opacity: tagOpacity }}
            className="absolute inset-x-0 top-28 z-20 hidden md:block"
          >
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-10">
              <span className="font-sans text-[10px] uppercase tracking-eyebrow text-foreground/55">
                N · 52.4862
              </span>
              <span className="font-sans text-[10px] uppercase tracking-eyebrow text-foreground/55">
                № 01 / 042 — Vol. 01
              </span>
            </div>
          </motion.div>

          {/* Vertical side rails */}
          <div className="pointer-events-none absolute inset-y-0 left-6 z-10 hidden flex-col justify-center md:flex">
            <span
              className="font-sans text-[10px] uppercase tracking-eyebrow text-foreground/40"
              style={{ writingMode: "vertical-rl" }}
            >
              Aston Street — Birmingham
            </span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-6 z-10 hidden flex-col items-end justify-center md:flex">
            <span
              className="font-sans text-[10px] uppercase tracking-eyebrow text-foreground/40"
              style={{ writingMode: "vertical-rl" }}
            >
              The Food Studio · Est. MMXXIV
            </span>
          </div>

          {/* THE BRAND — straight horizontal line lit beneath the lamp */}
          <motion.div
            style={{
              scale: wordmarkScale,
              y: wordmarkY,
              opacity: wordmarkOpacity,
            }}
            className="absolute inset-x-0 top-[58%] z-10 flex flex-col items-center will-change-transform"
          >
            {/* tiny mark + thin lit hairline */}
            <LogoMark className="mb-6 h-7 w-7 text-foreground/85" />
            <motion.h1
              style={{ letterSpacing: wordmarkLetter }}
              className="whitespace-nowrap font-display text-[12vw] font-medium leading-none text-foreground md:text-[7vw]"
            >
              The Food Studio
            </motion.h1>
            {/* lit hairline — glows under the lamp pool */}
            <div
              className="mt-7 h-px w-[52vw] max-w-[760px]"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, hsl(var(--tan) / 0.85) 50%, transparent 100%)",
                boxShadow: "0 0 24px hsl(var(--tan) / 0.5)",
              }}
            />
            <span className="mt-6 text-[11px] uppercase tracking-eyebrow text-foreground/65">
              Indo-Chinese · Takeaway · Birmingham
            </span>
          </motion.div>

          {/* Footer line of hero — scroll cue + meta */}
          <motion.div
            style={{ opacity: tagOpacity }}
            className="absolute inset-x-0 bottom-10 z-20"
          >
            <div className="mx-auto flex max-w-[1600px] items-end justify-between px-6 md:px-10">
              <span className="text-[10px] uppercase tracking-eyebrow text-foreground/55">
                Est. Birmingham — Vol. 01
              </span>
              <span className="text-[10px] uppercase tracking-eyebrow text-foreground/55">
                Scroll ↓
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERLAP — section bleeds up over hero image */}
      <section className="relative z-20 -mt-[18vh] bg-background">
        <SideOrnament side="left" label="§01 — A Note" top="6rem" height="80%" />
        <SideOrnament side="right" label="The Food Studio · Vol. 01" top="6rem" height="80%" />

        {/* Architectural wireframe drifting in the right margin */}
        <WireCube side="right" top="8%" />

        {/* Full-bleed faint backdrop image — runs the entire section, very low visibility */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={spicesImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
            style={{ filter: "grayscale(0.3) contrast(1.05)" }}
          />
          {/* fade top + bottom into background so it never feels like a card */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-32">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              §01 — A Note
            </Reveal>
            <Reveal
              as="p"
              className="col-span-12 font-display text-3xl leading-[1.25] text-ebony md:col-span-9 md:text-5xl md:leading-[1.18]"
            >
              We are not a restaurant. We are a takeaway — a counter, a
              tandoor, and a queue of regulars who already know what they
              want. Our food is honest: Indo-Chinese plates, hand-rolled
              wraps, and a chai we are proud of. Bagged hot, stapled shut,
              walked out the door. The owner still cooks. The owner still
              feeds whoever comes in hungry, paying or not.
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE — rolling editorial banner */}
      <section className="relative mt-32 overflow-hidden border-y border-border/60 bg-paper py-8 md:mt-48 md:py-10">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((word, i) => (
            <span
              key={i}
              className="mx-6 font-display text-5xl tracking-display text-ebony md:text-7xl"
            >
              {word === "·" ? <span className="text-umber">{word}</span> : word}
            </span>
          ))}
        </div>
      </section>

      {/* SHOWCASE — small statement piece teasing menu */}
      <section className="relative mt-32 md:mt-56">
        <SideOrnament side="left" label="§02 — From the Menu" />
        <SideOrnament side="right" label="No. 04 — Paneer" />
        <WireSphere side="left" top="20%" />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-6">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              §02 — From the Menu
            </Reveal>
            <Reveal
              as="h2"
              className="col-span-12 font-display text-6xl tracking-display text-ebony md:col-span-9 md:text-8xl"
            >
              Paneer Tikka,<br /><em className="text-umber">No. 04</em>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-6 md:mt-24 md:gap-10">
            <Reveal className="col-span-12 md:col-span-7 md:col-start-2">
              <div className="overflow-hidden">
                <motion.img
                  src={showcase}
                  alt="A foil tray of chicken manchurian on chowmein, lit single-source on black"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.6, ease: easeOut }}
                />
              </div>
            </Reveal>

            <div className="col-span-12 flex flex-col justify-end md:col-span-3 md:col-start-10">
              <Reveal as="p" className="font-display text-xl leading-snug text-ebony">
                Marinated overnight, finished over open flame. Bagged with
                burnt onion and a wedge of lime.
              </Reveal>
              <Reveal as="span" className="mt-6 text-[11px] uppercase tracking-eyebrow text-graphite">
                £6.90
              </Reveal>
              <Reveal as="div" className="mt-10">
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-ebony"
                >
                  <span className="relative">
                    Read the full menu
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ebony transition-transform duration-500 group-hover:origin-right group-hover:scale-x-0" />
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE LIST — editorial menu tease */}
      <section className="relative mt-40 md:mt-56">
        <SideOrnament side="left" label="§03 — Signatures" />
        <SideOrnament side="right" label="Four plates" />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-10">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              §03 — Signatures
            </Reveal>
            <Reveal
              as="h2"
              className="col-span-12 font-display text-5xl tracking-display text-ebony md:col-span-9 md:text-7xl"
            >
              Four plates we are<br /><em className="text-umber">known by.</em>
            </Reveal>
          </div>

          <ul className="mt-16 divide-y divide-border/60 border-y border-border/60 md:mt-24">
            {SIGNATURE.map((s, i) => (
              <Reveal
                as="li"
                key={s.no}
                delay={i * 0.05}
                className="group flex items-baseline justify-between gap-6 py-6 md:py-8"
              >
                <div className="flex flex-1 items-baseline gap-6">
                  <span className="text-[11px] uppercase tracking-eyebrow text-graphite md:w-12">{s.no}</span>
                  <span className="font-display text-3xl text-ebony transition-colors group-hover:text-umber md:text-5xl">
                    {s.name}
                  </span>
                  <span className="hidden text-[11px] uppercase tracking-eyebrow text-graphite md:inline">
                    {s.note}
                  </span>
                </div>
                <span className="font-display text-2xl text-graphite md:text-3xl">{s.price}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PHILOSOPHY — split image + text spread */}
      <section className="relative mt-40 md:mt-56">
        <SideOrnament side="left" label="§04 — Philosophy" />
        <SideOrnament side="right" label="Patience · Restraint" />
        <WireRing side="right" top="10%" />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal className="col-span-12 md:col-span-5">
              <div className="overflow-hidden">
                <motion.img
                  src={handsImg}
                  alt="Brown takeaway bags lined up on a steel counter under warm pendant lights"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.6, ease: easeOut }}
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-graphite">
                Fig. 02 — Bags lined up, mid-service.
              </p>
            </Reveal>

            <div className="col-span-12 flex flex-col justify-end md:col-span-6 md:col-start-7">
              <Reveal as="span" className="text-[11px] uppercase tracking-eyebrow text-graphite">
                §04 — Philosophy
              </Reveal>
              <Reveal
                as="p"
                className="mt-8 font-display text-3xl leading-[1.2] text-ebony md:text-4xl"
              >
                We do not chase trends. We do not cut corners. We make food the
                way our families taught us — with patience, with restraint, and
                with the radio on.
              </Reveal>
              <Reveal
                as="p"
                className="mt-10 max-w-md text-base leading-relaxed text-graphite"
              >
                Most things are made to order. The chai brews twice. The
                tandoor stays hot from ten in the morning until the last
                customer collects their bag. If you arrive late and we are
                still inside, you will be fed.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS / TESTIMONY STRIP */}
      <section className="relative mt-40 overflow-hidden border-y border-border/60 bg-paper py-20 md:mt-56 md:py-28">
        {/* low-opacity ghost image */}
        <img
          src={chaiImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute -left-24 top-1/2 w-[40vw] max-w-[600px] -translate-y-1/2 opacity-[0.08] mix-blend-screen"
        />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              §05 — In their words
            </Reveal>
            <Reveal
              as="blockquote"
              className="col-span-12 max-w-5xl font-display text-3xl leading-[1.2] text-ebony md:col-span-9 md:text-5xl md:leading-[1.15]"
            >
              "The hospitality was great, the staff were warm, and the food
              tasted like care.
              <em className="text-umber"> Birmingham has been waiting for this counter."</em>
            </Reveal>
            <Reveal as="div" className="col-span-12 mt-6 flex items-center justify-between md:col-span-9 md:col-start-4">
              <span className="text-[11px] uppercase tracking-eyebrow text-graphite">
                — Mahrukh Javeed · Local Guide
              </span>
              <Link
                to="/reviews"
                className="text-[11px] uppercase tracking-eyebrow text-ebony border-b border-ebony pb-1"
              >
                All 30 reviews →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOURS / VISIT */}
      <section className="relative mt-32 md:mt-48">
        <SideOrnament side="left" label="§06 — Hours" />
        <SideOrnament side="right" label="10am — late" />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              §06 — Hours
            </Reveal>
            <div className="col-span-12 grid grid-cols-2 gap-6 md:col-span-9 md:grid-cols-4 md:gap-10">
              {[
                { d: "Mon — Thu", h: "10:00 — 22:00" },
                { d: "Fri", h: "10:00 — 23:00" },
                { d: "Sat", h: "11:00 — 23:00" },
                { d: "Sun", h: "11:00 — 21:00" },
              ].map((row, i) => (
                <Reveal key={row.d} as="div" delay={i * 0.06}>
                  <p className="text-[11px] uppercase tracking-eyebrow text-graphite">{row.d}</p>
                  <p className="mt-3 font-display text-2xl text-ebony md:text-3xl">{row.h}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAI ASIDE — full bleed dark image */}
      <section className="relative mt-40 md:mt-56">
        <div className="relative h-[80vh] w-full overflow-hidden">
          <motion.img
            src={chaiImg}
            alt="A brass cup of masala chai under warm light, with saffron threads"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: easeOut }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
          <div className="absolute inset-0 grain" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-end px-6 pb-16 md:px-10 md:pb-24">
            <div className="grid w-full grid-cols-12 gap-6 md:gap-10">
              <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-foreground/70 md:col-span-3">
                §07 — The reason regulars return
              </Reveal>
              <Reveal
                as="h2"
                className="col-span-12 font-display text-5xl leading-[0.95] tracking-display text-foreground md:col-span-9 md:text-8xl"
              >
                A cup of chai,<br /><em className="text-tan">brewed twice.</em>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-32 md:mt-48">
        <SideOrnament side="left" label="§08 — Visit" />
        <SideOrnament side="right" label="68 Aston Street" />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal as="span" className="text-[11px] uppercase tracking-eyebrow text-graphite">
            §08 — Visit
          </Reveal>
          <Reveal
            as="h2"
            className="mt-8 max-w-5xl font-display text-6xl leading-[0.95] tracking-display text-ebony md:text-[10vw]"
          >
            Walk up.<br /><em className="text-umber">Take it home.</em>
          </Reveal>
          <Reveal as="div" className="mt-12 flex flex-wrap items-center gap-8">
            <Link
              to="/delivery"
              className="group relative inline-flex items-center gap-4 border-b border-ebony pb-2 text-sm uppercase tracking-[0.2em] text-ebony"
            >
              <span>Order Delivery</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.5, ease: easeOut }}
                aria-hidden
              >
                →
              </motion.span>
            </Link>
            <span className="text-[11px] uppercase tracking-eyebrow text-graphite hidden md:inline">
              or — 68 Aston St, B4 7DF
            </span>
          </Reveal>
        </div>
      </section>

      <div className="h-32 md:h-56" />
    </Layout>
  );
};

interface FrostedTagProps {
  children: React.ReactNode;
  size?: "sm" | "md";
}

/**
 * Tiny frosted plate behind hero text so eyebrows + paragraphs stay legible
 * over busy image areas. Small, restrained — never card-like.
 */
const FrostedTag = ({ children, size = "sm" }: FrostedTagProps) => {
  const text =
    size === "md"
      ? "font-display text-xl leading-snug text-foreground md:text-2xl"
      : "text-[10px] uppercase tracking-eyebrow text-foreground/90";
  return (
    <span
      className={`inline-block max-w-md rounded-sm bg-background/45 px-4 py-3 backdrop-blur-md ${text}`}
    >
      {children}
    </span>
  );
};

export default Home;
