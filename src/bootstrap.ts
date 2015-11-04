import {CORE_DIRECTIVES, bootstrap, provide, Component} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {ILogger} from './services/ilogger';
import {ConsoleLogger} from './services/consolelogger';
import {HelloApp} from './hello-app';
import {Greeting} from './greeting';

bootstrap(HelloApp, [
  Greeting,
  provide(ILogger, {useClass: ConsoleLogger}),
]);
