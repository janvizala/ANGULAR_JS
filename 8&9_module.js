var app=angular.module("MyMod",[]);
app.controller("mycontroller",function($scope)
{
    $scope.employee=[{name:"A",salary:"10000"}, {name:"B",salary:"15000"}, {name:"C", salary:"18000"}];
});