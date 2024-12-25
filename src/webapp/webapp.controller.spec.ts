import { Test, TestingModule } from '@nestjs/testing';
import { WebappController } from './webapp.controller';
import { SignUpDTO } from 'src/DTO/SignUp.dto';
import { SignInDTO } from 'src/DTO/SignIn.dto';

describe('WebappController', () => {
  let controller: WebappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebappController],
    }).compile();

    controller = module.get<WebappController>(WebappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
