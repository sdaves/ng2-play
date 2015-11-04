System.register(['angular2/angular2', 'angular2/core', './services/ilogger', './greeting'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var angular2_1, core_1, ilogger_1, greeting_1;
    var BlueGreeting;
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
            },
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            }],
        execute: function() {
            BlueGreeting = (function (_super) {
                __extends(BlueGreeting, _super);
                function BlueGreeting(logger) {
                    _super.call(this, logger);
                    this.name = "Blue";
                }
                BlueGreeting = __decorate([
                    core_1.Injectable(),
                    angular2_1.Component({
                        selector: 'greeting',
                        styles: ['greeting { color:blue; }'],
                    }), 
                    __metadata('design:paramtypes', [ilogger_1.ILogger])
                ], BlueGreeting);
                return BlueGreeting;
            })(greeting_1.Greeting);
            exports_1("BlueGreeting", BlueGreeting);
        }
    }
});
