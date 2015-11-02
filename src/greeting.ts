import {Component} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {Logger} from './logger';

@Injectable()
@Component({
    selector: 'greeting',
    providers: [Logger],
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class Greeting {
    name: string = 'World';

    constructor(private logger:Logger) {
      logger.info("Greeting created");
    }
}
