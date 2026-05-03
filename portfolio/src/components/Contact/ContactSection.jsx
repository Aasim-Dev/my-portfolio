import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import {
  enqueue,
  flushQueue,
  startBackgroundProcessor
} from '../../lib/contactQueue';

const EMAIL = 'sanandwalaasim87@gmail.com';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const SOCIALS = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/aasim-sanandwala-b09a29221/' },
  { label: 'GitHub ↗', href: 'https://github.com/Aasim-Dev/' }
];

// Floating-label field. Label sits inside the input, slides up + shrinks
// on focus or when there's a value. Works for input + textarea via `as`.
const FloatingField = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  minLength,
  rows,
  value,
  onChange,
  as = 'input'
}) => {
  const Tag = as;
  const isFilled = value && value.length > 0;
  return (
    <div className="relative border-b hairline focus-within:border-stone-900 dark:focus-within:border-stone-100 transition-colors">
      <Tag
        id={id}
        name={name}
        type={as === 'input' ? type : undefined}
        required={required}
        minLength={minLength}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full bg-transparent ${
          as === 'textarea' ? 'pt-7 pb-2 resize-none' : 'pt-7 pb-2'
        } text-base sm:text-lg text-stone-900 dark:text-stone-50 focus:outline-none placeholder:text-transparent`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 origin-left transition-all duration-200
          ${isFilled
            ? 'top-1 text-[10px] tracking-widest uppercase text-stone-500 font-mono'
            : 'top-7 text-base sm:text-lg text-stone-400 font-sans tracking-normal normal-case'}
          peer-focus:top-1 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-stone-500 peer-focus:font-mono peer-focus:normal-case`}
      >
        {label}
      </label>
    </div>
  );
};

const SuccessState = ({ name, onReset }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="font-mono text-xs uppercase tracking-widest text-accent flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4" />
      Message received
    </div>
    <p className="font-display tracking-editorial text-stone-900 dark:text-stone-50 text-3xl sm:text-4xl leading-tight">
      Thanks{name ? `, ${name.split(' ')[0]}` : ''}
      <span className="text-accent">.</span>
      <br />
      <span className="text-stone-500 dark:text-stone-400 italic">
        I&rsquo;ll be in touch soon.
      </span>
    </p>
    <p className="text-sm text-stone-600 dark:text-stone-400 max-w-sm">
      Your message is safe with me — I read every one personally and reply
      within 24–48 hours.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
    >
      ← Send another
    </button>
  </motion.div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stop = startBackgroundProcessor(API_URL);
    return stop;
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    enqueue(formData);
    flushQueue(API_URL).catch(() => {});

    await new Promise((r) => setTimeout(r, 450));

    const submittedName = formData.name;
    setFormData({ name: '', email: '', message: '' });
    setSent(true);
    setLoading(false);
    // keep submittedName around in state for the success greeting
    setFormData((prev) => ({ ...prev, name: submittedName }));
  };

  return (
    <section
      id="contact"
      className="relative bg-stone-100 dark:bg-stone-900 py-24 sm:py-36 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            'radial-gradient(ellipse, rgba(52,211,153,0.15), transparent 60%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-x-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-stone-400" />
              Contact
            </div>

            <h2 className="font-display tracking-editorial text-stone-900 dark:text-stone-50 text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Let&rsquo;s build
              <br />
              <span className="italic text-accent">something</span> that
              <br />
              actually ships.
            </h2>

            <p className="mt-10 text-lg text-stone-600 dark:text-stone-400 max-w-md leading-relaxed">
              Recruiting brief, project handoff, or just hello. Every email
              gets read. Most get a reply within 24 hours.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group mt-12 inline-flex items-baseline gap-3 font-display tracking-editorial text-stone-900 dark:text-stone-50 text-3xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] leading-[1.05] underline decoration-stone-300 dark:decoration-stone-700 underline-offset-[10px] decoration-2 hover:decoration-accent hover:text-accent transition-colors break-all sm:break-normal"
            >
              {EMAIL}
              <ArrowUpRight className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex-shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-stone-500">
              {SOCIALS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {s.label}
                </a>
              ))}
              <span className="text-stone-400 dark:text-stone-600">
                Ahmedabad, Gujarat, IN · UTC+5:30
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 lg:pt-4"
          >
            {sent ? (
              <SuccessState
                name={formData.name}
                onReset={() => {
                  setSent(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="font-mono text-xs uppercase tracking-widest text-stone-500">
                  Or use the form ↓
                </div>

                <FloatingField
                  id="field-name"
                  name="name"
                  label="Your name"
                  required
                  minLength={2}
                  value={formData.name}
                  onChange={handleChange}
                />

                <FloatingField
                  id="field-email"
                  name="email"
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <FloatingField
                  as="textarea"
                  id="field-message"
                  name="message"
                  label="Message"
                  required
                  minLength={10}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 mt-2 px-6 py-3 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-full font-medium text-sm hover:bg-accent hover:text-accent-ink dark:hover:bg-accent dark:hover:text-accent-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
