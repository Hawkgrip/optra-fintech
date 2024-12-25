import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advisor, Company, Investor } from 'src/database/database.entity';
import { WebappController } from './webapp.controller';
import { WebappService } from './webapp.service';




@Module({
  imports: [TypeOrmModule.forFeature([Investor,Advisor,Company]),
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
  controllers: [WebappController],
  providers: [WebappService],
})
export class WebappModule {}
