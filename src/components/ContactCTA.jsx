import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin, Youtube, Instagram, Twitter,
  MapPin, CheckCircle2, ArrowUpRight, AlertCircle, Loader2,
} from 'lucide-react';
import { useState, useCallback, useRef } from 'react';
import LogoContainer from './LogoContainer';
import { BRAND_INFO } from '../constants/brand';
import { sendContactEmail } from '../services/emailService';

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const notifVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.3 } },
  exit:   { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.2 } },
};

/* ─────────────────────────────────────────────
   Social profiles
───────────────────────────────────────────── */
const SOCIAL_PROFILES = [
  { label: 'LinkedIn',    href: 'https://linkedin.com/company/tantrakod', icon: Linkedin  },
  { label: 'Instagram',   href: 'https://instagram.com/tantrakod',        icon: Instagram },
  { label: 'X (Twitter)', href: 'https://x.com/TantraKod',               icon: Twitter   },
  { label: 'YouTube',     href: 'https://youtube.com/@TantraKod',         icon: Youtube   },
];

/* ─────────────────────────────────────────────
   Validation rules
───────────────────────────────────────────── */
const RULES = {
  name: {
    maxLength: 60,
    validate: (v) => {
      const t = v.trim();
      if (!t)         return 'Full name is required.';
      if (t.length < 2)  return 'Name must be at least 2 characters.';
      if (t.length > 60) return 'Name must be 60 characters or fewer.';
      if (/<|>|javascript:|on\w+=/i.test(t)) return 'Name contains invalid characters.';
      return null;
    },
  },
  email: {
    maxLength: 254,
    validate: (v) => {
      const t = v.trim();
      if (!t)          return 'Email address is required.';
      if (t.length > 254) return 'Email must be 254 characters or fewer.';
      /* RFC 5322 practical regex */
      const RFC = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
      if (!RFC.test(t)) return 'Please enter a valid email address.';
      return null;
    },
  },
  subject: {
    maxLength: 100,
    validate: (v) => {
      const t = v.trim();
      if (!t)           return 'Subject is required.';
      if (t.length < 5)   return 'Subject must be at least 5 characters.';
      if (t.length > 100) return 'Subject must be 100 characters or fewer.';
      if (/<|>|javascript:/i.test(t)) return 'Subject contains invalid characters.';
      return null;
    },
  },
  message: {
    maxLength: 1000,
    validate: (v) => {
      const t = v.trim();
      if (!t)             return 'Message is required.';
      if (t.length < 20)   return `Message must be at least 20 characters (${t.length}/20).`;
      if (t.length > 1000) return 'Message must be 1000 characters or fewer.';
      return null;
    },
  },
};

/* ─────────────────────────────────────────────
   Sanitise: strip HTML/script injection vectors
───────────────────────────────────────────── */
function sanitize(str) {
  return str
    .replace(/<[^>]*>/g, '')      // strip HTML tags
    .replace(/javascript:/gi, '') // strip JS protocol
    .replace(/on\w+\s*=/gi, '')   // strip event handlers
    .trim();
}

/* ─────────────────────────────────────────────
   Rate-limit: 1 submission per 60 s (sessionStorage)
───────────────────────────────────────────── */
const RATE_KEY = 'tk_last_submit';
const RATE_MS  = 60_000;

function isRateLimited() {
  try { return Date.now() - parseInt(sessionStorage.getItem(RATE_KEY) || '0', 10) < RATE_MS; }
  catch { return false; }
}
function recordSubmission() {
  try { sessionStorage.setItem(RATE_KEY, String(Date.now())); } catch { /* */ }
}

/* ─────────────────────────────────────────────
   Field wrapper — label + child input + error
───────────────────────────────────────────── */
function Field({ id, label, required, error, touched, hint, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
        {label}
        {required && <span className="text-[#F97316] ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[10px] text-[#475569]">{hint}</p>}
      <AnimatePresence mode="wait">
        {touched && error && (
          <motion.p
            key={error}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-[11px] font-medium text-red-400"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Input border class based on validation state
───────────────────────────────────────────── */
function inputCls(touched, error) {
  const base =
    'w-full px-4 py-3 rounded-xl bg-[#0F172A] border text-sm text-white placeholder-[#64748B] focus:outline-none transition-colors';
  if (touched && error)  return `${base} border-red-500/70 focus:border-red-500`;
  if (touched && !error) return `${base} border-emerald-500/60 focus:border-emerald-500`;
  return `${base} border-[#334155] focus:border-[#2563EB]`;
}

/* ══════════════════════════════════════════════
   Main component
══════════════════════════════════════════════ */
export default function ContactCTA() {
  /* Form state */
  const EMPTY = { name: '', email: '', subject: '', message: '' };
  const [fields,   setFields]   = useState(EMPTY);
  const [touched,  setTouched]  = useState({ name: false, email: false, subject: false, message: false });
  const [errors,   setErrors]   = useState({});

  /* Submission state */
  const [submitting,    setSubmitting]    = useState(false);
  const [notification,  setNotification]  = useState(null); // { type: 'success'|'error', text }

  /* Honeypot — bots fill this; humans leave it empty */
  const honeypotRef = useRef(null);

  /* ── Validation helpers ── */
  const validateField = useCallback((name, value) => RULES[name]?.validate(value) ?? null, []);

  const validateAll = useCallback(() => {
    const errs = {};
    Object.keys(RULES).forEach((k) => {
      const e = validateField(k, fields[k]);
      if (e) errs[k] = e;
    });
    return errs;
  }, [fields, validateField]);

  const isFormValid = Object.keys(RULES).every((k) => !validateField(k, fields[k]));

  /* ── Field handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const max = RULES[name]?.maxLength;
    const clipped = max ? value.slice(0, max + 10) : value;
    setFields((p) => ({ ...p, [name]: clipped }));
    if (touched[name]) setErrors((p) => ({ ...p, [name]: validateField(name, clipped) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  /* ── Notification helper ── */
  const notify = (type, text, ms = 8000) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), ms);
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Touch all fields to show any hidden errors */
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validateAll();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      notify('error', 'Please fix the errors above before submitting.');
      return;
    }

    /* Honeypot — silently reject bots */
    if (honeypotRef.current?.value) {
      notify('success', 'Your message has been received. We\'ll be in touch!');
      return;
    }

    /* Rate limiting */
    if (isRateLimited()) {
      notify('error', 'Please wait 1 minute before submitting again.');
      return;
    }

    setSubmitting(true);

    try {
      /* Sanitise before sending */
      const safe = {
        name:    sanitize(fields.name),
        email:   sanitize(fields.email),
        subject: sanitize(fields.subject),
        message: sanitize(fields.message),
      };

      await sendContactEmail(safe);

      recordSubmission();

      notify(
        'success',
        'Thank you! Your inquiry has been sent successfully.'
      );

      /* Reset form */
      setFields(EMPTY);
      setTouched({ name: false, email: false, subject: false, message: false });
      setErrors({});

    } catch (err) {
      console.error(err);

      notify(
        'error',
        'Unable to send your message. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const msgLen = fields.message.length;
  const msgMax = RULES.message.maxLength;

  /* ══════════════════════════════════════════════
     Render
  ══════════════════════════════════════════════ */
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl bg-[#0F172A] px-8 py-16 md:px-16 md:py-20"
        >
          {/* Subtle background accents */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-[40%] h-[60%] rounded-full opacity-[0.08]"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 w-[35%] h-[50%] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ══ LEFT — Info panel ══ */}
            <div>
              <motion.div variants={fadeUp} className="mb-6">
                <LogoContainer size="md" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Start a Conversation
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                {BRAND_INFO.region}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to build something{' '}
                <span className="text-[#60A5FA]">exceptional?</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-base text-[#94A3B8] leading-relaxed mb-8">
                {BRAND_INFO.description}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                {/* Social links */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                    Official Social Profiles
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {SOCIAL_PROFILES.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="p-3 rounded-xl border border-[#334155] bg-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#60A5FA] hover:bg-[#2563EB]/10 transition-all hover:-translate-y-0.5 focus-ring"
                      >
                        <s.icon className="w-5 h-5" strokeWidth={2} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ══ RIGHT — Contact Form ══ */}
            <motion.div variants={fadeUp}>

              {/* Global notification */}
              <AnimatePresence mode="wait">
                {notification && (
                  <motion.div
                    key={notification.type + notification.text}
                    variants={notifVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className={`flex items-start gap-2.5 p-4 rounded-xl mb-4 text-xs font-semibold border ${
                      notification.type === 'success'
                        ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
                        : 'bg-red-500/10 border-red-500/25 text-red-400'
                    }`}
                    role="alert"
                    aria-live="assertive"
                  >
                    {notification.type === 'success'
                      ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      : <AlertCircle  className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    }
                    <span>{notification.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="flex flex-col gap-5 bg-[#1E293B] p-6 rounded-2xl border border-[#334155]"
              >
                {/* Form header */}
                <div>
                  <p
                    className="text-sm font-bold text-white mb-0.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Send us a message
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    We&apos;ll reply within 1–2 business days.{' '}
                    Fields marked <span className="text-[#F97316]">*</span> are required.
                  </p>
                </div>

                {/* ── Honeypot (hidden from humans, visible to bots) ── */}
                <div
                  className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="tk_hp">Website</label>
                  <input
                    type="text"
                    id="tk_hp"
                    name="tk_hp"
                    ref={honeypotRef}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field id="f-name" label="Full Name" required error={errors.name} touched={touched.name}>
                    <input
                      id="f-name"
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      autoComplete="name"
                      maxLength={70}
                      className={inputCls(touched.name, errors.name)}
                      aria-invalid={!!(touched.name && errors.name)}
                      disabled={submitting}
                    />
                  </Field>

                  <Field id="f-email" label="Email Address" required error={errors.email} touched={touched.email}>
                    <input
                      id="f-email"
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@company.com"
                      autoComplete="email"
                      maxLength={260}
                      className={inputCls(touched.email, errors.email)}
                      aria-invalid={!!(touched.email && errors.email)}
                      disabled={submitting}
                    />
                  </Field>
                </div>

                {/* Subject */}
                <Field
                  id="f-subject"
                  label="Subject"
                  required
                  error={errors.subject}
                  touched={touched.subject}
                  hint="5–100 characters"
                >
                  <input
                    id="f-subject"
                    type="text"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Brief topic of your inquiry"
                    autoComplete="off"
                    maxLength={110}
                    className={inputCls(touched.subject, errors.subject)}
                    aria-invalid={!!(touched.subject && errors.subject)}
                    disabled={submitting}
                  />
                </Field>

                {/* Message + character counter */}
                <Field id="f-message" label="Message" required error={errors.message} touched={touched.message}>
                  <div className="relative">
                    <textarea
                      id="f-message"
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us about your project, goals, and timelines..."
                      rows={5}
                      maxLength={1010}
                      className={`${inputCls(touched.message, errors.message)} resize-none pb-7`}
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-describedby="msg-count"
                      disabled={submitting}
                    />
                    {/* Live character counter */}
                    <span
                      id="msg-count"
                      aria-live="polite"
                      className={`absolute bottom-2.5 right-3.5 text-[10px] font-medium tabular-nums select-none pointer-events-none ${
                        msgLen > msgMax
                          ? 'text-red-400'
                          : msgLen >= msgMax * 0.85
                          ? 'text-amber-400'
                          : 'text-[#475569]'
                      }`}
                    >
                      {msgLen}/{msgMax}
                    </span>
                  </div>
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isFormValid || submitting}
                  aria-disabled={!isFormValid || submitting}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    isFormValid && !submitting
                      ? 'bg-[#F97316] hover:bg-[#EA580C] text-white hover:shadow-lg active:scale-[0.98] cursor-pointer'
                      : 'bg-[#334155] text-[#64748B] cursor-not-allowed'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
