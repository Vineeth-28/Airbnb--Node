import dotenv from 'dotenv';
import { DBConfig } from './index';
dotenv.config();


// 2. Build the structured environment configuration for Sequelize CLI
const config = {
  development: {
    username: DBConfig.DB_USER,
    password: DBConfig.DB_PASSWORD,
    database: DBConfig.DB_NAME,
    host: DBConfig.DB_HOST,
    dialect: 'mysql' as const
  },
  test: {
    username: DBConfig.DB_USER,
    password: DBConfig.DB_PASSWORD,
    database: DBConfig.DB_NAME,
    host: DBConfig.DB_HOST,
    dialect: 'mysql' as const
  },
  production: {
    username: DBConfig.DB_USER,
    password: DBConfig.DB_PASSWORD,
    database: DBConfig.DB_NAME,
    host: DBConfig.DB_HOST,
    dialect: 'mysql' as const
  }
};

// Modern ES6 export for your server source code application flow
export default config;

// CommonJS backward compatibility export strictly for Sequelize CLI
module.exports = config;
