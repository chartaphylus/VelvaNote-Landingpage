import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './supabase';
import logo from './assets/Logo.png';

export default function SharedItem() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadItem() {
      if (!id) return;
      try {
        // Attempt to fetch from the items table (requires RLS to allow public read if is_public = true)
        const { data, error } = await supabase
          .from('items')
          .select('title, content, type, is_public')
          .eq('id', id)
          .single();

        if (error) throw error;
        
        // Even if RLS allows it, we might want to ensure it's actually meant to be public
        if (!data.is_public) {
          throw new Error('This item is not public.');
        }

        setItem(data);
      } catch (err: any) {
        setError('Failed to load item. It might be private or deleted.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadItem();
  }, [id]);

  const handleOpenApp = () => {
    // Attempt to open the app via deep link
    window.location.href = `intent://velvanote.mkbahtiar.web.id/shared/${id}#Intent;scheme=https;package=com.mkbahtiar.velvanote;end;`;
    
    // Fallback if app is not installed
    setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.mkbahtiar.velvanote';
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-200 mb-2">Access Denied</h2>
        <p className="text-slate-400 max-w-md">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-12 pb-24 px-6">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-blue-500/10 object-cover" />
            <span className="font-semibold text-slate-300 tracking-wide text-lg">Velva Note</span>
          </div>
          
          <button 
            onClick={handleOpenApp}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-lg shadow-blue-600/20"
          >
            Open in App
          </button>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">{item.title}</h1>
        
        <div className="bg-[#1e293b] rounded-2xl p-8 border border-slate-700/50 shadow-xl">
          {item.type === 'note' ? (
            <div className="prose prose-invert prose-slate max-w-none">
              {/* Here you would parse the Quill Delta JSON into HTML. 
                  For now, we just stringify or show a placeholder since Quill parsing in React requires a library */}
              <p className="text-slate-300 leading-relaxed italic">
                Note content is visible inside the Velva Note app. Click 'Open in App' to view the full formatting.
              </p>
            </div>
          ) : item.type === 'todo' ? (
            <div className="space-y-3">
              {(item.content?.todos || []).map((todo: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${todo.isDone ? 'bg-blue-500 border-blue-500' : 'border-slate-500'}`}>
                    {todo.isDone && <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                  </div>
                  <span className={`text-lg ${todo.isDone ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                    {todo.text}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-slate-400 italic">This item type ({item.type}) requires the full app to view properly.</div>
          )}
        </div>
      </div>
    </div>
  );
}
