# 🩺 PhysioVital

**Modern, multilingual website for a physiotherapy practice — built for trust, accessibility, and easy appointment requests.**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-TR%20%7C%20EN%20%7C%20DE-26A69A)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## ✨ Overview

**PhysioVital** is a custom-built website for a physiotherapy clinic, designed to make it effortless for patients to learn about the practice's services and request an appointment — without needing to create an account or share sensitive health information over insecure channels like WhatsApp.

Built by **[MCCreative Studio](https://mccreativestudio.de)** — web design & development for local businesses in the Basel / Lörrach region and beyond.

---

## 🚀 Key Features

- 🌍 **Fully multilingual** — Turkish, English, and German via `react-i18next`, so the practice can serve patients across the DE/CH border seamlessly
- 📅 **Terminanfrage (Appointment Request) System** — patients submit a request through a secure form; no login, no account needed
- 🔒 **Privacy-first architecture** — appointment data is sent through a Vercel serverless function and delivered via **Resend**, never stored or displayed publicly, respecting the sensitivity of health-related data
- 📱 **Fully responsive** — built mobile-first, so it looks great from phone to desktop
- ⚡ **Blazing fast** — powered by Vite for instant load times and smooth navigation
- 🎨 **Consistent design system** — token-based CSS architecture (`t0`–`t100` tonal scale), native CSS nesting, component-per-section structure
- 🧭 **Clear service & treatment presentation** — helping patients understand offerings before they even reach out

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Routing | React Router |
| Styling | Native CSS Nesting, custom token system |
| Internationalization | react-i18next (TR / EN / DE) |
| Appointment Requests | Vercel Serverless Function + Resend |
| Hosting | Vercel |

---

## 📂 Project Structure

```
physiovital/
├── public/
│   └── locales/          # i18next translation files (tr, en, de)
├── src/
│   ├── components/       # Component-per-section architecture
│   ├── pages/
│   ├── api/               # Vercel serverless functions (Terminanfrage handler)
│   ├── styles/            # Design tokens & global CSS
│   └── App.jsx
├── .env.example
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/physiovital.git
cd physiovital

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your Resend API key and target email address

# 4. Run the dev server
npm run dev
```

### Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key for sending appointment request emails via Resend |
| `NOTIFY_EMAIL` | Practice's inbox address for incoming appointment requests |

---

## 🌐 Live Demo

🔗 [physiovital.mccreativestudio.de](https://mccreativestudio.de) *(update with the live project URL)*

---

## 📸 Screenshots

*(Add screenshots of the homepage, services page, and appointment request form here for maximum visual impact)*

---

## 🧭 Roadmap

- [ ] Admin dashboard for the practice to manage requests internally (auth-protected)
- [ ] SMS/email confirmation flow for patients
- [ ] Blog/content section for treatment guides
- [ ] Google Maps integration for the practice location

---

## 👤 About

Designed & developed by **Musa Çekçen** — founder of **MCCreative Studio**, building modern, conversion-focused websites for hairdressers, markets, butchers, home-care doctors, and other local businesses in the Basel–Lörrach region and beyond.

📧 [musa@mccreativestudio.de](mailto:musa@mccreativestudio.de) · 🌐 [mccreativestudio.de](https://mccreativestudio.de)

---

## 📄 License

This project is licensed under the MIT License