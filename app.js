var myapp = angular.module('myapp', [])
//console.log(myapp)

myapp.controller('Myctrl',['$scope','AppService', function($scope, AppService){
    $scope.myval = "Hello";
    
 AppService.getStudents().then(function(result)
{
    $scope.students=result.data.map(function(item){
        item.seniority = item.age > 10 ? "S" : "J";
        return item; 
    });
})
    $scope.onViewBtnClick = function(student){
        //alert("button clicked")

        //$scope.myval ="welcome"
        $scope.selectedstudent = student
    }
}])