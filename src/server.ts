import app from './app';
import { port } from './config/server.config';
import db from './services/db';

const initApp = async () => {    
    try {
        console.log('Database connection...');
        await db.authenticate();
        await db.sync({force: true});
        console.log("Database connection has been established successfully.");

        app.listen(port || 3000, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

initApp();