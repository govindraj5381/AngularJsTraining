var myapp = angular.module('myapp', [])
//console.log(myapp)

myapp.controller('Myctrl',['$scope','AppService', function($scope, AppService){
    $scope.myval = "Hello";

    $scope.name = "MyName";
 AppService.getStudents().then(function(result)
{
    $scope.students = result;
})
    $scope.onViewBtnClick = function(student){
        //alert("button clicked")

        //$scope.myval ="welcome"
        $scope.selectedstudent = student
    }
}])