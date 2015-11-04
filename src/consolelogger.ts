import {Injectable} from 'angular2/core';
import {ILogger} from './ilogger';

@Injectable()
export class ConsoleLogger implements ILogger {
  constructor() {
    this.info("consolelogger created");
  }

  info(value: string) {
    console.info("consolelogger:" + value);
  }
}
