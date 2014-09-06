'use strict';

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext('2d');
// context.moveTo(100,100);
// context.lineTo(700,700);
// context.lineTo(100,700);
// context.lineTo(100,100);

// context.fillStyle="rgb(2,100,30)"
// context.fill()
// context.lineWidth = 5;
// context.strokeStyle = "red";
// context.stroke();
// context.lineWidth = 5;
// context.strokeStyle = "blue"
// context.arc(300,300,200,0,1.5*Math.PI)
// context.stroke();



/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
// angular.module('myappApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });


//我一直想要，和你一起，走上那条美丽的小路。有柔风，有白云，有你在我身旁，倾听我快乐和感激的心。——席慕容
// 你信不信我一巴掌把你踢出去
//管杀不管埋
// 问题我也是人，又不是穿山甲
// 我引用一下我自己说过的话。
//“圣贤为伍，师友同行”

var myappApp = angular.module('myappApp');

myappApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
          template: "<h2 class=\"text-success\">this is Home page</h2>",
          controller: "AppCtrl"
        })

})


myappApp.controller("AppCtrl", function($scope, $q){


    var defer = $q.defer();

    defer.promise
        .then(function(weapon){
            console.log("promise then 1 :" + weapon);

            return "bow";
        })
        .then(function(weapon){
            console.log("promise then 2 :" + weapon);

            return 'axe';
        })
        .then(function(weapon){
            console.log("promise then 3 :" + weapon);
        })

    defer.resolve('sword');

    $scope.model = {
        message :"Address: "

    }
})


myappApp.run(function(){
    console.log("this is run function");

})





