var app=angular.module("MyMod",[]);
app.controller("Mycontroller",function($scope)
{
    $scope.students=["IT","ICT","CE"];
    $scope.branch={branch:"IT",students:38};
    $scope.items=[{name:"ABC", branch:"IT"}, {name:"XYZ", branch:"ICT"}];
});