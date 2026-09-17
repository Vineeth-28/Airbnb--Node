import dotenv from 'dotenv';

type serverConfig = {
  PORT: number;
};

function loadenv() {
  console.log('Environment variables loaded successfully');
}

loadenv();

export const serverConfig: serverConfig = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};
