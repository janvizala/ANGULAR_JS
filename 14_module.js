var app=angular.module("MyMod",[]);
app.controller("mycontroller",function($scope)
{
    $scope.reset=function()
    {
        $scope.fname="";
        $scope.email="";
    }
});