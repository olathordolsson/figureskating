import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { useStore } from '../store/useStore';

const IS_MAGIC_LINK_LANDING = typeof window !== 'undefined' && (
  window.location.hash.includes('type=magiclink') ||
  window.location.hash.includes('type=recovery') ||
  window.location.hash.includes('type=signup')
);

function isMagicLinkToken(accessToken: string): boolean {
  try {
    const base64 = accessToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(base64));
    return payload.amr?.some((m: { method: string }) => m.method === 'otp') ?? false;
  } catch {
    return false;
  }
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);

  const fetchVerified = async (userId: string) => {
    const { data } = await supabase.from('profiles').select('email_verified').eq('id', userId).single();
    setEmailVerified(data?.email_verified ?? false);
  };

  const markVerified = async (userId: string) => {
    await supabase.from('profiles').update({ email_verified: true }).eq('id', userId);
    setEmailVerified(true);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const u = data.session?.user ?? null;
      setUser(u);
      if (u) {
        useStore.getState().loadUserData(u.id);
        IS_MAGIC_LINK_LANDING ? markVerified(u.id) : fetchVerified(u.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      const u = session?.user ?? null;
      setUser(u);

      if (!u) {
        setEmailVerified(false);
        useStore.getState().clearUserData();
        return;
      }

      if (event === 'SIGNED_IN') {
        useStore.getState().clearAuthPrompt();
        await useStore.getState().loadUserData(u.id);
        const isMagic = IS_MAGIC_LINK_LANDING || isMagicLinkToken(session!.access_token);
        isMagic ? markVerified(u.id) : fetchVerified(u.id);
      } else if (event !== 'INITIAL_SESSION') {
        fetchVerified(u.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading, emailVerified };
}
