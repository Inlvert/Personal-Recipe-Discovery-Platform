import { RefreshToken } from 'src/auth/model/refershToken.model';
import { User } from 'src/user/model/user.model';
import { JwtTokenService } from './jwt-token.service';
export declare class SessionService {
    private userModel;
    private refreshTokenModel;
    private readonly jwtTokenService;
    constructor(userModel: typeof User, refreshTokenModel: typeof RefreshToken, jwtTokenService: JwtTokenService);
    createSession(user: User): Promise<{
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
    refreshSession(refreshTokenInstants: any): Promise<{
        user: User;
        tokenPair: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
