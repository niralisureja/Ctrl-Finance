/**
 * Authentication utilities for the application
 */
import { randomBytes } from 'crypto';

/**
 * Generates a secure random string for use as a JWT secret
 * @param length The length of the random string (default: 32)
 * @returns A secure random string
 */
export function generateSecureSecret(length: number = 32): string {
  return randomBytes(length).toString('hex');
}

/**
 * Gets the JWT secret from environment variables or uses a fallback
 * This ensures we have a consistent secret across the application
 */
export function getJwtSecret(): string {
  // Using a fixed fallback instead of generating a random one to ensure consistency
  return process.env.JWT_SECRET || 'bd4752994656849e5d3623ad4432da91339572e8b310191971bebdf94aa7f035';
}

/**
 * Validates admin credentials against environment variables
 * @param username The username to validate
 * @param password The password to validate
 * @returns Whether the credentials are valid
 */
export function validateAdminCredentials(username: string, password: string): boolean {
  const validUsername = process.env.ADMIN_USERNAME || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'password123';
  
  return username === validUsername && password === validPassword;
}