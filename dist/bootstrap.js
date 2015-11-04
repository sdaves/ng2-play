System.register(['angular2/angular2', './ilogger', './consolelogger', './hello-app', './greeting'], function(exports_1) {
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
    var angular2_1, ilogger_1, consolelogger_1, hello_app_1, greeting_1;
    var Bootstrap;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (ilogger_1_1) {
                ilogger_1 = ilogger_1_1;
            },
            function (consolelogger_1_1) {
                consolelogger_1 = consolelogger_1_1;
            },
            function (hello_app_1_1) {
                hello_app_1 = hello_app_1_1;
            },
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            }],
        execute: function() {
            Bootstrap = (function () {
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
            exports_1("Bootstrap", Bootstrap);
            angular2_1.bootstrap(Bootstrap, [
                hello_app_1.HelloApp,
                greeting_1.Greeting,
                angular2_1.provide(ilogger_1.ILogger, { useFactory: function () { return new consolelogger_1.ConsoleLogger(); } }),
            ]);
        }
    }
});
