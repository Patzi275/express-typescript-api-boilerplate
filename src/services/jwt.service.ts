import jwt from 'jsonwebtoken';
import serverConfig from '../config/server.config';
import User from '../models/user.model';

const { JWT_SECRET = "secret", JWT_EXPIRES_IN } = serverConfig;

export function generateToken(user: User) {
    return jwt.sign({
        userId: user.id,
        role: user.role,
    }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
}

export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
}

export function decodeToken(token: string) {
    return jwt.decode(token, { complete: true, json: true});
}