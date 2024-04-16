import { Request } from "express";
import { checkSchema } from "express-validator";
import userRepository from "../../repositories/user.repository";

const validator = checkSchema({
    firstname: { notEmpty: { errorMessage: "Firstname is required" } },
    lastname: { notEmpty: { errorMessage: "Lastname is required" } },
    email: {
        notEmpty: {
            errorMessage: "Email is required",
            bail: true
        },
        isEmail: {
            errorMessage: "Email address is not valid",
            bail: true
        },
        custom: {
            options: async (value: string) => {
                const emailExist = await userRepository.existByEmail(value);
                if (emailExist) throw new Error();
            },
            errorMessage: "Email is already used"
        }
    },
    password: {
        isLength: {
            options: { min: 6 },
        },
        errorMessage: "Password should have at least 6 characters"
    },
    phone: {
        isMobilePhone: {
            options: ['any', { strictMode: true }],
        },
    }
}, ['body']);

export default validator;