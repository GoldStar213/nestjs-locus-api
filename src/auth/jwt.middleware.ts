// src/auth/jwt.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

interface ExtendedRequest extends Request {
    user?: any;
}

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) { }

    async use(req: ExtendedRequest, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (token) {
            try {
                const decoded = await this.jwtService.verify(token);
                req.user = decoded;
            } catch (error) {
                console.error('Token verification error:', error.message);
            }
        }
        next();
    }
}
