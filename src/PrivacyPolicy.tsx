
import { Link } from 'react-router-dom';
import logo from './assets/Logo.png';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <Link to="/" className="inline-flex items-center justify-center mb-6 hover:scale-105 transition-transform">
            <img src={logo} alt="Velva Note Logo" className="w-16 h-16 rounded-2xl shadow-xl shadow-blue-500/20 object-cover" />
          </Link>
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Effective Date: May 2026</p>
        </div>

        <div className="bg-[#1e293b] rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to <strong>Velva Note</strong>. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal information and details the specific device permissions required by our application to function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Account Data:</strong> We collect your email address and profile information to create and authenticate your account securely using Supabase.</li>
              <li><strong>User Content:</strong> Your notes, tasks, kanban boards, and uploaded media are securely stored in our cloud infrastructure (Supabase) to allow synchronization across your devices and enabling collaboration features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Device Permissions Explained</h2>
            <p className="mb-4 leading-relaxed">
              To provide you with a rich, seamless experience, Velva Note requests the following device permissions. We <strong>do not</strong> use these permissions to collect data secretly or sell it to third parties.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0f172a] p-5 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg"><span className="text-blue-400 font-bold">🔒</span></div>
                  <h3 className="font-semibold text-slate-200">Biometrics</h3>
                </div>
                <p className="text-sm text-slate-400">Used strictly locally on your device for the App Lock feature to keep your notes private.</p>
              </div>
              <div className="bg-[#0f172a] p-5 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg"><span className="text-purple-400 font-bold">📷</span></div>
                  <h3 className="font-semibold text-slate-200">Camera & Media</h3>
                </div>
                <p className="text-sm text-slate-400">Required to upload profile avatars and embed images/videos directly into your rich text notes.</p>
              </div>
              <div className="bg-[#0f172a] p-5 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/10 rounded-lg"><span className="text-green-400 font-bold">🎤</span></div>
                  <h3 className="font-semibold text-slate-200">Microphone</h3>
                </div>
                <p className="text-sm text-slate-400">Used exclusively when you choose to record and embed voice memos inside your notes.</p>
              </div>
              <div className="bg-[#0f172a] p-5 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Alarms & Reminders</h3>
                </div>
                <p className="text-sm text-slate-400">
                  <strong>Why we need it:</strong> To trigger insistent alarms and push notifications precisely when your scheduled events begin, ensuring you never miss an important task.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security & Third Parties</h2>
            <p className="leading-relaxed mb-4">
              Your data is stored securely using industry-standard encryption provided by our backend partner, Supabase. We implement strict Row Level Security (RLS) policies ensuring that only you, and the users you explicitly invite, can access your personal folders and items.
            </p>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us via our developer portal or support email provided on the Google Play Store page.
            </p>
          </section>
        </div>
        
        <div className="text-center mt-12 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Velva Note. All rights reserved.
        </div>
      </div>
    </div>
  );
}
