import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/RevealText";
import Seo from "@/components/Seo";
import { MENU } from "@/data/menu";
import { easeOut, fadeUp, stagger } from "@/lib/motion";
import { WirePyramid, WireRing } from "@/components/LineArt";

const Menu = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const labelY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <Layout>
      <Seo
        title="Menu — Indo-Chinese plates, wraps & chai"
        description="Our spring menu: hot & sour soups, chicken manchurian, tandoori wraps, hand-rolled rolls and the masala chai we are proud of. Forty-two dishes, one small counter."
        path="/menu"
      />
      {/* Parallax title */}
      <section ref={ref} className="relative h-[110vh] overflow-hidden bg-background">
        <div className="absolute inset-0 grain" />
        {/* Architectural wireframe — opposite corner to Home (Home cube right → Menu pyramid left) */}
        <WirePyramid side="left" top="10%" containerRef={ref} />
        <WireRing side="right" top="55%" containerRef={ref} />
        <div className="relative mx-auto grid h-screen max-w-[1600px] grid-cols-12 items-center px-6 pt-32 md:px-10">
          <motion.span
            style={{ y: labelY }}
            className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3"
          >
            The Carte<br />Spring / 2026
          </motion.span>

          <motion.h1
            style={{ y: titleY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: easeOut }}
            className="col-span-12 font-display text-[26vw] leading-[0.82] tracking-display text-ebony md:col-span-9 md:text-[16vw]"
          >
            Menu<em className="text-umber">.</em>
          </motion.h1>

          <motion.span
            style={{ y: numberY }}
            className="col-span-12 mt-10 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-12 md:text-right"
          >
            Forty-two dishes · One small counter
          </motion.span>
        </div>
      </section>

      {/* Sections */}
      <div className="relative bg-background">
        {MENU.map((section, sIdx) => (
          <MenuSectionBlock key={section.id} section={section} index={sIdx} />
        ))}
      </div>

      {/* Allergens */}
      <section className="relative border-t border-border/60 py-24 md:py-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6 px-6 md:px-10 md:gap-10">
          <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
            A Note on Allergens
          </Reveal>
          <Reveal as="p" className="col-span-12 font-display text-2xl leading-snug text-ebony md:col-span-9 md:text-3xl">
            Please tell us if you have allergies. Our small kitchen handles
            dairy, nuts, gluten and sesame across most surfaces — we will
            always do our best to accommodate, but we will not promise what
            we cannot keep.
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

const MenuSectionBlock = ({
  section,
  index,
}: {
  section: typeof MENU[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelY = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <section ref={ref} className="relative border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6 px-6 md:gap-10 md:px-10">
        <div className="col-span-12 md:col-span-3">
          <motion.div style={{ y: labelY }}>
            <span className="font-display text-7xl text-tan/80 md:text-8xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-graphite">
              {section.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal
            as="h2"
            className="font-display text-5xl leading-[0.95] tracking-display text-ebony md:text-7xl"
          >
            {section.title}
          </Reveal>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 divide-y divide-border/60"
          >
            {section.items.map((item) => (
              <motion.li
                key={item.name}
                variants={fadeUp}
                className="group flex items-baseline justify-between gap-6 py-5 transition-colors"
              >
                <div className="flex flex-1 items-baseline gap-4">
                  <span className="font-display text-2xl text-ebony transition-colors group-hover:text-umber md:text-3xl">
                    {item.name}
                  </span>
                  {item.note && (
                    <span className="text-[11px] uppercase tracking-eyebrow text-graphite">
                      {item.note}
                    </span>
                  )}
                </div>
                <span className="hidden flex-1 border-b border-dotted border-border md:block" />
                <span className="font-display text-xl text-graphite md:text-2xl">
                  {item.price}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
