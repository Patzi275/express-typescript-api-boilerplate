import User from "../models/user";

interface IUserRepository {
    save(user: User): Promise<User>;
    retrieveById(userId: number): Promise<User | null>;
    existByEmail(email: string): Promise<boolean>;
    update(user: User): Promise<User>;
    delete(userId: number): Promise<number>;
}

class UserRepository implements IUserRepository {
    async save(user: User): Promise<User> {
        try {
            return await User.create({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                phone: user.phone,
                role: user.role
            });
        } catch (error: any) {
            throw new Error("Error saving user: " + error.message);
        }
    }

    async retrieveById(userId: number): Promise<User | null> {
        try {
            return await User.findByPk(userId);
        } catch (error: any) {
            throw new Error("Error retrieving user: " + error.message);
        }
    }

    async existByEmail(email: string): Promise<boolean> {
        try {
            const exist = await User.findOne({ where: { email } });
            return exist ? true : false;
        } catch (error: any) {
            throw new Error("Error checking email: " + error.message);
        }
    }

    async update(user: User): Promise<User> {
        try {
            const userToUpdate = await User.findByPk(user.id);
            const { firstname, lastname, email, password, phone, role } = user;
            if (userToUpdate) {
                const affectedRows = await User.update(
                    { firstname, lastname, email, password, phone, role },
                    { where: { id: user.id } }
                );
                return affectedRows ? user : userToUpdate;
            }
            throw new Error("User not found");
        } catch (error: any) {
            throw new Error("Error updating user: " + error.message);
        }
    }

    async delete(userId: number): Promise<number> {
        try {
            const affectedRows = await User.destroy({ where: { id: userId } });
            return affectedRows;
        } catch (error: any) {
            throw new Error("Error deleting user: " + error.message);
        }
    }
}

const userRepository = new UserRepository();

export default userRepository;