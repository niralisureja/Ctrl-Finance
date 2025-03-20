import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
import { validateAdminCredentials, getJwtSecret } from '@/lib/auth';

// Get JWT secret from utility function
const JWT_SECRET = getJwtSecret();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    // Validate credentials using the utility function
    if (!validateAdminCredentials(username, password)) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Create JWT token
    const token = sign(
      { username, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    // Set cookie in the response
    const response = NextResponse.json(
      { success: true, message: 'Login successful' },
      { status: 200 }
    );
    
    // Set the cookie in the response
    response.cookies.set({
      name: 'admin-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/'
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}