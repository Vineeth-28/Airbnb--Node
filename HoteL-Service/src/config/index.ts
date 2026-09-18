import dotenv from 'dotenv';
import { string } from 'zod';

type serverConfig = {
  PORT: number;
};

type DBConfig = {
  DB_DATABASE: any;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
};

function loadenv() {
  console.log('Environment variables loaded successfully');
}

loadenv();

export const serverConfig: serverConfig = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};

// 1. Define the internal environment configuration values
export const DBConfig = {
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'vineet@123',
  DB_NAME: process.env.DB_NAME || 'airbnbNode',
};