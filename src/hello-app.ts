import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {Greeting} from './greeting';
import {Logger} from './logger';

@Injectable()
@Component({
    selector: 'hello-app',
    providers: [Logger],
    directives: [Greeting],
    template: `
        <div>Welcome!</div>
        <greeting/>
    `
})
export class HelloApp {
  constructor(private logger: Logger) {
    logger.info("HelloApp created");
  }
}
