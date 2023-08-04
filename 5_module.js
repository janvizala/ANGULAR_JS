var app=angular.module("MyMod",[]);
app.controller("Mycontroller",function($scope)
{
    $scope.name="IT Department";
    $scope.num=25000;
    $scope.mydate=new Date();
});