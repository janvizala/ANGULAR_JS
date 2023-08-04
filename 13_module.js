var app=angular.module("MyMod",['ngRoute']);
app.config(["$routeProvider",function($routeProvider)
{
    $routeProvider.when("/tutorials",{templateUrl:"single-page-application/tutorials.html",controller:"tutor"}).
    when("/references",{templateUrl:"single-page-application/references.html",controller:"refer"}).
    when("/exercises",{templateUrl:"single-page-application/exercises.html",controller:"exer"}).
    when("/signup",{templateUrl:"single-page-application/signup.html",controller:"signup"}).
    when("/login",{templateUrl:"single-page-application/login.html",controller:"login"}).
    otherwise({redirectTo:"13_singlepage_app.html"});
}]);
app.controller("tutor",function($scope){});
app.controller("refer",function($scope){});
app.controller("exer",function($scope){});
app.controller("signup",function($scope){});
app.controller("login",function($scope){});
