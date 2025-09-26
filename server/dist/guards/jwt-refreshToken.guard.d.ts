import { CanActivate, ExecutionContext } from '@nestjs/common';
import { RefreshToken } from 'src/auth/model/refershToken.model';
import { JwtTokenService } from 'src/services/jwt-token.service';
export declare class JwtRefreshTokenGuard implements CanActivate {
    private readonly jwtTokenService;
    private refreshTokenModel;
    constructor(jwtTokenService: JwtTokenService, refreshTokenModel: typeof RefreshToken);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
