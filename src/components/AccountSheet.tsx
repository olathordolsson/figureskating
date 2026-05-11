import { useState, useEffect } from 'react';
import { X, LogOut, User, CheckCircle, Mail } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface Props {
  user: SupabaseUser;
  emailVerified: boolean;
  onClose: () => void;
}

export function AccountSheet({ user, emailVerified, onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    handleClose();
  };

  const handleSendVerification = async () => {
    setLoading(true);
    try {
      await supabase.auth.signInWithOtp({
        email: user.email!,
        options: { shouldCreateUser: false, emailRedirectTo: window.location.origin },
      });
    } catch {
      // rate limited — ignore
    }
    setLoading(false);
    setVerificationSent(true);
  };

  const initial = user.email?.[0]?.toUpperCase() ?? '?';
  const joined = new Date(user.created_at).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long' });

  return (
    <div className="fixed inset-0 z-[70] flex flex-col justify-end">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.6)', opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onClick={handleClose}
      />
      <div
        className="relative flex flex-col rounded-t-3xl overflow-hidden"
        style={{
          background: '#1A1A1A',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Handle + close */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
          <div className="w-9" />
          <div className="w-10 h-1 rounded-full" style={{ background: '#333' }} />
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: '#2A2A2A' }}
          >
            <X size={17} strokeWidth={2} style={{ color: '#888' }} />
          </button>
        </div>

        <div className="px-5" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 16px) + 24px)' }}>

          {/* Avatar */}
          <div className="flex flex-col items-center py-6">
            <div className="relative mb-3">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ background: '#F05A28', color: 'white' }}
              >
                {initial}
              </div>
              {emailVerified && (
                <div
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: '#1A1A1A' }}
                >
                  <CheckCircle size={18} strokeWidth={2} style={{ color: '#4ADE80' }} />
                </div>
              )}
            </div>
            <p className="text-white font-semibold text-base">{user.email}</p>
            <p className="text-xs mt-1" style={{ color: '#555' }}>Medlem sedan {joined}</p>
          </div>

          {/* Divider */}
          <div className="h-px mb-5" style={{ background: '#2A2A2A' }} />

          {/* Actions */}
          <div className="space-y-2">

            {!emailVerified && (
              <button
                onClick={handleSendVerification}
                disabled={loading || verificationSent}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-opacity"
                style={{ background: '#111', opacity: loading || verificationSent ? 0.5 : 1 }}
              >
                <Mail size={16} strokeWidth={2} style={{ color: '#EAB308' }} />
                <div>
                  <p className="text-sm font-medium text-white">
                    {verificationSent ? 'Länk skickad' : 'Bekräfta e-post'}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#555' }}>
                    {verificationSent ? `Kolla ${user.email}` : 'Skicka bekräftelselänk'}
                  </p>
                </div>
              </button>
            )}

            <button
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left"
              style={{ background: '#111' }}
              disabled
            >
              <User size={16} strokeWidth={2} style={{ color: '#555' }} />
              <div>
                <p className="text-sm font-medium text-white">Synkronisera data</p>
                <p className="text-xs mt-0.5" style={{ color: '#555' }}>Kommer snart</p>
              </div>
            </button>

            <button
              onClick={handleLogout}
              disabled={loading}
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-opacity"
              style={{ background: '#111', opacity: loading ? 0.5 : 1 }}
            >
              <LogOut size={16} strokeWidth={2} style={{ color: '#F87171' }} />
              <p className="text-sm font-medium" style={{ color: '#F87171' }}>
                {loading ? 'Loggar ut…' : 'Logga ut'}
              </p>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
