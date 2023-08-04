var app=angular.module("MyMod",[]);
app.controller("mycontroller",function($scope)
{
    $scope.name=["xyz","IT","Comp","Mech","Abc","Coa"];
    $scope.items=[{name:"XYZ", branch:"ME"}, {name:"ABC", branch:"IT"},{name:"JSX", branch:"CE"}];
    $scope.abc=function(x)
    {
        $scope.empn=x;
    }
})