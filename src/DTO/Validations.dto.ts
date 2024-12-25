import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class FPassDTO {

    @IsNotEmpty({ message: "Email cannot be empty" })
    @IsEmail({}, { message: "Please enter a valid email" })
    email: string;

    @IsNotEmpty({ message: "Password cannot be empty" })
    @MinLength(8, { message: "Confirm Password must contain at least 8 letters" })
    password: string;

}

export class UpdateAdvisorDTO {

    @IsNotEmpty({ message: "Full name cannot be empty" })
    Full_Name: string;

    Experience: string;

    Category: string;

    @IsNotEmpty({ message: "Address cannot be empty" })
    Location: string;

}

export class AddAdvisorDTO {
    @IsNotEmpty({ message: "Advisor name cannot be empty" })
    Full_Name: string;

    Category: string;

    Balance: string;
}