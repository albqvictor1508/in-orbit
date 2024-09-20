import './src/db/index';

import express from 'express';
import TokenRoutes from "./src/routes/TokenRoutes";
import UserRoutes from './src/routes/UserRoutes';
import homeRoutes from './src/routes/HomeRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes() {
        this.app.use('/token', TokenRoutes);
        this.app.use('/', homeRoutes);
        this.app.use('/user', TokenRoutes, UserRoutes);
    }
}

export default new App().app