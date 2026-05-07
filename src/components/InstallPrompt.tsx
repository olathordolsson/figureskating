import { useEffect, useState } from 'react';
import { X, Share, Plus } from 'lucide-react';

const STORAGE_KEY = 'install-prompt-dismissed';

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as { standalone?: boolean }).standalone === true)
  );
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !/chrome|crios/i.test(navigator.userAgent);
}

function isMobile() {
  return /iphone|ipad|ipod|android/i.test(navigator.userAgent);
}

export function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event & { prompt(): void; userChoice: Promise<{ outcome: string }> } | null>(null);
  const ios = isIOS();

  useEffect(() => {
    if (isStandalone() || !isMobile() || localStorage.getItem(STORAGE_KEY)) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as Event & { prompt(): void; userChoice: Promise<{ outcome: string }> });
    };
    window.addEventListener('beforeinstallprompt', handler);

    const timer = setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setShown(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }
    }, 1500);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!ios || isStandalone() || localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => {
      setShown(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, 1500);
    return () => clearTimeout(timer);
  }, [ios]);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
    setTimeout(() => setShown(false), 400);
  };

  const install = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') dismiss();
    }
  };

  if (!shown) return null;

  // iOS: card near bottom, caret points down toward Safari share button (bottom-center)
  // Android: card near top, caret points up toward three-dots menu (top-right)
  const cardStyle: React.CSSProperties = ios
    ? {
        bottom: 'calc(env(safe-area-inset-bottom, 20px) + 16px)',
        top: 'auto',
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 400ms cubic-bezier(0.32, 0.72, 0, 1), opacity 400ms ease',
      }
    : {
        top: 'calc(env(safe-area-inset-top, 20px) + 60px)',
        bottom: 'auto',
        transform: visible ? 'translateY(0)' : 'translateY(-40px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 400ms cubic-bezier(0.32, 0.72, 0, 1), opacity 400ms ease',
      };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50"
        style={{
          background: 'rgba(0,0,0,0.5)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 400ms ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
        onClick={dismiss}
      />

      {/* Card */}
      <div
        className="fixed inset-x-0 z-50 mx-auto px-4"
        style={{ maxWidth: 480, ...cardStyle }}
      >
        {/* Caret pointing up toward Android three-dots (top-right) */}
        {!ios && (
          <div style={{
            position: 'absolute',
            top: -10,
            right: 28,
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '10px solid #fff',
          }} />
        )}

        <div
          className="rounded-2xl p-4"
          style={{ background: '#fff', boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}
        >
          {/* icon: ⛸️ — reserved */}
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-bold text-base leading-snug" style={{ color: '#141414' }}>
                Lägg till på hemskärmen
              </p>
              {ios ? (
                <p className="text-sm mt-1.5" style={{ color: '#555' }}>
                  Tryck på <Share size={13} className="inline -mt-0.5 mx-0.5" style={{ color: '#555' }} /> i webbläsaren och välj <strong style={{ color: '#141414' }}>"Lägg till på hemskärmen"</strong>
                </p>
              ) : (
                <p className="text-sm mt-1.5" style={{ color: '#555' }}>
                  Öppna menyn <strong style={{ color: '#141414' }}>⋮</strong> och välj <strong style={{ color: '#141414' }}>"Lägg till på startskärmen"</strong>
                </p>
              )}
            </div>

            <button
              onClick={dismiss}
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
              style={{ background: '#EBEBEB' }}
              aria-label="Stäng"
            >
              <X size={14} strokeWidth={2.5} style={{ color: '#555' }} />
            </button>
          </div>

          {/* Android: native install button when browser supports it */}
          {!ios && deferredPrompt && (
            <button
              onClick={install}
              className="mt-3 w-full flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-semibold"
              style={{ background: '#C8F500', color: '#141414' }}
            >
              <Plus size={16} strokeWidth={2.5} />
              Installera
            </button>
          )}
        </div>

        {/* Caret pointing down toward iOS Safari share button (bottom-center) */}
        {ios && (
          <div style={{
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid #fff',
          }} />
        )}
      </div>
    </>
  );
}
