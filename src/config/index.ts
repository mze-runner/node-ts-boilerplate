import dotenv from 'dotenv';
import fs from 'fs';
import logger from '../utils/logger';

if (fs.existsSync('.env')) {
    logger.info('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV || 'environment unknown';
export const PORT = process.env.PORT || 5000; // you can specify any port you like.
