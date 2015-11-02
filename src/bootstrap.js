var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var logger_1 = require('./logger');
var consolelogger_1 = require('./consolelogger');
var hello_app_1 = require('./hello-app');
var greeting_1 = require('./greeting');
var customInjector = angular2_1.Injector.resolveAndCreate([
    hello_app_1.HelloApp,
    greeting_1.Greeting,
    angular2_1.provide(logger_1.Logger, { useClass: consolelogger_1.ConsoleLogger }),
]);
var Bootstrap = (function () {
    function Bootstrap() {
        this.items = [];
        var instance = customInjector.get(hello_app_1.HelloApp);
        this.items.push(instance);
    }
    Bootstrap = __decorate([
        angular2_1.Component({
            selector: 'bootstrap',
            directives: [angular2_1.CORE_DIRECTIVES, hello_app_1.HelloApp],
            template: "\n    <hello-app *ng-for=\"#item of items\"/>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Bootstrap);
    return Bootstrap;
})();
exports.Bootstrap = Bootstrap;
angular2_1.bootstrap(Bootstrap);
