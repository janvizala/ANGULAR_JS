var app=angular.module("MyMod",[]);
app.controller("mycontroller",function($scope)
{
    $scope.myarr=["ABC","XYZ"];
    $scope.myfile="array.html";
    $scope.form=function()
    {
        $scope.include="print_form.html";
    }
});