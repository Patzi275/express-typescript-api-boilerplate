import { checkSchema } from "express-validator";
import userRepository from "../../repositories/user.repository";

const validator = checkSchema({
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
                if (!emailExist) throw new Error();
            },
            errorMessage: "Email is not registered"
        }
    },
    password: {
        errorMessage: "Password is incorrect",
        custom: {
            options: async (value: string, { req }) => {
                const user = await userRepository.retrieveByEmail(req.body.email);
                if (!user || !user.comparePassword(value)) throw new Error();
            }
        }
    },
});

export default validator;