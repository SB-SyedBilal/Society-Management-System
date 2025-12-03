import * as React from "react"
import { cn } from "@/lib/utils"

interface DialogProps {
  children: React.ReactNode
}

interface DialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextType | undefined>(undefined);

const Dialog: React.FC<DialogProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a Dialog");
  }
  return context;
};

const DialogTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children, asChild }) => {
  const { setOpen } = useDialog();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => setOpen(true),
    } as any);
  }

  return (
    <button onClick={() => setOpen(true)} className="inline-flex">
      {children}
    </button>
  );
};

const DialogContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const { open, setOpen } = useDialog();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className={cn("relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6", className)}>
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <h2 className={cn("text-lg font-semibold", className)}>{children}</h2>;
};

const DialogClose: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  const { setOpen } = useDialog();
  return <button onClick={() => { setOpen(false); onClick?.(); }}>{children}</button>;
};

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose };
