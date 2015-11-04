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
var ilogger_1 = require('./ilogger');
var consolelogger_1 = require('./consolelogger');
var hello_app_1 = require('./hello-app');
var greeting_1 = require('./greeting');
var Bootstrap = (function () {
    function Bootstrap(logger) {
        this.logger = logger;
        logger.info("Hello from Bootstrap");
    }
    Bootstrap = __decorate([
        angular2_1.Component({
            selector: 'bootstrap',
            directives: [angular2_1.CORE_DIRECTIVES, hello_app_1.HelloApp],
            template: "\n    <hello-app/>\n  "
        }), 
        __metadata('design:paramtypes', [ilogger_1.ILogger])
    ], Bootstrap);
    return Bootstrap;
})();
exports.Bootstrap = Bootstrap;
angular2_1.bootstrap(Bootstrap, [
    hello_app_1.HelloApp,
    greeting_1.Greeting,
    angular2_1.provide(ilogger_1.ILogger, { useFactory: function () { return new consolelogger_1.ConsoleLogger(); } }),
]);
