import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(userDto: UserDto): Promise<void>;
    signIn(req: any): Promise<{
        accessToken: string;
    }>;
    getMe(req: any): any;
}
