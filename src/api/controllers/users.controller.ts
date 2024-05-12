import { Request, Response } from "express";
import userRepository from "../../repositories/user.repository";
import User from "../../models/user.model";
import { validationResult } from "express-validator";
import { generateToken } from "../../services/jwt.service";

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
        const newUser = await userRepository.save(new User({
            ...user, role: 'user'
        }));

        const accessToken = generateToken(newUser);

        return res.status(201).json({
            accessToken,
            user: newUser,
        });

    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            message: error.message.toString(),
        });
    }
}