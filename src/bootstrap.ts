import {CORE_DIRECTIVES, bootstrap, provide, Injector, bind, Component, DynamicComponentLoader} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {Logger} from './logger';
import {ConsoleLogger} from './consolelogger';
import {HelloApp} from './hello-app';
import {Greeting} from './greeting';

const customInjector = Injector.resolveAndCreate([
  HelloApp,
  Greeting,
  provide(Logger, {useClass: ConsoleLogger}),
]);

@Component({
  selector: 'bootstrap',
  directives: [CORE_DIRECTIVES, HelloApp],
  template: `
    <hello-app *ng-for="#item of items"/>
  `
})
export class Bootstrap {
  items: Array<HelloApp> = [];
  constructor() {
    let instance: HelloApp = customInjector.get(HelloApp);
    this.items.push(instance);
  }
}

bootstrap(Bootstrap);
