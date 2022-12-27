import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('<link href="https://192.168.36.36/360Linux/360/css/style.css" rel="stylesheet"><h1 style="display:flex; flex-direction: column; padding-top: 10rem; justify-content: center; font-size:2.5rem;width: 100%;text-align: center;"><a href="https://192.168.36.36/360Linux/front" class="btn" style="font-size: 2.5rem; padding: 3rem 0rem;margin-bottom: 4rem;">Celular Plataforma</a><a href="https://192.168.36.36/360Linux/360/startCell.php" class="btn" style="font-size: 2.5rem;     margin-bottom: 4rem;">Celular Start</a></h1>');
  
  });
});
