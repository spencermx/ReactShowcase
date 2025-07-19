// src/app/api/weather/route.js
import { NextResponse } from 'next/server';

const mockWeatherData = {
  city: 'New York',
  temperature: 22,
  condition: 'Sunny',
  humidity: 60,
  windSpeed: 10,
};

export async function GET() {
  return NextResponse.json(mockWeatherData, { status: 200 });
}
