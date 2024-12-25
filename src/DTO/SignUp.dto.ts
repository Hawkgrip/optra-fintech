import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class SignUpDTO {

    @IsNotEmpty({ message: "Full name cannot be empty" })
    Full_Name: string;

    @IsNotEmpty({ message: "Email cannot be empty" })
    @IsEmail({}, { message: "Please enter a verified email" })
    Email: string;

    @MinLength(8, { message: "Password must contain at least 8 characters" })
    @IsNotEmpty({ message: "Password cannot be empty" })
    Password: string;

    @MinLength(8, { message: "Password must contain at least 8 characters" })
    @IsNotEmpty({ message: "Confirm Password cannot be empty" })
    CPassword: string;
}
