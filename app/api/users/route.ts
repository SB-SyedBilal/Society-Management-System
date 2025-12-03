import { NextRequest, NextResponse } from 'next/server';

// Mock data for now
let users: any[] = [
  {
    id: 1,
    fullName: 'John Doe',
    mobileNumber: '1234567890',
    whatsappNumber: '1234567890',
    cnicNumber: '12345-6789012-3',
    avatar: '',
    role: 'Resident',
    accountStatus: 'Active',
    email: 'john@example.com',
  },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = { id: users.length + 1, ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// TODO: Add PUT, DELETE for update and delete
