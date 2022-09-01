import { Injectable } from '@nestjs/common';
import { PRDT_ENT } from './entities/sosc.entity';
import { SoscDataSource } from './sosc.DataSource';


@Injectable()
export class SoscService {
  constructor() { }

  async getData(): Promise<PRDT_ENT[]> {

    return await SoscDataSource.manager.find(PRDT_ENT);
  }
}

