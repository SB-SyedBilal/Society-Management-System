import { z } from 'zod';

export const userSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(10, 'Mobile number must be at least 10 digits'),
  whatsappNumber: z.string().min(10, 'WhatsApp number must be at least 10 digits'),
  cnicNumber: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, 'CNIC must be in format XXXXX-XXXXXXX-X'),
  avatar: z.string().optional(),
  role: z.enum(['Super Admin', 'Society Admin', 'Resident', 'Member', 'Operator']),
  accountStatus: z.enum(['Active', 'Inactive']),
  email: z.string().email('Invalid email'),
});

export const plotSchema = z.object({
  plotNumber: z.string().min(1, 'Plot number is required'),
  plotSize: z.string().min(1, 'Plot size is required'),
  plotDivision: z.string().min(1, 'Plot division is required'),
  plotPhase: z.string().min(1, 'Plot phase is required'),
  plotStatus: z.string().min(1, 'Plot status is required'),
  assignedTo: z.string().optional(),
  requirements: z.string().optional(),
});

export type User = z.infer<typeof userSchema> & { id: number };
export type Plot = z.infer<typeof plotSchema> & { id: number };
