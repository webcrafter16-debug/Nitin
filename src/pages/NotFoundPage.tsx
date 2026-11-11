import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Layers } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-black text-2xl mx-auto shadow-inner">
          404
        </div>
        
        <h1 className="text-3xl font-extrabold text-white font-display tracking-tight">
          Page Not Located
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          The requested URL path does not exist on WebCraft Pro. It may have moved or was entered incorrectly.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Agency Home</span>
          </Link>
          <Link
            to="/portfolio"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-lg text-xs transition-colors flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Browse Portfolio Demos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
