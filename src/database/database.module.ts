import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advisor,Investor,Company } from 'src/database/database.entity';


@Module({
  
  imports: [TypeOrmModule.forFeature([Advisor, Investor, Company]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '4682',
      database: 'optra_02',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    })
  ],
})
export class databaseModule {}
