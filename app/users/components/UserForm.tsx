'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, User } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface UserFormProps {
  onSubmit: (data: Omit<User, 'id'>) => void;
  trigger: React.ReactNode;
}

export default function UserForm({ onSubmit, trigger }: UserFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Omit<User, 'id'>>({
    resolver: zodResolver(userSchema),
  });

  const handleFormSubmit = (data: Omit<User, 'id'>) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register('fullName')} />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input id="mobileNumber" {...register('mobileNumber')} />
            {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber.message}</p>}
          </div>
          <div>
            <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
            <Input id="whatsappNumber" {...register('whatsappNumber')} />
            {errors.whatsappNumber && <p className="text-red-500">{errors.whatsappNumber.message}</p>}
          </div>
          <div>
            <Label htmlFor="cnicNumber">CNIC Number</Label>
            <Input id="cnicNumber" {...register('cnicNumber')} />
            {errors.cnicNumber && <p className="text-red-500">{errors.cnicNumber.message}</p>}
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={(value: string) => setValue('role', value as User['role'])}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Super Admin">Super Admin</SelectItem>
                <SelectItem value="Society Admin">Society Admin</SelectItem>
                <SelectItem value="Resident">Resident</SelectItem>
                <SelectItem value="Member">Member</SelectItem>
                <SelectItem value="Operator">Operator</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
          </div>
          <div>
            <Label htmlFor="accountStatus">Account Status</Label>
            <Select onValueChange={(value: string) => setValue('accountStatus', value as User['accountStatus'])}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            {errors.accountStatus && <p className="text-red-500">{errors.accountStatus.message}</p>}
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
