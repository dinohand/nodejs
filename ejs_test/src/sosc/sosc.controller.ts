import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, All } from '@nestjs/common';
import { SoscService } from './sosc.service';
import { PRDT_ENT, I_PRDT_ENT } from './entities/sosc.entity';
import { NamingStrategyInterface } from 'typeorm';
import { Response, Request } from '@nestjs/common';

@Controller('sosc')
export class SoscController {
  constructor(private readonly soscService: SoscService) { }

  /**
   * 저장된 상품정보를 json으로 불러온다
   * @returns 상품정보
   */
  @Get()
  getData() {
    return this.soscService.getData();
  }

  @All('job1')
  job1() {
    return '[sosc m/w]에서 job1 라고 응답했습니다'
  }

  @All('job2')
  job2() {
    return '[sosc m/w] answered [job2 ]'
  }


  /**
   * POST 방식으로 전달된 상품정보를 저장한다
   * @param prdtEnt : 상품정보 Entities
   * @returns (전체) 상품정보
   */

}
