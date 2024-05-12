import { Request, Response } from "express";
import userRepository from "../../repositories/user.repository";
import User from "../../models/user.model";
import { validationResult } from "express-validator";
import { generateToken } from "../../services/jwt.service";
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Invalid data provided for registration',
            errors: errors.array()
        });
    }

    try {
        const user = req.body;
        const cryptedPassword = bcrypt.hashSync(user.password, 10);
        const newUser = new User({
            ...user,
            password: cryptedPassword,
            role: 'user'
        });
        const accessToken = generateToken(newUser);

        const savedUser = await userRepository.save(newUser);

        return res.status(201).json({
            accessToken,
            user: savedUser.dto(),
        });

    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            message: error.message.toString(),
        });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Invalid data provided for login',
            errors: errors.array()
        });
    }

    try {
        const { email, password } = req.body;
        const user = await userRepository.retrieveByEmail(email);

        if (user == null) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        
        const accessToken = generateToken(user);

        return res.status(200).json({
            accessToken,
            user: user.dto(),
        });

    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            message: error.message.toString(),
        });
    }
}