System.register(['angular2/angular2', 'angular2/core', './greeting', './ilogger'], function(exports_1) {
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
    var angular2_1, core_1, greeting_1, ilogger_1;
    var HelloApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            },
            function (ilogger_1_1) {
                ilogger_1 = ilogger_1_1;
            }],
        execute: function() {
            HelloApp = (function () {
                function HelloApp(logger) {
                    this.logger = logger;
                    logger.info("HelloApp created");
                }
                HelloApp = __decorate([
                    core_1.Injectable(),
                    angular2_1.Component({
                        selector: 'hello-app',
                        directives: [greeting_1.Greeting],
                        template: "\n        <div>Welcome to Angular 2!</div>\n        <greeting/>\n    "
                    }), 
                    __metadata('design:paramtypes', [ilogger_1.ILogger])
                ], HelloApp);
                return HelloApp;
            })();
            exports_1("HelloApp", HelloApp);
        }
    }
});
