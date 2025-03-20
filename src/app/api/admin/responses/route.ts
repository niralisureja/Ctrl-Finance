import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { getJwtSecret } from '@/lib/auth';

// Get JWT secret from utility function
const JWT_SECRET = getJwtSecret(); // Same secret as in login route
const responsesFile = path.join(process.cwd(), 'data', 'responses.json');

export async function GET(request: NextRequest) {
  try {
    // Get the token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Verify the token
    try {
      verify(token, JWT_SECRET);
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    
    // Read responses from file
    if (!fs.existsSync(responsesFile)) {
      return NextResponse.json({ success: true, responses: [] });
    }
    
    const fileContent = fs.readFileSync(responsesFile, 'utf-8');
    const responses = JSON.parse(fileContent || '[]');
    
    return NextResponse.json({ success: true, responses });
  } catch (error) {
    console.error('Error fetching responses:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch responses' },
      { status: 500 }
    );
  }
}