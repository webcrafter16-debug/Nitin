import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Dumbbell, Calendar, Clock, Trophy, Flame, CheckCircle2, ArrowRight } from 'lucide-react';

interface ClassSession {
  time: string;
  name: string;
  coach: string;
  category: 'strength' | 'conditioning' | 'recovery';
  spotsLeft: number;
}

export const FitnessDemo: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'>('Mon');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'strength' | 'conditioning' | 'recovery'>('all');
  const [claimedPass, setClaimedPass] = useState(false);

  const timetable: ClassSession[] = [
    { time: '06:00 AM', name: 'Barbell Club: Clean & Jerk Cycle', coach: 'Coach Dave Miller', category: 'strength', spotsLeft: 3 },
    { time: '07:15 AM', name: 'Hyrox Engine & Row Capacity', coach: 'Sarah Thorne', category: 'conditioning', spotsLeft: 5 },
    { time: '12:00 PM', name: 'Lunch Hour High-Volume Squat', coach: 'Coach Dave Miller', category: 'strength', spotsLeft: 2 },
    { time: '05:30 PM', name: 'MetCon Sprint Intervals', coach: 'Sarah Thorne', category: 'conditioning', spotsLeft: 4 },
    { time: '06:45 PM', name: 'Hip & Thoracic Mobility / Cold Plunge', coach: 'Dr. Leo Vance', category: 'recovery', spotsLeft: 6 },
  ];

  const filtered = timetable.filter(c => {
    if (categoryFilter === 'all') return true;
    return c.category === categoryFilter;
  });

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <DemoBanner
        conceptName="IronForge Functional Strength Gym"
        categoryLabel="High-Performance Athletic Studio"
        pageTierLabel="5-Page Fitness Architecture"
        specs={[
          'Interactive weekly class timetable with category filters',
          'Free 3-Day Guest Pass instant checkout funnel',
          'Transparent membership tiers with zero cancellation fees',
          'Coach credentials & competition achievements display'
        ]}
      />

      {/* Gym Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center font-black text-black">
            IF
          </div>
          <span className="font-display font-black text-xl tracking-tight text-white uppercase">IronForge Gym</span>
        </div>
        <button
          onClick={() => setClaimedPass(true)}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-black font-black text-xs uppercase tracking-wider rounded transition-colors"
        >
          Claim Free 3-Day Pass
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-500 font-bold">Austin, Texas Athletic Club</span>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Built For Athletes Who Don't Make Excuses
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Competition Eleiko barbells, certified Olympic lifting coaches, dedicated Hyrox turf, and contrast therapy saunas & cold plunges.
          </p>
        </div>

        {/* Timetable Section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <h2 className="text-xl font-black font-display uppercase text-white">Daily Class Timetable</h2>
            
            {/* Days Tabs */}
            <div className="flex gap-1 overflow-x-auto">
              {(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const).map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    selectedDay === day ? 'bg-orange-600 text-black' : 'bg-zinc-950 text-zinc-400 hover:text-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Sessions' },
              { id: 'strength', label: 'Strength & Barbell' },
              { id: 'conditioning', label: 'Engine & Hyrox' },
              { id: 'recovery', label: 'Mobility & Recovery' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id as any)}
                className={`px-2.5 py-1 rounded text-xs font-medium ${
                  categoryFilter === cat.id ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="space-y-3">
            {filtered.map((session, idx) => (
              <div key={idx} className="p-4 bg-zinc-950 border border-zinc-800/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-orange-500 shrink-0">{session.time}</span>
                  <div>
                    <h3 className="font-bold text-white text-sm">{session.name}</h3>
                    <span className="text-xs text-zinc-400">{session.coach}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
                  <span className="text-zinc-400 font-mono">{session.spotsLeft} spots available</span>
                  <button
                    onClick={() => setClaimedPass(true)}
                    className="px-3 py-1 bg-zinc-800 hover:bg-orange-600 hover:text-black text-white font-bold rounded transition-colors text-xs"
                  >
                    Reserve Bench
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {claimedPass && (
          <div className="p-6 bg-zinc-900 border border-orange-500 rounded-xl text-center space-y-3 max-w-md mx-auto animate-fade-in">
            <CheckCircle2 className="w-10 h-10 text-orange-500 mx-auto" />
            <h4 className="font-display font-black text-white text-lg uppercase">3-Day Pass Activated (Demo)!</h4>
            <p className="text-xs text-zinc-300">Show this confirmation screen at the front desk for immediate facility access.</p>
            <button onClick={() => setClaimedPass(false)} className="px-4 py-1.5 bg-zinc-800 rounded text-xs text-white">Done</button>
          </div>
        )}
      </main>
    </div>
  );
};
