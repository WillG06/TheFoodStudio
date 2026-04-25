import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Reveal from "@/components/RevealText";
import Seo from "@/components/Seo";
import { easeOut, fadeUp, staggerSlow } from "@/lib/motion";

const partners = [
  { name: "Deliveroo", url: "https://deliveroo.co.uk", note: "Priority partner" },
  { name: "Uber Eats", url: "https://ubereats.com", note: "Priority partner" },
];

const ADDRESS = "68 Aston St, Birmingham B4 7DF";
const PHONE_DISPLAY = "0121 448 0612";
const PHONE_HREF = "tel:+441214480612";
const EMAIL = "hello@thefoodstudio.co.uk";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=68+Aston+St+Birmingham+B4+7DF";

const Delivery = () => {
  return (
    <Layout>
      <Seo
        title="Delivery & Contact"
        description="Order The Food Studio across Birmingham via Deliveroo or Uber Eats. Call, email, or get directions to 68 Aston Street, B4 7DF."
        path="/delivery"
      />

      <section className="relative flex flex-col pt-40 md:pt-44">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal as="span" className="text-[11px] uppercase tracking-eyebrow text-graphite">
            Delivery — anywhere within Birmingham
          </Reveal>
        </div>

        {/* Centrepiece typography */}
        <div className="relative mx-auto mt-10 w-full max-w-[1600px] px-6 md:mt-16 md:px-10">
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-12 items-end gap-6"
          >
            <motion.h1
              variants={fadeUp}
              className="col-span-12 font-display text-[18vw] leading-[0.82] tracking-display text-ebony md:text-[14vw]"
            >
              Order<br /><em className="text-umber">in.</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="col-span-12 mt-6 max-w-md font-display text-xl leading-snug text-graphite md:col-span-5 md:col-start-8 md:text-2xl"
            >
              We work with two delivery partners. Same kitchen, same hands —
              just brought to your door.
            </motion.p>
          </motion.div>

          <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border/60 pt-10 md:gap-10">
            {partners.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.4 + i * 0.15 }}
                className="group col-span-12 flex items-center justify-between border-b border-border py-8 md:col-span-6 md:py-10"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-eyebrow text-graphite">
                    0{i + 1} · {p.note}
                  </span>
                  <p className="mt-3 font-display text-5xl tracking-display text-ebony transition-colors group-hover:text-umber md:text-6xl">
                    {p.name}
                  </p>
                </div>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="font-display text-3xl text-ebony"
                  aria-hidden
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Direct contact — minimalist */}
        <div className="relative mx-auto mt-32 w-full max-w-[1600px] px-6 md:mt-48 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal
              as="span"
              className="col-span-12 text-[11px] uppercase tracking-eyebrow text-graphite md:col-span-3"
            >
              Or — speak to us directly
            </Reveal>
            <Reveal
              as="h2"
              className="col-span-12 font-display text-5xl leading-[0.95] tracking-display text-ebony md:col-span-9 md:text-7xl"
            >
              Call. Write.<br /><em className="text-umber">Walk in.</em>
            </Reveal>
          </div>

          <ul className="mt-16 divide-y divide-border/60 border-y border-border/60 md:mt-24">
            <ContactRow
              label="Phone"
              value={PHONE_DISPLAY}
              href={PHONE_HREF}
              hint="Mon — Sat · 10am to late"
            />
            <ContactRow
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
              hint="We reply the same day"
            />
            <ContactRow
              label="Directions"
              value={ADDRESS}
              href={MAPS_URL}
              hint="Open in Google Maps"
              external
            />
          </ul>
        </div>

        <div className="mx-auto mt-24 w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-eyebrow text-graphite md:flex-row md:items-center md:justify-between">
            <span>Pickup also available — {ADDRESS}</span>
            <span>Closed · Opens 10am</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ContactRowProps {
  label: string;
  value: string;
  href: string;
  hint?: string;
  external?: boolean;
}

const ContactRow = ({ label, value, href, hint, external }: ContactRowProps) => (
  <li>
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: easeOut }}
      className="group flex flex-col gap-4 py-8 md:flex-row md:items-baseline md:justify-between md:gap-10 md:py-10"
    >
      <span className="text-[11px] uppercase tracking-eyebrow text-graphite md:w-32 md:shrink-0">
        {label}
      </span>
      <span className="flex-1 font-display text-3xl leading-tight tracking-display text-ebony transition-colors group-hover:text-umber md:text-5xl">
        {value}
      </span>
      <span className="flex items-baseline gap-3 text-[11px] uppercase tracking-eyebrow text-graphite">
        {hint}
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.5, ease: easeOut }}
          aria-hidden
          className="text-ebony"
        >
          →
        </motion.span>
      </span>
    </motion.a>
  </li>
);

export default Delivery;
