System.register(['angular2/angular2', 'angular2/core', './ilogger'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, core_1, ilogger_1;
    var Greeting;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ilogger_1_1) {
                ilogger_1 = ilogger_1_1;
            }],
        execute: function() {
            Greeting = (function () {
                function Greeting(logger) {
                    this.logger = logger;
                    this.name = 'World';
                    logger.info("Greeting created");
                }
                Greeting = __decorate([
                    core_1.Injectable(),
                    angular2_1.Component({
                        selector: 'greeting',
                        template: "\n        <h1>Hello, {{name}}!</h1>\n        Say hello to: <input [value]=\"name\" (input)=\"name = $event.target.value\">\n    "
                    }), 
                    __metadata('design:paramtypes', [ilogger_1.ILogger])
                ], Greeting);
                return Greeting;
            })();
            exports_1("Greeting", Greeting);
        }
    }
});
