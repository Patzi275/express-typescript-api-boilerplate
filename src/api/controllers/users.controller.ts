import { Request, Response } from "express";
import userRepository from "../../repositories/user.repository";
import User from "../../models/user";
import { validationResult } from "express-validator";

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

        return res.status(200).json({
            user: newUser,
        });

    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            message: error.message.toString(),
        });
    }
}