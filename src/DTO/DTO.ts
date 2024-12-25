import { IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateAdvisorDto {
  @IsString() Full_Name: string;
  @IsEmail() email: string;
  @IsString() password: string;
  @IsOptional() @IsString() Category?: string;
  @IsOptional() @IsString() Field_of_Expertise?: string;
  @IsOptional() @IsString() Location?: string;
}

export class CreateInvestorDto {
  @IsString() Company_Name: string;
  @IsString() Investment_ID: string;
  @IsOptional() @IsString() Investment_amount?: string;
  @IsOptional() @IsString() Investment_Period?: string;
}

export class CreateCompanyDto {
  @IsString() Company_Name: string;
  @IsString() Location: string;
  @IsOptional() @IsString() Fund_Amount?: string;
  @IsOptional() @IsString() Launch_date?: string;
}

export class UpdateAdvisorDto {
  @IsString() Full_Name?: string;
  @IsString() Email?: string;
  @IsString() Location?: string;
  @IsOptional() @IsString() Category?: string;
}
