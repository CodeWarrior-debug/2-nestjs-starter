import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const configValue = this.configService.get(`environment`);
    console.log(`welcome to the navy environment of ${configValue}`);
    return 'Hello World!';
  }
}
