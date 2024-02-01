import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { USERS } from '../constants';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = USERS.find((u) => u.email === email && u.password === password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }

    async generateToken(user: any): Promise<string> {
        if (!user || !user.email) {
            throw new UnauthorizedException('Invalid user');
        }
        const payload = { email: user.email, sub: user.role };
        return this.jwtService.sign(payload);
    }
}