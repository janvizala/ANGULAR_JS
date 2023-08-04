var app=angular.module("MyMod",[]);
app.controller("mycontroller",function($scope,$location,$interval,$timeout,$window)
{
    $scope.myurl=$location.absUrl();
    $scope.myprotocol=$location.protocol();
    $scope.myhost=$location.host();
    $scope.myport=$location.port();

    $scope.count=0;
    $interval(function()
    {
        $scope.count++;
    },3000);

    $scope.dept="IT Dept";
    $timeout(function()
    {
        $scope.dept="IT-A Batch";
    },5000);

    $scope.myalert=function(message)
    {
        $window.alert("Your msg is "+ message);
    }
});