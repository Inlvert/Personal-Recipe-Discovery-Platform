import { Model } from 'sequelize-typescript';
import { User } from 'src/user/model/user.model';
interface IRefreshToken {
    token: string;
    userId: number;
}
export declare class RefreshToken extends Model<IRefreshToken> {
    token: string;
    userId: number;
    user: User;
}
export {};
