import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() body: AuthDto) {
    console.log(body);
    return this.authService.signUp(body);
  }

  @Post('sign-in')
  signIn() {
    return this.authService.signIn();
  }
}