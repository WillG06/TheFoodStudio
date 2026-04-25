import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Reveal from "@/components/RevealText";
import Seo from "@/components/Seo";
import { easeOut } from "@/lib/motion";
import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <Layout>
      <Seo
        title="About — a counter, a tandoor, a queue"
        description="The Food Studio opened on a quiet Tuesday in winter on Aston Street, Birmingham. A takeaway counter for Indo-Chinese plates born in Calcutta, hand-rolled wraps from the tandoor, and a rule that has not changed since the first day."
        path="/about"
      />
      <section className="relative pt-40 md:pt-56">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal as="span" className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3">
              About — Volume 01
            </Reveal>
            <Reveal
              as="h1"
              className="col-span-12 font-display text-[16vw] leading-[0.85] tracking-display text-ebony md:col-span-9 md:text-[10vw]"
            >
              A counter,<br />
              <em className="text-umber">a tandoor,</em><br />
              a queue.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial body — magazine spread */}
      <section className="relative mt-32 md:mt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5 md:col-start-2">
              <Reveal as="p" className="font-display text-xl leading-relaxed text-ebony first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-umber md:text-2xl">
                The Food Studio opened on a quiet Tuesday in winter. There was
                no announcement, no soft opening, no list of investors. Just
                the smell of cardamom drifting onto Aston Street and a hand
                painted sign in the window. The first customer ordered a
                masala chai. The second came back the next morning.
              </Reveal>

              <Reveal as="p" className="mt-10 text-base leading-relaxed text-graphite">
                We cook the food we grew up eating — Indo-Chinese plates born
                in the back streets of Calcutta, hand-rolled wraps from the
                tandoor, fritters and chaat for the in-between hours. None of
                it is fancy. All of it is honest.
              </Reveal>

              <Reveal as="p" className="mt-6 text-base leading-relaxed text-graphite">
                If you are hungry and you cannot pay, you eat anyway. That is
                the rule. It has not changed since the first Tuesday and it
                will not change tomorrow.
              </Reveal>
            </div>

            <Reveal className="col-span-12 mt-10 md:col-span-4 md:col-start-9 md:mt-0">
              <div className="overflow-hidden">
                <motion.img
                  src={aboutImg}
                  alt="A plate being finished by hand in the kitchen"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.6, ease: easeOut }}
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-graphite">
                Fig. 01 — Service, mid-afternoon.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative mt-40 md:mt-56">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal as="span" className="text-[11px] uppercase tracking-eyebrow text-graphite">
            Words from a guest, three months ago.
          </Reveal>
          <Reveal
            as="blockquote"
            className="mt-10 max-w-5xl font-display text-4xl leading-[1.1] tracking-display text-ebony md:text-7xl md:leading-[1.05]"
          >
            "The owner gives food to the homeless.
            <em className="text-umber"> What a blessed place it is."</em>
          </Reveal>
          <Reveal as="p" className="mt-8 text-[11px] uppercase tracking-eyebrow text-graphite">
            — ZeeLuxe Hair Care, Google Reviews
          </Reveal>
        </div>
      </section>

      {/* Numbered marginalia */}
      <section className="relative mt-40 py-20 md:mt-56">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 border-t border-border/60 pt-16">
            {[
              { n: "30", l: "Reviews" },
              { n: "4.9", l: "Average rating" },
              { n: "01", l: "Small room" },
              { n: "∞", l: "Cups of chai" },
            ].map((s) => (
              <Reveal key={s.l} className="col-span-6 md:col-span-3">
                <p className="font-display text-6xl tracking-display text-ebony md:text-7xl">{s.n}</p>
                <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-graphite">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
