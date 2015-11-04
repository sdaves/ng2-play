import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {Greeting} from './greeting';
import {ILogger} from './services/ilogger';

@Injectable()
@Component({
    selector: 'hello-app',
    directives: [Greeting],
    template: `
        <div (click)="sayHi()">Welcome to Angular 2! (click to say hi)</div>
        <greeting/>
    `
})
export class HelloApp {
  constructor(public logger: ILogger) {
    logger.info("HelloApp created");
  }

  sayHi() {
    alert("Hi");
  }
}
