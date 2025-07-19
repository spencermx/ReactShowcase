// src/app/api/weather/[city]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { city } = params; // Extract dynamic parameter
  const mockWeatherData = {
    city,
    temperature: 20 + Math.floor(Math.random() * 10), // Random temp for demo
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
  };
  return NextResponse.json(mockWeatherData, { status: 200 });
}
