var app=angular.module("MyMod",[]);
app.controller("mycontroller",function($scope)
{
    $scope.name=["xyz","IT","Comp","Mech","Abc","Coa"];
    $scope.items=[{name:"XYZ", branch:"ME"}, {name:"ABC", branch:"IT"},{name:"JAX", branch:"CE"}];
    $scope.students="IT Department";
});