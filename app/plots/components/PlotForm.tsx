'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { plotSchema, Plot } from '@/lib/types';
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
import { Textarea } from '@/components/ui/textarea';

interface PlotFormProps {
  onSubmit: (data: Omit<Plot, 'id'>) => void;
  trigger: React.ReactNode;
}

export default function PlotForm({ onSubmit, trigger }: PlotFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Plot, 'id'>>({
    resolver: zodResolver(plotSchema),
  });

  const handleFormSubmit = (data: Omit<Plot, 'id'>) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Plot</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="plotNumber">Plot Number</Label>
            <Input id="plotNumber" {...register('plotNumber')} />
            {errors.plotNumber && <p className="text-red-500">{errors.plotNumber.message}</p>}
          </div>
          <div>
            <Label htmlFor="plotSize">Plot Size</Label>
            <Input id="plotSize" {...register('plotSize')} />
            {errors.plotSize && <p className="text-red-500">{errors.plotSize.message}</p>}
          </div>
          <div>
            <Label htmlFor="plotDivision">Plot Division</Label>
            <Input id="plotDivision" {...register('plotDivision')} />
            {errors.plotDivision && <p className="text-red-500">{errors.plotDivision.message}</p>}
          </div>
          <div>
            <Label htmlFor="plotPhase">Plot Phase</Label>
            <Input id="plotPhase" {...register('plotPhase')} />
            {errors.plotPhase && <p className="text-red-500">{errors.plotPhase.message}</p>}
          </div>
          <div>
            <Label htmlFor="plotStatus">Plot Status</Label>
            <Input id="plotStatus" {...register('plotStatus')} />
            {errors.plotStatus && <p className="text-red-500">{errors.plotStatus.message}</p>}
          </div>
          <div>
            <Label htmlFor="assignedTo">Assigned To</Label>
            <Input id="assignedTo" {...register('assignedTo')} />
            {errors.assignedTo && <p className="text-red-500">{errors.assignedTo.message}</p>}
          </div>
          <div>
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea id="requirements" {...register('requirements')} />
            {errors.requirements && <p className="text-red-500">{errors.requirements.message}</p>}
          </div>
          <Button type="submit">Add Plot</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
