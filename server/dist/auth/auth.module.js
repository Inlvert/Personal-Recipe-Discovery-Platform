"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../user/model/user.model");
const jwt_1 = require("@nestjs/jwt");
const session_service_1 = require("../services/session.service");
const refershToken_model_1 = require("./model/refershToken.model");
const jwt_token_service_1 = require("../services/jwt-token.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_model_1.User, refershToken_model_1.RefreshToken]),
            jwt_1.JwtModule.register({})
        ],
        providers: [auth_service_1.AuthService, session_service_1.SessionService, jwt_token_service_1.JwtTokenService],
        controllers: [auth_controller_1.AuthController]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map