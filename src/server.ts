import app from './app';
import { port } from './config/server.config';
import db from './services/db';

const initApp = async () => {
    console.log('Database connection...');

    app.listen(port || 3000, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    try {
        await db.authenticate();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

initApp();