import app from './app';
import logger from './utils/logger';
// Init and connect to database
import './config/mongo';

app.listen(app.get('port'), function () {
    logger.info(
        'Express server listening on port ' +
            app.get('port') +
            ', environment: ' +
            app.get('env')
    );
});
