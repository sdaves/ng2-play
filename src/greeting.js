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
var core_1 = require('angular2/core');
var logger_1 = require('./logger');
var Greeting = (function () {
    function Greeting(logger) {
        this.logger = logger;
        this.name = 'World';
        logger.info("Greeting created");
    }
    Greeting = __decorate([
        core_1.Injectable(),
        angular2_1.Component({
            selector: 'greeting',
            providers: [logger_1.Logger],
            template: "\n        <h1>Hello, {{name}}!</h1>\n        Say hello to: <input [value]=\"name\" (input)=\"name = $event.target.value\">\n    "
        }), 
        __metadata('design:paramtypes', [logger_1.Logger])
    ], Greeting);
    return Greeting;
})();
exports.Greeting = Greeting;
