import { User } from "./types";

export type UserFieldConfig =
  | {
      name: keyof Omit<User, "id">;
      label: string;
      placeholder?: string;
      helper?: string;
      type: "text" | "email" | "tel";
    }
  | {
      name: keyof Omit<User, "id">;
      label: string;
      placeholder?: string;
      helper?: string;
      type: "select";
      options: { label: string; value: string; badge?: string; description?: string }[];
    };

export const roleOptions: { label: string; value: User["role"]; badge?: string; description?: string }[] = [
  { label: "Super Admin", value: "Super Admin", badge: "All access", description: "System-wide control" },
  { label: "Society Admin", value: "Society Admin", description: "Phase/sector operations" },
  { label: "Resident", value: "Resident", description: "Authenticated resident" },
  { label: "Member", value: "Member", badge: "No login", description: "Application-only" },
  { label: "Operator", value: "Operator", description: "Support team" },
];

export const accountStatusOptions: { label: string; value: User["accountStatus"]; badge?: string }[] = [
  { label: "Active", value: "Active", badge: "Live" },
  { label: "Inactive", value: "Inactive", badge: "Suspended" },
];

export const userFieldConfig: UserFieldConfig[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Ayesha Khan",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "ayesha@uchs.org",
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    type: "tel",
    placeholder: "+92 333 1234567",
  },
  {
    name: "whatsappNumber",
    label: "WhatsApp Number",
    type: "tel",
    placeholder: "+92 333 7654321",
  },
  {
    name: "cnicNumber",
    label: "CNIC",
    type: "text",
    placeholder: "35202-1234567-8",
    helper: "Format XXXXX-XXXXXXX-X",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: roleOptions,
  },
  {
    name: "accountStatus",
    label: "Account Status",
    type: "select",
    options: accountStatusOptions,
  },
];

export const roleInsightCards = [
  {
    title: "Residents",
    stat: "1,284",
    subtext: "Active logins this month",
    accent: "from-sky-500/15 to-sky-500/5",
  },
  {
    title: "Members",
    stat: "58",
    subtext: "Awaiting verification",
    accent: "from-amber-500/15 to-amber-500/5",
  },
  {
    title: "Operators",
    stat: "24",
    subtext: "Support coverage",
    accent: "from-emerald-500/15 to-emerald-500/5",
  },
];
