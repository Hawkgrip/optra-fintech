
import { Body,Post, Get, Param , Delete, UsePipes, ValidationPipe, Controller} from '@nestjs/common';
import { get } from 'http';
import { CreateAdvisorDto, CreateCompanyDto, CreateInvestorDto } from 'src/DTO/DTO';
import { WebappService } from 'src/webapp/webapp.service';
//import { SignUpDto } from './signup.dto';
//import { SignInDto } from './signin.dto';
//import { AddCompaniesDto, AddOwnTransactionDto, AddTransactionDto, UpdateCompanyInfoDto, UpdatePersonalInfoDto } from './validation.dto';
@Controller('webapp')
export class WebappController {
    constructor(private readonly webappService: WebappService) {}

  // Endpoint to add an Advisor
  @Post('add-advisor')
  async addAdvisor(@Body() data: CreateAdvisorDto) {
    return this.webappService.addAdvisor(data);
  }

  // Endpoint to add an Investor
  @Post('add-investor')
  async addInvestor(@Body() data: CreateInvestorDto) {
    return this.webappService.addInvestor(data);
  }

  // Endpoint to add a Company
  @Post('add-company')
  async addCompany(@Body() data: CreateCompanyDto) {
    return this.webappService.addCompany( data );
  }

  // Placeholder endpoint for Investment Analysis
  @Post('analyze-investment')
  async analyzeInvestment(@Body('investmentId') investmentId: number) {
    return this.webappService.analyzeInvestment(investmentId);
  }

  // Placeholder endpoint for Company Assessment
  @Post('assess-company')
  async assessCompany(@Body('companyId') companyId: number) {
    return this.webappService.assessCompany(companyId);
  }

  // Placeholder endpoint for Matchmaking
  @Post('matchmaking')
  async matchmaking(@Body('investorId') investorId: number, @Body('companyId') companyId: number) {
    return this.webappService.matchmaking(investorId, companyId);
  }




}
