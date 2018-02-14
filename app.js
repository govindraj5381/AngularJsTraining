var myapp = angular.module('myapp', ['ui.router'])
//console.log(myapp)

myapp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){

    $stateProvider.state({
        name : 'home',
        url : '/home',
        component: 'homepage'
    });

    $stateProvider.state({
        name : 'about',
        url : '/about',
        component: 'aboutpage'
    });
    $urlRouterProvider.otherwise('/home');
}]);

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