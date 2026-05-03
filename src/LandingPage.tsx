
import { Link } from 'react-router-dom';
import logo from './assets/Logo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg shadow-lg object-cover" />
            <span className="text-lg font-bold text-white tracking-tight">Velva Note</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.mkbahtiar.velvanote" className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block">
              Android App
            </a>
            <Link to="/privacy" className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block">
              Privacy
            </Link>
            <a 
              href="https://play.google.com/store/apps/details?id=com.mkbahtiar.velvanote" 
              className="bg-white text-black text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120%] md:w-[600px] h-[300px] bg-blue-600/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[120%] md:w-[400px] h-[300px] bg-purple-600/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-medium mb-6 md:mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Velva Note 1.0 is live
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4 md:mb-6 leading-[1.1]">
            Think better.<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
              Work faster.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 font-light px-2">
            A beautiful, Notion-inspired workspace for your mind. Combine rich text notes, kanban boards, tasks, and calendars into one seamless Android experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="https://play.google.com/store/apps/details?id=com.mkbahtiar.velvanote" 
              className="w-full sm:w-auto bg-white text-black font-semibold py-3.5 px-8 rounded-full hover:bg-slate-200 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Get for Android
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto bg-white/10 border border-white/10 text-white font-medium py-3.5 px-8 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md flex items-center justify-center"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Bento Box Features Section */}
      <section id="features" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight">Everything you need.</h2>
            <p className="text-lg md:text-xl text-slate-400">Designed to be the ultimate all-in-one productivity suite.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
          
          {/* Main Feature - Spans 2 columns */}
          <div className="md:col-span-2 md:row-span-2 bg-[#111111] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">Rich Text Editing</h3>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-md">Format your ideas with a powerful editor. Support for toggles, quotes, tables, code blocks, and media.</p>
            </div>
            {/* Abstract UI representation */}
            <div className="relative z-10 w-full min-h-[180px] bg-[#0a0a0a] border border-white/10 rounded-xl mt-6 md:mt-8 p-4 md:p-6 shadow-2xl flex flex-col gap-3 sm:gap-4">
              <div className="flex gap-2 mb-1 sm:mb-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white/10 flex items-center justify-center text-[10px] sm:text-xs font-bold">B</div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-white/10 flex items-center justify-center text-[10px] sm:text-xs italic">I</div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] sm:text-xs">&lt;/&gt;</div>
              </div>
              <div className="w-3/4 h-2 sm:h-3 bg-white/10 rounded-md"></div>
              <div className="w-full min-h-[56px] sm:min-h-[64px] bg-[#1e1e1e] border border-white/5 rounded-lg flex items-center px-3 sm:px-4 py-2 sm:py-3 text-blue-300 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-hidden">
                function helloWorld() &#123; <br/>&nbsp;&nbsp;console.log("Velva Note"); <br/>&#125;
              </div>
              <div className="w-1/2 h-2 sm:h-3 bg-white/10 rounded-md mt-1"></div>
            </div>
          </div>

          {/* Security Feature */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-colors min-h-[180px] md:min-h-0">
            <div className="absolute inset-0 bg-linear-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-red-400">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Biometric Lock</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Keep your thoughts private. Lock the app with fingerprint or facial recognition.</p>
            </div>
          </div>

          {/* Kanban Feature */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-colors min-h-[180px] md:min-h-0">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-purple-400">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Kanban Boards</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Visualize progress. Drag and drop cards across columns to manage projects flawlessly.</p>
            </div>
          </div>

          {/* Calendar Feature - Spans 2 columns */}
          <div className="md:col-span-2 bg-[#111111] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center overflow-hidden relative group hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-linear-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-full md:w-1/2 relative z-10 pr-0 md:pr-6 mb-6 md:mb-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-yellow-400">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">Events & Alarms</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Schedule your life. Set events and get <strong>insistent alarms</strong> that ring until dismissed.</p>
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-start md:justify-end">
              <div className="w-full max-w-xs min-h-[140px] sm:min-h-[160px] bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-3 sm:p-4 grid grid-cols-7 gap-1.5 sm:gap-2">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className={`rounded-md aspect-square ${i === 8 ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-white/5'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Todo List Feature */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-colors min-h-[180px] md:min-h-0">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-teal-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-teal-400">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Checklists</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Satisfying to-do lists. Check off items as you go and track your daily accomplishments.</p>
            </div>
          </div>

          {/* Deep Link Feature */}
          <div className="md:col-span-2 bg-[#111111] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-green-400">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">Share via Link</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
                  Turn any note into a public web page instantly. Generate a secure link to share your knowledge with the world.
                </p>
              </div>
              <div className="w-full md:w-64 min-h-[100px] sm:min-h-[120px] md:h-32 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-3 sm:p-4 flex flex-col justify-center items-center gap-2 sm:gap-3">
                <div className="px-3 py-2 bg-blue-600 rounded-lg text-white text-[10px] sm:text-xs font-semibold w-full text-center cursor-pointer hover:bg-blue-500 transition-colors">
                  Generate Public Link
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 truncate w-full text-center">
                  velvanote.mkbahtiar.web.id/shared/...
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center border-t border-white/10 mt-8 md:mt-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">Ready to clear your mind?</h2>
        <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 px-2">Join Velva Note today and experience the next generation of personal productivity.</p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.mkbahtiar.velvanote" 
          className="inline-flex bg-white text-black font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Download for Android
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-6 h-6 rounded-md opacity-60" />
            <span className="text-slate-500 font-medium text-sm">© {new Date().getFullYear()} Velva Note. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
