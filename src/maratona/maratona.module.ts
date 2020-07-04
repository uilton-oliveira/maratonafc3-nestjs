import { Module } from '@nestjs/common';
import { LivesController } from './lives/lives.controller';
import { LivesService } from './lives/lives.service';

@Module({
  controllers: [LivesController],
  providers: [LivesService]
})
export class MaratonaModule {}
