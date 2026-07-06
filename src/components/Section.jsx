import { motion } from "framer-motion";
import { fadeUp, sectionViewport, stagger } from "../lib/motion";

export function Section({ id, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
      >
        {(title || intro) && (
          <div className="mb-10 max-w-3xl md:mb-14">
            {title && (
              <motion.h2 variants={fadeUp} className="flex items-center gap-3 section-title">
                <span className="glow-dot" aria-hidden="true" />
                {title}
              </motion.h2>
            )}
            {intro && (
              <motion.p variants={fadeUp} className="section-intro">
                {intro}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
