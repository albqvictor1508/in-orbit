import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import dotenv from 'dotenv';
dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {

    }

    routes() {
        this.app.use('/', homeRoutes);  
    }

}

export default new App().app