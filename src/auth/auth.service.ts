import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advisor } from 'src/database/database.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Advisor)
    private readonly avRepo: Repository<Advisor>,
  ) {}

  /**
   * Login method: Validate email and password, and return a JWT token
   */
  async login(email: string, password: string) {
    // Find the advisor by email in the database
    const advisor = await this.avRepo.findOne({ where: { Email: email } });
    if (!advisor) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Validate the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, advisor.Password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Create JWT payload
    const payload = { Advisor_Id: advisor.Advisor_Id, Email: advisor.Email };

    // Generate and return a JWT token
    const token = this.jwtService.sign(payload);

    return {
      success: true,
      message: 'Login successful',
      token,
    };
  }
}
