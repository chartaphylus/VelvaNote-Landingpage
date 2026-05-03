# Velva Note Web

The official landing page and web application for **Velva Note**, built with modern web technologies. This project serves as the public marketing page and the deep-link handler for shared notes and folders from the Velva Note Android App.

![Velva Note Preview](/src/assets/Logo.png)

## 🚀 Features

- **Premium Landing Page:** A Notion-inspired, Vercel-like bento box design built with Tailwind CSS v4.
- **Deep Link Integration:** Seamlessly bridges the web and the Android application using `assetlinks.json`.
- **Public Note Sharing:** Acts as a secure viewer for notes shared via the mobile app, fetching directly from Supabase with RLS policies.
- **Privacy Policy Compliance:** Fully detailed permissions center to meet Google Play Store requirements.

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Routing:** React Router v6
- **Database Backend:** Supabase

## 📦 Local Development

1. **Clone the repository** (if separated from the monorepo):
   ```bash
   git clone <repo-url>
   cd VelvaNote Web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📱 Deep Linking (App Links)

This web project hosts the `public/.well-known/assetlinks.json` file required by Google to verify ownership of the domain for Android App Links.
When deployed, any link to `https://velvanote.mkbahtiar.web.id/shared/:id` will automatically open the Velva Note Android app if installed. If not, the user will be presented with a web-preview of the note.

> **Note for Deployment:** Ensure you update the SHA-256 fingerprint in the `assetlinks.json` file with your official Play Store signing key fingerprint before publishing the app.

## 📄 License
&copy; 2026 Velva Note. All rights reserved.
