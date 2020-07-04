import { Module } from '@nestjs/common';
import { LivesController } from './lives/lives.controller';
import { LivesService } from './lives/lives.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from './lives/live.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Live]),
  ],
  controllers: [LivesController],
  providers: [LivesService]
})
export class MaratonaModule {}
