import { NextRequest, NextResponse } from 'next/server';

// Mock data for plots
let plots: any[] = [
  {
    id: 1,
    plotNumber: 'A-101',
    plotSize: '120 sq yd',
    plotDivision: 'Residential',
    plotPhase: 'Phase 1',
    plotStatus: 'Assigned',
    assignedTo: 'John Doe',
    requirements: 'No special requirements',
  },
];

export async function GET() {
  return NextResponse.json(plots);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newPlot = { id: plots.length + 1, ...body };
  plots.push(newPlot);
  return NextResponse.json(newPlot, { status: 201 });
}

// TODO: Add PUT, DELETE
