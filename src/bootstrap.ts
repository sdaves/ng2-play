import {CORE_DIRECTIVES, bootstrap, provide, Injector, bind, Component, DynamicComponentLoader} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {Logger} from './logger';
import {ILogger} from './ilogger';
import {ConsoleLogger} from './consolelogger';
import {HelloApp} from './hello-app';
import {Greeting} from './greeting';

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
