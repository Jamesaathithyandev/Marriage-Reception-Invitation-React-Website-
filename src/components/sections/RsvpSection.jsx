import React, { useState } from 'react';

/**
 * RsvpSection — Royal RSVP Form
 *
 * Collects guest details and submits to Google Sheets via
 * the deployed Google Apps Script Web App endpoint.
 */

// ─── Paste your deployed Apps Script Web App URL here ───────────────────────
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkscVuG12rTIiIYeLq662MO9Fb6iHX0M3qze1Yx08gZr5gPkkRlp6yOuUkoDjqO0s6fw/exec';
// ────────────────────────────────────────────────────────────────────────────

const EVENTS = [
  { id: 'reception', label: 'Wedding Reception', date: 'Sun, 25th Oct · 6:30 PM onwards', dot: '#C6A66B', tag: 'Grand Banquet' },
];

const initialForm = {
  name: '',
  phone: '',
  guests: '1',
  events: ['reception'],
  attending: true,
};

export function RsvpSection() {
  const [form, setForm]       = useState(initialForm);
  const [status, setStatus]   = useState(null); // null | 'submitting' | 'success' | 'declined' | 'error'
  const [error, setError]     = useState('');

  /* ─── Field Handlers ─────────────────────────────────────── */
  const handleField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEvent = (id) => {
    setForm((prev) => ({
      ...prev,
      events: prev.events.includes(id)
        ? prev.events.filter((e) => e !== id)
        : [...prev.events, id],
    }));
  };

  /* ─── Submit ─────────────────────────────────────────────── */
  const handleSubmit = async (attending) => {
    if (!attending) {
      setStatus('declined');
      return;
    }

    // Validate
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!form.phone.trim()) { setError('Please enter your phone number.'); return; }
    if (form.events.length === 0) { setError('Please select at least one event you\'ll attend.'); return; }
    setError('');
    setStatus('submitting');

    const payload = {
      name:      form.name.trim(),
      phone:     form.phone.trim(),
      guests:    form.guests,
      events:    form.events.join(', '),
      attending: 'Yes',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      // GET with URL params is the most reliable approach for Apps Script (avoids no-cors body issues)
      const params = new URLSearchParams(payload).toString();
      await fetch(`${APPS_SCRIPT_URL}?${params}`, {
        method: 'GET',
        mode: 'no-cors',
      });
      setStatus('success');
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
      setStatus(null);
    }
  };


  const handleReset = () => {
    setForm(initialForm);
    setStatus(null);
    setError('');
  };

  /* ─── Render ─────────────────────────────────────────────── */
  return (
    <section
      id="rsvp"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden text-center"
      aria-label="RSVP Form"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-gradient-to-b from-gold-champagne/18 via-transparent to-emerald-deep/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.16]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-xs sm:text-sm tracking-monumental text-gold-deep uppercase font-bold">
              Sacred Attendance
            </span>
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-palace-green font-semibold tracking-wide">
            Are You Attending The Reception?
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-green/90 mt-2.5 max-w-lg mx-auto leading-relaxed">
            Kindly fill in your details below so we can welcome you with joy on{' '}
            <strong className="font-semibold text-palace-green">Sunday, 25th October 2026</strong>.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="h-[0.5px] w-28 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          </div>
        </div>

        {/* ── RSVP Card ───────────────────────────────────────── */}
        <div className="w-full max-w-xl border border-gold/45 rounded-3xl p-1 bg-gradient-to-b from-gold/25 via-gold/10 to-gold/20 shadow-palace-elevation transition-all duration-500">
          <div className="relative border border-gold/25 rounded-2xl px-6 sm:px-9 py-9 sm:py-11 bg-ivory-light/95 overflow-hidden">
            <div className="absolute inset-0 jali-dense opacity-[0.035] pointer-events-none" />

            {/* ── STATE: FORM ──────────────────────────────────── */}
            {status === null && (
              <div className="space-y-7 text-left">
                <div className="text-center">
                  <h3 className="font-display text-2xl sm:text-3xl text-palace-green font-normal">
                    Let Us Know You're Coming!
                  </h3>
                  <p className="font-serif text-sm sm:text-base text-palace-green/70 mt-1">
                    Fill in your details to confirm your presence at the Reception.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-caps text-[10px] tracking-monumental text-gold-deep uppercase font-bold block">
                    Full Name *
                  </label>
                  <input
                    id="rsvp-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleField}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gold/40 bg-ivory text-palace-green font-serif text-sm placeholder:text-palace-green/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="font-caps text-[10px] tracking-monumental text-gold-deep uppercase font-bold block">
                    Phone Number *
                  </label>
                  <input
                    id="rsvp-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleField}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gold/40 bg-ivory text-palace-green font-serif text-sm placeholder:text-palace-green/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all duration-200"
                  />
                </div>

                {/* Number of Guests */}
                <div className="space-y-1.5">
                  <label className="font-caps text-[10px] tracking-monumental text-gold-deep uppercase font-bold block">
                    Number of Guests (including yourself) *
                  </label>
                  <select
                    id="rsvp-guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleField}
                    className="w-full px-4 py-3 rounded-xl border border-gold/40 bg-ivory text-palace-green font-serif text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all duration-200 cursor-pointer"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                      <option key={n} value={String(n)}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                {/* Events */}
                <div className="space-y-2">
                  <label className="font-caps text-[10px] tracking-monumental text-gold-deep uppercase font-bold block">
                    Attending Event
                  </label>
                  <div className="space-y-2">
                    {EVENTS.map((ev) => {
                      const checked = form.events.includes(ev.id);
                      return (
                        <button
                          key={ev.id}
                          type="button"
                          onClick={() => toggleEvent(ev.id)}
                          className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl border transition-all duration-200 text-left cursor-pointer ${
                            checked
                              ? 'border-gold bg-emerald-deep/10 shadow-sm'
                              : 'border-gold/30 bg-ivory hover:border-gold/60 hover:bg-gold/5'
                          }`}
                        >
                          {/* Checkbox */}
                          <div className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                            checked ? 'border-gold bg-emerald-deep' : 'border-gold/40 bg-transparent'
                          }`}>
                            {checked && (
                              <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5">
                                <path d="M1 5L4.5 8.5L11 1.5" stroke="#D8BE8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-caps text-xs tracking-wider font-bold uppercase ${checked ? 'text-palace-green' : 'text-palace-green/70'}`}>
                              {ev.label}
                            </p>
                            <p className="font-serif text-[11px] text-palace-green/55 mt-0.5">
                              {ev.date}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p className="font-serif text-xs text-red-600/80 text-center bg-red-50 border border-red-200/60 rounded-xl px-4 py-2.5">
                    {error}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
                  <button
                    onClick={() => handleSubmit(true)}
                    className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-deep border border-gold/80 shadow-gold-glow hover:shadow-[0_0_24px_rgba(198,166,107,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
                    aria-label="Confirm attendance"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-champagne/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span className="text-gold text-lg">✦</span>
                      <span className="font-caps text-sm sm:text-base tracking-royal font-bold text-gold-champagne uppercase drop-shadow-sm whitespace-nowrap">
                        Yes, Count Me In!
                      </span>
                      <span className="text-gold text-lg">✦</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSubmit(false)}
                    className="w-full sm:w-auto px-6 sm:px-7 py-4 rounded-xl border border-gold/50 bg-ivory/80 hover:bg-gold/10 text-palace-green/85 hover:text-palace-green shadow-sm hover:border-gold/80 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 cursor-pointer font-caps text-sm sm:text-base tracking-wider font-bold uppercase whitespace-nowrap"
                    aria-label="Cannot attend"
                  >
                    Cannot Attend
                  </button>
                </div>
              </div>
            )}

            {/* ── STATE: SUBMITTING ─────────────────────────────── */}
            {status === 'submitting' && (
              <div className="flex flex-col items-center justify-center gap-5 py-8">
                <div className="w-12 h-12 rounded-full border-4 border-gold/30 border-t-gold animate-spin" />
                <p className="font-caps text-sm tracking-wider text-palace-green/70 uppercase">
                  Registering your attendance…
                </p>
              </div>
            )}

            {/* ── STATE: SUCCESS ────────────────────────────────── */}
            {status === 'success' && (
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/60 bg-emerald-deep/10 text-emerald-deep shadow-sm">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold-deep flex-shrink-0">
                    <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-caps text-xs tracking-monumental font-bold uppercase text-emerald-deep">
                    RSVP Confirmed!
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-3xl sm:text-4xl text-gold-foil font-semibold tracking-wide">
                    Thank You, {form.name.split(' ')[0]}!
                  </h3>
                  <p className="font-script text-2xl sm:text-3xl text-palace-green leading-relaxed font-medium">
                    "Your presence will make our wedding day truly memorable."
                  </p>
                  <p className="font-serif text-sm sm:text-base text-palace-green/85 max-w-md mx-auto leading-relaxed pt-1.5">
                    We eagerly await welcoming you to our Wedding Reception in Bengaluru on{' '}
                    <span className="font-semibold text-palace-green">Sunday, 25th October 2026</span>.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-display text-xl sm:text-2xl text-gold-deep font-semibold">
                    Vinay <span className="text-palace-green font-script text-2xl">&amp;</span> Kishma
                  </p>
                  <p className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold mt-1">
                    Together with Both Families
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/20 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="text-xs font-caps tracking-wider uppercase text-gold-deep hover:text-palace-green underline decoration-gold/40 hover:decoration-gold transition-colors duration-200 cursor-pointer font-semibold"
                  >
                    Update Response
                  </button>
                </div>
              </div>
            )}

            {/* ── STATE: DECLINED ───────────────────────────────── */}
            {status === 'declined' && (
              <div className="space-y-5 text-center">
                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl text-palace-green font-normal">
                    Thank You For Your Love From Afar
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-palace-green/75 max-w-md mx-auto leading-relaxed">
                    "Though distance may keep us apart, your prayers and warm blessings will be felt in our hearts throughout our special day."
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/20 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-full border border-gold/50 bg-ivory text-palace-green text-xs font-caps tracking-wider uppercase hover:bg-gold/10 transition-all duration-300 cursor-pointer"
                  >
                    Change to "Attending"
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default RsvpSection;
