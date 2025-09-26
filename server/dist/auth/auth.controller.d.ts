import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(createUserDto: CreateUserDto): Promise<{
        user: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
        };
        tokenPair: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    login(createUserDto: CreateUserDto): Promise<{
        user: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
        };
        tokenPair: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    refresh(req: any): Promise<{
        user: import("../user/model/user.model").User;
        tokenPair: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
