System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var ConsoleLogger;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConsoleLogger = (function () {
                function ConsoleLogger() {
                    this.info("consolelogger created");
                }
                ConsoleLogger.prototype.info = function (value) {
                    console.info("consolelogger:" + value);
                };
                ConsoleLogger = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ConsoleLogger);
                return ConsoleLogger;
            })();
            exports_1("ConsoleLogger", ConsoleLogger);
        }
    }
});
