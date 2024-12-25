import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class SignInDTO {
    static Email(Email: any, Password: any) {
        throw new Error('Method not implemented.');
    }
    static Password(Email: any, Password: any) {
        throw new Error('Method not implemented.');
    }

    @IsNotEmpty({ message: "Email cannot be empty" })
    @IsEmail({}, { message: "Please enter a verified email" })
    Email: string;

    @MinLength(8, { message: "Password must contain at least 8 characters" })
    @IsNotEmpty({ message: "Password cannot be empty" })
    Password: string;
}
