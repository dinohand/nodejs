import { Controller, Get, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // @Render('index')
  // // ejs, hbs
  // getIndex() {
  //   return {
  //     //  variable : value,
  //     teszt: 'Some text', //ignored
  //     unusedVar: 'Some text', //ignored
  //     name: 'LG-CNS',
  //     author: 'JK'
  //   };
  // }

  @Get()
  root(@Res() res: Response) {
    // if ( condition ) {
    //   return res.render(...)
    // }else {
    //   return res.render(...)
    // }

    return res.render(
      this.appService.getViewName(),
      { name: 'LG-CNS', author: 'JK' }

    );
  }
}
