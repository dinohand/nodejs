import { Injectable } from '@nestjs/common';
//-----------------------------------------
import { WORK_NOTE } from './entities/db.entity';
import { DbDataSource } from '../work.dataSource';

@Injectable()
export class DbService {

  create() {
    return 'This action adds a new db';
  }

  async findAll() {

    //  return await DbDataSource.manager.find(WORK_NOTE);
    // const result = await DbDataSource
    //   .createQueryBuilder(WORK_NOTE, 'work_note')
    //   .select()
    //   .getOne();
    // return result;

    const qRunner = await DbDataSource.createQueryRunner();
    await qRunner.connect();
    await qRunner.startTransaction();
    try {
      return await qRunner.manager.find(WORK_NOTE);
    } catch (err) {
      await qRunner.rollbackTransaction();
      console.log('Error occured !')
      console.log(err)

      return 'Failed'
    } finally {
      await qRunner.release();
    }
    // console.log(result);


  }

  async save() {
    await DbDataSource
      .createQueryBuilder()
      .insert()
      .into(WORK_NOTE)
      .useTransaction(true)   //
      .values({
        contents: '안녕하세요2',
        createDate: new Date(),
        status: '상태2',
        remark: '비고2'
      })
      .execute();

    return await DbDataSource.manager.find(WORK_NOTE)
  }
}
