import { Controller, Post, Body, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { USERS } from 'src/constants';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() req) {

        let correctUser = false;

        USERS.map((item) => {
            if (item.email === req.email && item.password === req.password) {
                correctUser = true;
            }
        });

        if (correctUser === false) {
            throw new UnauthorizedException('Invalid user or Incorrect password');
        }

        return this.authService.generateToken(req);
    }
}