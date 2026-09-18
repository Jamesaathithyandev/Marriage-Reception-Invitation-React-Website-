# 👑 Vinay & Kishma — Wedding Reception Invitation

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Sheets](https://img.shields.io/badge/RSVP_Backend-Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://workspace.google.com/products/sheets/)

> **A traditional Indian royal wedding reception invitation website created for Vinay & Kishma.**  
> Celebrating the grand Wedding Reception on **Sunday, 25th October 2026 at 6:30 PM onwards** at **Tranquil Wedding Venue, Bannerghatta Road, Bangalore**.

---

## 🌟 Visual Theme & Design Language

The design language reimagines centuries-old Mughal and Rajasthani palace stationery for the modern web:

* **Royal Color Palette:**
  * **Imperial Royal Purple:** (`#4A0E4E`, `#3B0764`, `#240046`, `#1B0033`) representing royal heritage, dignity, and auspicious grandeur.
  * **Antique Gold Foil:** (`#C6A66B`, `#DFC48E`, `#F5E0A0`, `#9E7E45`) evoking embossed gold leaf work.
  * **Ivory Paper Grain:** (`#FAF7F2`, `#F4EFE6`) simulating handmade royal parchment.
* **Authentic Indian Architectural Motifs:**
  * Hand-crafted cusped polylobe arches (Mughal cusped arches).
  * Intricate geometric *Jali* lattice watermarks.
  * Full-bloom and crest *Lotus* motifs (*Padma*).
  * Sacred Sanskrit typography and ceremonial headers.
* **Cinematic Experience:** Velvet drapery transitions, glowing particle halos, interactive celebration cards, and classical ambient background music.

---

## ✨ Features & Architecture

### 1. 🌺 Cinematic Loading & Sacred Blessing (`LoadingScreen`)
* **Sacred Invocation:** Features `॥ श्री गणेशाय नमः ॥` with glowing gold diamond dividers.
* **Animated Sacred Lotus Mandala:** Dual rotating concentric rings with gold-leaf accents, pulsed petal blooms, and balanced spatial geometry.
* **Audio-Unlocking Transition:** Acts as the required user interaction gesture so traditional wedding background music autoplays smoothly without browser blocking.

### 2. 🎭 Royal Velvet Curtain Reveal (`CurtainTransition`)
* Realistic cinematic velvet curtains in deep palace violet/emerald with realistic folding ripples and gold bullion tassels.
* Features a central glowing royal seal monogram (**`V & K` · 25 · 10 · 2026**).
* Parting animation unveils the reception invitation below.

### 3. 🏰 Royal Reception Invitation Card (`HeroSection`)
* Multi-layered cusped palace arch frame with dual gold hairlines and keystone finial.
* Grand couple typography with gold foil gradient rendering.
* Auspicious date and timing announcement: **Sunday, 25th October 2026 · 6:30 PM onwards**.
* Floating ambient classical background music controller (Play/Pause toggle).

### 4. 💍 The Couple & Family Lineage (`CoupleSection` & `WeddingMessageSection`)
* Dedicated royal stationery cards introducing **Vinay** and **Kishma**.
* Family heritage details, blessings from parents and elders, and traditional welcoming verses celebrating their marriage.

### 5. 🥂 The Evening Celebration (`EventsSection`)
* Features the centerpiece **Wedding Reception** card:
  * **Date & Time:** Sunday, 25th October 2026 · 6:30 PM onwards.
  * **Dress Code:** Regal Celebration Banquet Attire.
  * **Evening Highlights:** 6:30 PM Guest Welcome · 7:15 PM Royal Arrival · 7:45 PM Dinner & Toasts.

### 6. 📅 Interactive Calendar & Sync (`CalendarSection`)
* Custom-rendered royal October 2026 calendar highlighting **25th October**.
* **1-Click Sync:** Add to Google Calendar or download a standard `.ics` file for Apple Calendar, Outlook, and mobile devices.

### 7. ⏳ Live Auspicious Countdown (`CountdownSection`)
* Four palace-arched countdown kiosks (Days, Hours, Minutes, Seconds).
* Real-time countdown running to the Reception banquet on **Sunday, 25th October 2026 at 6:30 PM**.

### 8. 📍 Venue & Interactive Navigation (`LocationSection`)
* High-resolution satellite map preview of **Tranquil Wedding Venue, Bannerghatta Road, Bangalore**.
* **Get Directions:** Direct link to Google Maps with pre-configured coordinates for simple navigation.

### 9. 💌 Sacred RSVP Form & Google Sheets Integration (`RsvpSection`)
* Guest confirmation form collecting full name, phone number, guest count, and attendance status.
* Live webhook submission to Google Sheets via Google Apps Script without CORS issues.

---

## 🛠️ Tech Stack

* **Frontend:** React 18, Vite, Tailwind CSS
* **Typography:** Cinzel, Cinzel Decorative, Cormorant Garamond, Alex Brush, Montserrat
* **Deployment:** Static SPA ready for Vercel, Netlify, or custom domain
