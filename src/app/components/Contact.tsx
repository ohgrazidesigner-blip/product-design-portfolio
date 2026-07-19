import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="px-6 py-20 md:px-12 md:py-24 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
              Contact
            </p>

            <h2
              id="contact-title"
              className="mx-auto mb-8 max-w-4xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]"
            >
              Let’s make complex products easier to understand
              and use.
            </h2>

            <div className="mx-auto mb-12 max-w-[700px] space-y-5 text-lg leading-[1.7] text-muted-foreground">
              <p>
                I’m open to Product Designer opportunities
                involving B2B platforms, complex workflows,
                information architecture, UX/UI, and design
                systems.
              </p>

              <p>
                Based in Salvador, Brazil (UTC−3), and available
                for remote collaboration with international
                teams.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:grazycosttalm@gmail.com?subject=Product%20Design%20opportunity"
              className="group flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--premium-accent)] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[var(--premium-accent-dark)]"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              Email me
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/grazioliver/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-medium transition-all duration-300 hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)]"
            >
              <Linkedin
                aria-hidden="true"
                className="h-5 w-5"
              />
              Connect on LinkedIn
              <span className="sr-only">
                , opens in a new tab
              </span>
              <ExternalLink
                aria-hidden="true"
                className="h-4 w-4"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: "easeOut",
            }}
            className="border-t border-border pt-10"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Graziele Costa ·
              Product Designer · UX/UI & Design Systems
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}