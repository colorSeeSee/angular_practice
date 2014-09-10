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


myappApp.provider('game', function(){
    var type;
    return {
        setType: function(value){
            type = value;
        },
        $get: function() {
            return {
                title: type+ "-" + "Craft"
            }
        }
    }

})

// 这个config在最开始执行，注意这里要用game的话要写成 gameProvider (用下面 factory 或者在 controller 的那种不用)
myappApp.config(function(gameProvider){
    gameProvider.setType("war");
})

// 写法2： 这里的 factory 其实是 provide 的一种简化写法
//myappApp.factory("game",function(){
//    return {
//        title: "StarCraft"
//    }
//})


myappApp.controller("AppCtrl", function($scope, game){

    $scope.model = {
        message : game.title
    }

})





