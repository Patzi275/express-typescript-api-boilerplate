import { Model, Table, Column, DataType } from "sequelize-typescript";
import bcrypt from 'bcrypt';

@Table({tableName: "users"})
export default class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    })
    id!: number;

    @Column({type: DataType.STRING})
    firstname!: string;

    @Column({type: DataType.STRING})
    lastname!: string;

    @Column({
        type: DataType.STRING, 
        unique: true
    })
    email!: string;

    @Column({type: DataType.STRING})
    password!: string;

    @Column({type: DataType.STRING})
    phone!: string;

    @Column({
        type: DataType.ENUM('admin', 'user'),
        defaultValue: 'user'
    })
    role!: string;

    dto() {
        return {
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            role: this.role
        };
    }

    comparePassword(password: string) {
        return bcrypt.compareSync(password, this.password);
    }
}