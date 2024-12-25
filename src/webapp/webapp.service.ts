import { Injectable } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository  } from 'typeorm';
import { Advisor, Company, Investor } from 'src/database/database.entity';
import { CreateAdvisorDto, CreateInvestorDto } from 'src/DTO/DTO';
import * as bcrypt from 'bcrypt';

@Injectable()
export class WebappService {
    private readonly saltRounds = 10;

    constructor(
      @InjectRepository(Advisor) private readonly advisorRepository: Repository<Advisor>,
      @InjectRepository(Investor) private readonly investorRepository: Repository<Investor>,
      @InjectRepository(Company) private readonly companyRepository: Repository<Company>,
    ) {}
  
    // Add an Advisor (without authentication)
    async addAdvisor(data: CreateAdvisorDto) {
      const { email, password, ...otherData } = data;
      
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, this.saltRounds);
      const newAdvisor = this.advisorRepository.create({
        ...otherData,
        Email,
        password: hashedPassword,
      });
  
      await this.advisorRepository.save(newAdvisor);
      return { message: 'Advisor added successfully', advisor: newAdvisor };
    }
  
    // Add an Investor (without authentication)
    async addInvestor(data: CreateInvestorDto) {
      const newInvestor = this.investorRepository.create(data);
      await this.investorRepository.save(newInvestor);
      return { message: 'Investor added successfully', investor: newInvestor };
    }
  
    // Add a Company (without authentication)
    async addCompany(data: CreateAdvisorDto) {
      const newCompany = this.companyRepository.create(data);
      await this.companyRepository.save(newCompany);
      return { message: 'Company added successfully', company: newCompany };
    }
  
    // Example function for Investment Analysis (Placeholder for future functionality)
    /*async analyzeInvestment(investmentId: number) {
      // Placeholder logic for analyzing investments
      const investment = await this.investorRepository.findOne({ where: { Investment_ID: investmentId } });
      if (!investment) {
        return { message: 'Investment not found.' };
      }
      // Logic for investment analysis goes here...
      return { message: 'Investment analysis completed', investment };
    }*/
  
    // Example function for Company Assessment (Placeholder for future functionality)
    async assessCompany(companyId: number) {
      const company = await this.companyRepository.findOne({ where: { Company_Id: companyId } });
      if (!company) {
        return { message: 'Company not found.' };
      }
      // Logic for assessing company goes here...
      return { message: 'Company assessment completed', company };
    }
  
    // Example function for Matchmaking (Placeholder for future functionality)
    async matchmaking(investorId: number, companyId: number) {
      const investor = await this.investorRepository.findOne({ where: { Investor_Id: investorId } });
      const company = await this.companyRepository.findOne({ where: { Company_Id: companyId } });
      
      if (!investor || !company) {
        return { message: 'Investor or Company not found.' };
      }
      // Matchmaking logic goes here...
      return { message: 'Matchmaking completed', investor, company };
    }
}
