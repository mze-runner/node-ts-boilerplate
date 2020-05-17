import express from 'express';
import * as bodyParser from 'body-parser';
import router from './controllers';
import { PORT, ENVIRONMENT } from './config';

class App {
    constructor () {
        this.app = express();
        this.config();
        this.routes();
    }

    public app: express.Application;

    private config (): void {
        this.app.set('port', PORT);
        this.app.set('env', ENVIRONMENT);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes (): void {
        this.app.use('/', router);
    }
}

export default new App().app;
