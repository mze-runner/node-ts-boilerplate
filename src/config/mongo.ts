import mongoose from 'mongoose';
import {
    MONGO_AUTHENTICATION,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_CONN,
} from './';
import logger from '../utils/logger';

interface ConnectionDetails {
    authentication: string;
    host: string;
    port: string;
    db: string;
    user: string;
    password: string;
}

const mongoConnectionString: string =
    MONGO_CONN && MONGO_CONN.length
        ? MONGO_CONN
        : _buildConnectionString({
              authentication: MONGO_AUTHENTICATION,
              host: MONGO_HOST,
              port: MONGO_PORT,
              db: MONGO_DATABASE,
              user: MONGO_USER,
              password: MONGO_PASSWORD,
          });

function _buildConnectionString(conn: ConnectionDetails): string {
    return conn.authentication === 'password'
        ? `mongodb://${conn.user}:${conn.password}@${conn.host}:${conn.port}/${conn.db}`
        : `mongodb://${conn.host}:${conn.port}/${conn.db}`;
}

const connect = async () => {
    await mongoose
        .connect(mongoConnectionString, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((mongo) => {
            logger.info(
                `Connection to mongo ${mongo.connection.host}:${mongo.connection.port}/${mongo.connection.name} successful...`
            );
        })
        .catch((err) => {
            logger.error(`connection to mongo unsuccessful. ${err}...`);
        });
};

connect();
