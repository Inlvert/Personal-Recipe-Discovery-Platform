import { Model } from 'sequelize-typescript';
interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface IUserAttributes extends Omit<IUser, 'id'> {
}
export declare class User extends Model<IUser, IUserAttributes> {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export {};
