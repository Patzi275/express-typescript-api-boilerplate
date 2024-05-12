import { config } from 'dotenv';

config();

const serverConfig = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.SECRET,
    JWT_EXPIRES_IN: process.env.EXPIRES_IN
};

export default serverConfig;