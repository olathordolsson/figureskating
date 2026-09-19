type ToastEntry = { id: number; message: string };
type Listener = (toasts: ToastEntry[]) => void;

let toasts: ToastEntry[] = [];
let listeners: Listener[] = [];
let nextId = 0;

const notify = () => listeners.forEach((l) => l([...toasts]));

export const toastStore = {
  subscribe: (fn: Listener) => {
    listeners.push(fn);
    fn([...toasts]);
    return () => { listeners = listeners.filter((l) => l !== fn); };
  },
  error: (message: string) => {
    const id = nextId++;
    toasts = [...toasts, { id, message }];
    notify();
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
      notify();
    }, 4500);
  },
};
