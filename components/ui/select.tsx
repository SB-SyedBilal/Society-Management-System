import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps {
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

interface SelectContextType {
  selectedValue: string
  setSelectedValue: (value: string) => void
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined);

const Select: React.FC<SelectProps> = ({ onValueChange, children }) => {
  const [selectedValue, setSelectedValue] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    setOpen(false)
    onValueChange?.(value)
  }

  return (
    <SelectContext.Provider value={{ selectedValue, setSelectedValue, onValueChange: handleValueChange, open, setOpen }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const useSelect = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a Select");
  }
  return context;
};

const SelectTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const { setOpen, open } = useSelect();

  return (
    <button
      type="button"
      className={cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
      onClick={() => setOpen(!open)}
    >
      {children}
      <span className="ml-2">▼</span>
    </button>
  );
};

const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { selectedValue } = useSelect();
  return <span>{selectedValue || placeholder}</span>;
};

const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useSelect();

  if (!open) return null;

  return (
    <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
      {children}
    </div>
  );
};

const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  const { onValueChange } = useSelect();

  return (
    <div
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={() => onValueChange?.(value)}
    >
      {children}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
