/**
 * emailService.js
 * ─────────────────────────────────────────────────────────
 * Centralised EmailJS service for TantraKod.
 * Uses EmailJS browser SDK to send contact form submissions directly from the browser.
 *
 * Configuration:
 * - Public Key: VITE_EMAILJS_PUBLIC_KEY (from .env)
 * - Service ID: VITE_EMAILJS_SERVICE_ID || 'service_tantrakod'
 * - Template ID: VITE_EMAILJS_TEMPLATE_ID || 'template_xit8sqw'
 */

import emailjs from '@emailjs/browser';

/* ── Config pulled from Vite env with fallback to TantraKod defaults ── */
const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tantrakod';
const TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xit8sqw';

/**
 * Initialise EmailJS with the public key if configured.
 * Called from main.jsx before React DOM mounts.
 */
export function initEmailJS() {
  if (!PUBLIC_KEY) {
    console.warn(
      '[EmailJS] VITE_EMAILJS_PUBLIC_KEY is not set in .env. ' +
      'Add VITE_EMAILJS_PUBLIC_KEY to your .env file to enable live email delivery.'
    );
    return;
  }
  emailjs.init({ publicKey: PUBLIC_KEY });
}

/**
 * Send a contact form email via EmailJS.
 *
 * @param {{ name: string, email: string, subject: string, message: string }} params
 * @returns {Promise<void>}
 */
export async function sendContactEmail({ name, email, subject, message }) {
  if (!PUBLIC_KEY) {
    // If public key is not configured, simulate delay and warn
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.warn('[EmailJS] Simulated submission: VITE_EMAILJS_PUBLIC_KEY is missing.');
    return;
  }

  const templateParams = {
    from_name:      name.trim(),
    from_email:     email.trim().toLowerCase(),
    subject:        subject.trim(),
    message:        message.trim(),
    to_email:       'tantrakod.official@gmail.com',
    submitted_date: new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date()),
  };

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

  if (response.status !== 200) {
    throw new Error(`EmailJS returned status ${response.status}: ${response.text}`);
  }
}
