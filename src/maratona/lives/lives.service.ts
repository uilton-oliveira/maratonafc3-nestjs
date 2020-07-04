import { Injectable } from '@nestjs/common';
import { Live } from './live.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LivesService {
  constructor(
    @InjectRepository(Live)
    private liveRepository: Repository<Live>,
  ) { }

  async  findAll(): Promise<Live[]> {
    return await this.liveRepository.find();
  }

  async  create(contact: Live): Promise<Live> {
    return await this.liveRepository.save(contact);
  }

  async update(contact: Live): Promise<UpdateResult> {
    return await this.liveRepository.update(contact.id, contact);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.liveRepository.delete(id);
  }
}
