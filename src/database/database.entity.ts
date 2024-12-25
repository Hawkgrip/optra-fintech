import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Advisor {
  @PrimaryGeneratedColumn()
  Advisor_Id: number;

  @Column({ length: 500 })
  Full_Name: string;

  @Column({ length: 500, unique: true })
  Email: string;

  @Column({ length: 500 })
  Password: string;

  @Column({ length: 500, nullable: true })
  Category: string;

  @Column({ length: 500, nullable: true })
  Field_of_Expertise: string;

  @Column({ length: 500, nullable: true })
  Connections: string;

  @Column({ length: 500 })
  Location: string;

  @Column({ length: 500, nullable: true })
  Experience: string;

  @Column({ length: 500 })
  Job_exp: string;

  @Column({ length: 500 })
  C_Investors: string; // Investors connected to the advisor

  @Column({ length: 500 })
  C_Firms: string; // Firms connected to the advisor

  @Column({ length: 500 })
  Balance: string; // Current balance of the advisor

  @Column({ nullable: true })
  Profile_Picture: string; // URL or path to profile picture

  // Functional fields for Advisor's tasks
  @Column({ length: 1000, nullable: true })
  Investment_Analysis: string; // Textual analysis on investment offers

  @Column({ length: 1000, nullable: true })
  Company_Assessment: string; // Textual assessment of companies for potential investment
  
  @Column({ length: 500, nullable: true })
  Consultation_Schedule: string; // Can be a link or text describing available slots or calendar

  // Static methods for password encryption would still be necessary
  static password: any;
}
@Entity()
export class Investor {
  @PrimaryGeneratedColumn()
  Investor_Id: number;

  @Column({ length: 500 })
  Company_Name: string;

  @Column({ length: 500, nullable: true })
  Investment_Amount: string; // Amount the investor plans to invest

  @Column({ length: 500 })
  Investment_ID: string;

  @Column({ length: 500, nullable: true })
  Investment_Period: string; // Investment period (e.g., long-term, short-term)

  @Column({ length: 500 })
  Company_ID: string; // The company's ID that the investor is interested in

  @Column({ length: 500, nullable: true })
  Investor_Type: string; // Type of investor (angel, venture capitalist, etc.)

  // Additional fields related to the investment process
  @Column({ length: 500, nullable: true })
  Investment_Interests: string; // Interests in specific industries, markets, etc.

  @Column({ length: 500, nullable: true })
  Investment_Risk_Appetite: string; // Risk level the investor is willing to take (low, medium, high)
}

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  Company_Id: number;

  @Column({ length: 500 })
  Company_Name: string;

  @Column({ length: 500 })
  Industry: string; // Industry or sector the company operates in

  @Column({ length: 500 })
  Location: string;

  @Column({ length: 500, nullable: true })
  Business_Model: string; // Explanation of how the company generates revenue

  @Column({ length: 500, nullable: true })
  Financial_Status: string; // Can include revenue, profit, etc.

  @Column({ length: 1000, nullable: true })
  Company_Ideas: string; // Description of the company's business ideas

  @Column({ length: 500, nullable: true })
  Investment_Needs: string; // What kind of investment is the company seeking?

  @Column({ length: 500, nullable: true })
  Risk_Factors: string; // What risks the company faces in its operations

  // Relationship with Advisor (Advisor can assess and help the company)
  @Column({ length: 500, nullable: true })
  Advisor_Connection: string; // Connection with Advisors for future investments

  // Fields for investment and performance tracking
  @Column({ length: 500, nullable: true })
  Investor_Interest: string; // Investors that showed interest in the company
}