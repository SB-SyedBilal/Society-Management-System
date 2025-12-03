'use client';

import { useEffect, useState } from 'react';
import { Plot } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import PlotForm from './PlotForm';

export default function PlotTable() {
  const [plots, setPlots] = useState<Plot[]>([]);

  useEffect(() => {
    fetchPlots();
  }, []);

  const fetchPlots = async () => {
    const res = await fetch('/api/plots');
    const data = await res.json();
    setPlots(data);
  };

  const handleAddPlot = async (plotData: Omit<Plot, 'id'>) => {
    const res = await fetch('/api/plots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plotData),
    });
    if (res.ok) {
      fetchPlots(); // Refresh the list
    }
  };

  return (
    <div>
      <div className="mb-4">
        <PlotForm onSubmit={handleAddPlot} trigger={<Button>Add Plot</Button>} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Plot Number</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plots.map((plot) => (
            <TableRow key={plot.id}>
              <TableCell>{plot.id}</TableCell>
              <TableCell>{plot.plotNumber}</TableCell>
              <TableCell>{plot.plotSize}</TableCell>
              <TableCell>{plot.plotStatus}</TableCell>
              <TableCell>{plot.assignedTo}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
