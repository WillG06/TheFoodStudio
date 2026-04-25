import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/RevealText";
import Seo from "@/components/Seo";
import { REVIEWS } from "@/data/reviews";
import { easeOut, fadeUp, staggerSlow } from "@/lib/motion";

const Reviews = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <Layout>
      <Seo
        title="Reviews — kind words from Birmingham"
        description="Read recent guest reviews of The Food Studio on Aston Street, Birmingham. Indo-Chinese plates, hand-rolled wraps, and the chai we are proud of. 4.9 stars across 30 reviews."
        path="/reviews"
      />

      {/* Hero */}
      <section ref={ref} className="relative pt-40 md:pt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-12 gap-6 md:gap-10"
          >
            <motion.span
              variants={fadeUp}
              className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3"
            >
              Reviews — Vol. 01<br />30 voices · 4.9 ★
            </motion.span>
            <motion.h1
              style={{ y: titleY }}
              variants={fadeUp}
              className="col-span-12 font-display text-[18vw] leading-[0.85] tracking-display text-ebony md:col-span-9 md:text-[11vw]"
            >
              Kind words,<br /><em className="text-umber">freely given.</em>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Featured pull quote */}
      <section className="relative mt-32 md:mt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-10">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              §00 — Editor's pick
            </Reveal>
            <Reveal
              as="blockquote"
              className="col-span-12 max-w-5xl font-display text-4xl leading-[1.1] tracking-display text-ebony md:col-span-9 md:text-7xl md:leading-[1.05]"
            >
              "The owner even gives food to the homeless.
              <em className="text-umber"> What a blessed place it is."</em>
            </Reveal>
            <Reveal as="p" className="col-span-12 mt-2 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-9 md:col-start-4">
              — ZeeLuxe Hair Care · Google
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews list — magazine style */}
      <section className="relative mt-32 md:mt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          {REVIEWS.map((r, i) => (
            <article
              key={r.author}
              className="grid grid-cols-12 gap-6 border-t border-border/60 py-16 md:gap-10 md:py-24"
            >
              <Reveal as="div" className="col-span-12 md:col-span-3">
                <span className="font-display text-6xl text-tan/70 md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-graphite">
                  {r.date}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-eyebrow text-graphite">
                  {"★".repeat(r.rating)}
                </p>
              </Reveal>

              <div className="col-span-12 md:col-span-9">
                <Reveal
                  as="blockquote"
                  className="font-display text-3xl leading-[1.2] tracking-display text-ebony md:text-5xl md:leading-[1.15]"
                >
                  "{r.quote}"
                </Reveal>
                <Reveal as="div" className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl text-ebony">{r.author}</p>
                    {r.badge && (
                      <p className="mt-1 text-[11px] uppercase tracking-eyebrow text-graphite">
                        {r.badge}
                      </p>
                    )}
                  </div>
                  {r.tags && (
                    <div className="flex flex-wrap gap-3">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-eyebrow text-umber"
                        >
                          · {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-32 border-t border-border/60 py-24 md:mt-40 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal as="span" className="text-[11px] uppercase tracking-eyebrow text-graphite">
            Leave your own
          </Reveal>
          <Reveal
            as="h2"
            className="mt-8 max-w-5xl font-display text-5xl leading-[0.95] tracking-display text-ebony md:text-8xl"
          >
            Eat first.<br /><em className="text-umber">Write later.</em>
          </Reveal>
          <Reveal as="div" className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="https://www.google.com/maps/place/68+Aston+St,+Birmingham+B4+7DF"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-4 border-b border-ebony pb-2 text-sm uppercase tracking-[0.2em] text-ebony"
            >
              <span>Write a review on Google</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.5, ease: easeOut }}
                aria-hidden
              >
                →
              </motion.span>
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
