import dotenv from 'dotenv';
import fs from 'fs';
import logger from '../utils/logger';

if (fs.existsSync('.env')) {
    logger.info('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV || 'environment unknown';
export const PORT = process.env.PORT || 5000; // you can specify any port you like.

// Mongo DB configuration....
export const MONGO_AUTHENTICATION = process.env.DB_AUTHENTICATION || ''; // no specific authentication instruction by default.
export const MONGO_HOST = process.env.DB_HOST || 'localhost'; // assuming running mongodb on local machine.
export const MONGO_PORT = process.env.DB_PORT || '27017'; // default mongodb port.
export const MONGO_DATABASE = process.env.DB_DATABASE || 'db'; // update the best you think is default
export const MONGO_USER = process.env.DB_USER || 'admin'; // login as admin user
export const MONGO_PASSWORD = process.env.DB_PASSWORD || ''; // mongodb passport
// we can receive ready to use connection string
export const MONGO_CONN = process.env.DB_CONN || '';
