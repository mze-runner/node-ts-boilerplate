import app from './app';
import logger from './utils/logger';
// Init and connect to database
import * as mongo from './config/mongo';
import { MONGO_CONN } from './config';

const start = async () => {
    try {
        // Init connection to mongo database //
        const mongoose = await mongo.connect(MONGO_CONN);

        // Run HTTP server
        const server = app.listen(app.get('port'), function () {
            logger.info(
                'Express server listening on port ' +
                    app.get('port') +
                    ', environment: ' +
                    app.get('env')
            );
        });

        process.on('SIGTERM', () => {
            logger.error('============== APPLICATION TERMINATION (SIGTERM signal) ==============');
            console.log('Closing http server.');
            server.close(() => {
                console.log('Http server closed.');
                // boolean means [force], see in mongoose doc
                mongoose.connection.close(false, () => {
                    logger.info('MongoDb connection closed.');
                    process.exit(0);
                });
            });
        });
        process.on('SIGINT', () => {
            logger.error('============== APPLICATION TERMINATION (SIGINT signal) ==============');
            logger.info('Closing http server.');
            server.close(() => {
                logger.info('Http server closed.');

                // boolean means [force], see in mongoose doc
                mongoose.connection.close(false, () => {
                    logger.info('MongoDb connection closed.');
                    process.exit(0);
                });
            });
        });
    } catch (err) {
        logger.info('====== APPLICATION SHUTDOWN ======');
        logger.error(JSON.stringify(err.name));
        logger.error(JSON.stringify(err.message));
        logger.error(JSON.stringify(err.stack));
        process.exit();
    }
};

start();
