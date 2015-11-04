import {CORE_DIRECTIVES, bootstrap, provide, Component} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {ILogger} from './services/ilogger';
import {ConsoleLogger} from './services/consolelogger';
import {HelloApp} from './hello-app';
import {Greeting} from './greeting';
import {BlueGreeting} from './bluegreeting';

@Component({
  selector: 'bootstrap',
  directives: [CORE_DIRECTIVES, HelloApp],
  template: `
    <hello-app/>
  `
})
export class Bootstrap {
  constructor(private logger: ILogger) {
    logger.info("Hello from Bootstrap");
  }
}

bootstrap(Bootstrap, [
  HelloApp,
  Greeting,
  provide(ILogger, {useClass: ConsoleLogger}),
]);
