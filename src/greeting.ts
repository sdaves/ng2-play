import {Component} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {ILogger} from './services/ilogger';

@Injectable()
@Component({
    selector: 'greeting',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class Greeting {
    name: string = 'World';

    constructor(private logger:ILogger) {
      logger.info("Greeting created");
    }
}
