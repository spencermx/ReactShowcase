// src/app/api/weather/[country]/[cityy]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { country, cityy } = params;

  if (!country || !cityy) {
    return NextResponse.json({ error: 'Country and city are required' }, { status: 400 });
  }

  const mockWeatherData = {
    country,
    cityy,
    temperature: 20 + Math.floor(Math.random() * 10),
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    unit: 'C',
  };
  return NextResponse.json(mockWeatherData, { status: 200 });
}
