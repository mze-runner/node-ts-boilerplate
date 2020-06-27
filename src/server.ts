import app from './app';
import logger from './utils/logger';
// Init and connect to database
import * as mongo from './config/mongo';
import { MONGO_CONN } from './config';

const start = async () => {
    try {
        await mongo.connect(MONGO_CONN);
        app.listen(app.get('port'), function () {
            logger.info(
                'Express server listening on port ' +
                    app.get('port') +
                    ', environment: ' +
                    app.get('env')
            );
        });
    } catch (err) {
        logger.info('====== APPLICTION SHUTDOWN ======');
        process.exit();
    }
};

start();
