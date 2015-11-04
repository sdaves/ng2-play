System.register(['angular2/angular2', './services/ilogger', './services/consolelogger', './hello-app', './greeting'], function(exports_1) {
    var angular2_1, ilogger_1, consolelogger_1, hello_app_1, greeting_1;
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
            angular2_1.bootstrap(hello_app_1.HelloApp, [
                greeting_1.Greeting,
                angular2_1.provide(ilogger_1.ILogger, { useClass: consolelogger_1.ConsoleLogger }),
            ]);
        }
    }
});
