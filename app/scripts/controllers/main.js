'use strict';

var myappApp = angular.module('myappApp', ['ngAnimate']);


myappApp.service('emailService', function() {
    this.email = "";

    this.setContent = function(content) {
        this.email = content;
    };

    this.send = function(recipient) {
        return 'sending "' + this.email + '" to ' + recipient;// upstream
    };
});


myappApp.config(function($provide){
    $provide.decorator('emailService', function($delegate) {
        // myApp depends on the emailService from a third-party module, but the service is lacking a way to send email with signature.
        // To avoid reinventing the wheel and, as well as, maintaining a good habit of leaving third-party module intact,
        // I use $provide.decorator here to enhance emailService.
        $delegate.sendWithSignature = function(recipient, signature) {
            return 'sending(delegate) "' + this.email + '" to ' + recipient + " by " + signature;
        };
        return $delegate;
    });

});

myappApp.controller("AppCtrl",function(emailService){
    emailService.setContent("Greeting!!");
    this.emailComplete = emailService.sendWithSignature('a@a.com', 'tamakisquare');
});









