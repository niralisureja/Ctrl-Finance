import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Define the path to store form responses
const responsesDir = path.join(process.cwd(), 'data');
const responsesFile = path.join(responsesDir, 'responses.json');

// Ensure the data directory exists
if (!fs.existsSync(responsesDir)) {
  fs.mkdirSync(responsesDir, { recursive: true });
}

// Initialize responses file if it doesn't exist
if (!fs.existsSync(responsesFile)) {
  fs.writeFileSync(responsesFile, JSON.stringify([], null, 2));
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Add timestamp and unique ID to the submission
    const submission = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      ...formData
    };
    
    // Read existing responses
    let responses = [];
    try {
      const fileContent = fs.readFileSync(responsesFile, 'utf-8');
      responses = JSON.parse(fileContent);
    } catch (error) {
      // If file is empty or invalid JSON, start with empty array
      responses = [];
    }
    
    // Add new submission
    responses.push(submission);
    
    // Write updated responses back to file
    fs.writeFileSync(responsesFile, JSON.stringify(responses, null, 2));
    
    return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}