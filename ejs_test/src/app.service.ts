import { Injectable } from '@nestjs/common';
import { Response } from 'express';

import { SoscDataSource } from './sosc/sosc.DataSource';
import { PRDT_ENT } from './sosc/entities/sosc.entity';


@Injectable()
export class AppService {

  async getHello(res: Response): Promise<any> {
    let contents = await SoscDataSource.manager.find(PRDT_ENT);

    return res.render('data',
      {
        data: contents,

      });
  }
}

