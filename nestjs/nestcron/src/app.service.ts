import { Injectable, Logger } from '@nestjs/common';
import { CronJob } from 'cron';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AppService {

    private  logger = new Logger(AppService.name);
    private  scheduler = new SchedulerRegistry();

    addCronJob(name: string, seconds: string) {
   //   const job = new CronJob(`${seconds} * * * * *`, () => {
       const job = new CronJob(`${seconds}`, () => {
        
        this.logger.warn(`time (${seconds}) for job ${name} to run!`);
      });
    
      this.scheduler.addCronJob(name, job);
      job.start();
    
      this.logger.warn(
        `job ${name} added for each minute at ${seconds} seconds!`,
      );
    }
}
