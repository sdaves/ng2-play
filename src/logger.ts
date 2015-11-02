import {Injectable} from 'angular2/core';
import {ILogger} from './ilogger';

@Injectable()
export class Logger implements ILogger {
  constructor() {
    console.log("default logger created");
  }

  info(value: string) {
    console.log("defaultlogger:" + value)
  }
}
