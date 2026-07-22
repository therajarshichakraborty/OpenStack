'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<'checking...' | 'healthy' | 'unreachable'>('checking...');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
      .then((r) => r.json())
      .then((data) => {
        // Assumes API returns { status: 'healthy' } or similar
        setStatus(data.status === 'ok' || data.status === 'healthy' ? 'healthy' : 'unreachable');
      })
      .catch(() => setStatus('unreachable'));
  }, []);

  // Dynamic styling based on API health state
  const statusConfig = {
    'checking...': {
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      ping: 'bg-amber-400',
      label: 'Checking Connection',
    },
    healthy: {
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      ping: 'bg-emerald-400',
      label: 'Operational',
    },
    unreachable: {
      color: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
      ping: 'bg-rose-400',
      label: 'Unreachable',
    },
  };

  const currentStatus = statusConfig[status] || statusConfig['unreachable'];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-slate-50 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      {/* Main Container */}
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-slate-700">
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
              OpenStack
            </h1>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              Infrastructure Control
            </p>
          </div>
          
          {/* Logo Placeholder Badge */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 font-bold text-indigo-400 border border-indigo-500/20">
            OS
          </div>
        </div>

        {/* Status Body Section */}
        <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-950/40 p-4 border border-slate-900">
          <span className="text-sm font-medium text-slate-400">System Status</span>
          
          {/* Dynamic Status Badge */}
          <div className={`flex items-center gap-2.5 rounded-full border px-3 py-1 text-xs font-semibold ${currentStatus.color}`}>
            <span className="relative flex h-2 w-2">
              {status === 'checking...' || status === 'healthy' ? (
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${currentStatus.ping}`} />
              ) : null}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${currentStatus.ping}`} />
            </span>
            {currentStatus.label}
          </div>
        </div>

        {/* Footer Detail */}
        <p className="mt-4 text-center text-xs text-slate-600">
          Refreshes automatically on page reload.
        </p>
      </div>
    </main>
  );
}
