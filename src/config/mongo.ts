import mongoose from 'mongoose';
import logger from '../utils/logger';

export const connect = (url: string) => {
    return mongoose
        .connect(url, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((mongo) => {
            logger.info(
                `Connection to mongo ${mongo.connection.host}:${mongo.connection.port}/${mongo.connection.name} successful...`
            );
            return mongo;
        })
        .catch((err) => {
            logger.error(`connection to mongo unsuccessful. ${err}...`);
            throw err;
        });
};
