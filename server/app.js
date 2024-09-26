import './src/db/index';

import express from 'express';
import TokenRoutes from "./src/routes/TokenRoutes";
import UserRoutes from './src/routes/UserRoutes';
import homeRoutes from './src/routes/HomeRoutes';
import AlunoRoutes from './src/routes/AlunoRoutes';

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

    async routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/token', TokenRoutes);
        this.app.use('/user', UserRoutes);
        this.app.use('/aluno', AlunoRoutes);
    }
}

export default new App().app