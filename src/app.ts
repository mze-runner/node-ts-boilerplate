import express from 'express';
import * as bodyParser from 'body-parser';
import router from './controllers/index';

class App {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    
    public app: express.Application;
    
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private routes(): void {
        this.app.use('/', router);
    }
}

export default new App().app;