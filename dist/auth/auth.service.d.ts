import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp(userDto: UserDto): Promise<any>;
    signIn(user: User): Promise<{
        accessToken: string;
    }>;
    validateUser(username: string, pass: string): Promise<User>;
}
