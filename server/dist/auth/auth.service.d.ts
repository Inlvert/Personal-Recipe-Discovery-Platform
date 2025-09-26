import { SessionService } from 'src/services/session.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/model/user.model';
export declare class AuthService {
    private userModel;
    private readonly sessionService;
    constructor(userModel: typeof User, sessionService: SessionService);
    registrationUser(createUserDto: CreateUserDto): Promise<{
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
    loginUser(createUserDto: CreateUserDto): Promise<{
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
    refreshUser(refreshToken: string): Promise<{
        user: User;
        tokenPair: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
