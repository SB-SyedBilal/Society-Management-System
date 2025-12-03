import { LucideIcon, ShieldCheck, Users, Building2 } from "lucide-react";

export type SidebarDropdownItem = {
  label: string;
  description?: string;
  href: string;
  badge?: string;
};

export type SidebarModule = {
  title: string;
  icon: LucideIcon;
  accent: string;
  items: SidebarDropdownItem[];
};

export const sidebarModules: SidebarModule[] = [
  {
    title: "Users",
    icon: Users,
    accent: "from-blue-500/20 to-blue-500/5",
    items: [
      {
        label: "Super Admin",
        description: "Full system access",
        href: "/users?role=super-admin",
        badge: "Role",
      },
      {
        label: "Society Admin",
        description: "Phase level management",
        href: "/users?role=society-admin",
      },
      {
        label: "Resident",
        description: "Authenticated resident portal",
        href: "/users?role=resident",
      },
      {
        label: "Member",
        description: "Read-only applicants",
        href: "/users?role=member",
        badge: "No login",
      },
      {
        label: "Operator",
        description: "Support staff tooling",
        href: "/users?role=operator",
      },
    ],
  },
  {
    title: "Plots",
    icon: Building2,
    accent: "from-emerald-500/20 to-emerald-500/5",
    items: [
      {
        label: "Plot Number",
        description: "Registry by unique number",
        href: "/plots?view=number",
      },
      {
        label: "Plot Size",
        description: "Categorize by measurement",
        href: "/plots?view=size",
      },
      {
        label: "Plot Division",
        description: "Residential / Commercial",
        href: "/plots?view=division",
      },
      {
        label: "Plot Phase",
        description: "Phased development tracking",
        href: "/plots?view=phase",
      },
      {
        label: "Plot Status",
        description: "Availability + occupancy",
        href: "/plots?view=status",
      },
      {
        label: "Assigned To",
        description: "Ownership overview",
        href: "/plots?view=assigned",
      },
      {
        label: "Requirements / Rules",
        description: "Mandatory compliance",
        href: "/plots?view=requirements",
      },
    ],
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    accent: "from-amber-500/20 to-amber-500/5",
    items: [
      {
        label: "CNIC Verification",
        description: "Audit sensitive documents",
        href: "/users?view=cnic",
      },
      {
        label: "Access Policies",
        description: "Role-based access matrix",
        href: "/users?view=policies",
      },
    ],
  },
];
