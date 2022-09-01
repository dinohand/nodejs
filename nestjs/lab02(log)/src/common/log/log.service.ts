import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LOG_MST } from './entities/log.entity';
import { stringify } from 'querystring';



@Injectable()
export class LogService {
    constructor(@InjectRepository(LOG_MST)
    private logRepository: Repository<LOG_MST>) {
    }

    private STAG = '';
    private TYPE = '';
    private DTTM: Date;

    //--------------------------------------------
    private getTimeStampStr(date: Date): string {
        let result = '';
        const cDate = date

        let cY = cDate.getFullYear();
        let cM = cDate.getMonth() + 1;
        let cD = cDate.getDate();

        result = [':', cY, '-', cM, '-', cD].join('');

        return result;
    }

    //-----------------------------------------------------
    private getPrintMessage(message: any, ...optionalParams: any[]): string {
        let result: string;

        this.DTTM = new Date();

        let timeStr: string = this.getTimeStampStr(this.DTTM);

        // switch (optionalParams.length) {
        //     case 0:
        //         result = `0[${this.STAG}${timeStr}] ${message}`;
        //         break;
        //     case 1:
        //         this.STAG = optionalParams[0];
        //         result = `2[${this.STAG}${timeStr}] ${message}`;
        //         break;
        //     case 2:
        //         this.STAG = optionalParams[0];
        //         result = `2[${this.STAG}${timeStr}][${optionalParams[1]}] ${message}`;
        //         break;

        // }


        if (optionalParams.length === 0)
            result = `[${this.STAG}${timeStr}] ${message}`;
        else if (optionalParams.length == 1) {
            this.STAG = optionalParams[0];
            result = `[${this.STAG}${timeStr}] ${message}`;
        } else if (optionalParams.length == 2) {
            this.STAG = optionalParams[0];
            result = `2[${this.STAG}${timeStr}][${optionalParams[1]}] ${message}`;
        }

        return result;
    }
    //-----------------------------------------------------
    // log
    async log(message: any, ...optionalParams: any[]) {
        this.TYPE = 'INFO'; // LOG

        //   console.log(optionalParams);
        console.log(await this.getPrintMessage(message, optionalParams));


        // switch (optionalParams.length) {
        //     case 0:
        //         console.log(`[${this.STAG}${timeStr}] ${message}`);
        //         break;
        //     case 1:
        //         this.STAG = optionalParams[0];
        //         console.log(`[${this.STAG}${timeStr}] ${message}`);
        //         break;
        //     case 2:
        //         this.STAG = optionalParams[0];
        //         this.TYPE = optionalParams[1];
        //         console.log(`[${this.STAG}${timeStr}] [${this.TYPE}]${message}`);
        //     default: break;
        // }




        // try {
        //     this.logRepository.insert({
        //         DTTM: this.DTTM,
        //         STAG: this.STAG,
        //         LOG_TEXT: message,
        //         TYPE: this.TYPE,
        //         EVNT_NAME: '',
        //         ERR_CODE: '',
        //         RMRK: ''
        //     });
        // } catch (e) {
        //     console.log(e);
        // }
    };



    /**
     * Write an 'error' level log.
     */
    async error(message: any, ...optionalParams: any[]) {
        this.TYPE = 'ERROR'; // 
        const printMessage = this.getPrintMessage(message, optionalParams);

        console.log(printMessage);

        // try {
        //     this.logRepository.insert({
        //         DTTM: this.DTTM,
        //         STAG: this.STAG,
        //         LOG_TEXT: message,
        //         TYPE: this.TYPE,
        //         EVNT_NAME: '',
        //         ERR_CODE: '',
        //         RMRK: ''
        //     });
        // } catch (e) {
        //     console.log(e);
        // }
    }

    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]) { }

    /**
     * Write a 'debug' level log.
     */
    debug?(message: any, ...optionalParams: any[]) { }

    /**
     * Write a 'verbose' level log.
     */
    verbose?(message: any, ...optionalParams: any[]) { }

    // 날자ㅡㄹ 


    // *** function을 만들어 모듈화 처리토록 함
    // private getDateStr(pDate:Date):string{
    //     return '';
    // }
}
