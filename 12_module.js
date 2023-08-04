var app=angular.module("MyMod",['ngRoute']);
app.config(["$routeProvider",function($routeProvider)
{
    $routeProvider.when("/page1",{templateUrl:"views/page1.html"}).
    when("/page2",{templateUrl:"views/page2.html"}).
    otherwise({redirectTo:"12_ngRoute.html"});
}]);
app.controller("mycontroller",function($scope){});