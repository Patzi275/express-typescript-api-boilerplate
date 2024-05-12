import app from './app';
import serverConfig from './config/server.config';
import db from './services/db.service';

const { PORT } = serverConfig;

const initApp = async () => {    
    try {
        console.log('Database connection...');
        await db.authenticate();
        await db.sync({force: true});
        console.log("Database connection has been established successfully.");

        app.listen(PORT || 3000, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

initApp();