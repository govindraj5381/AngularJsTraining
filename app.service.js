var myapp = angular.module('myapp')

myapp.service('AppService', ['$http','$q',function($http,$q){

 
    this.getStudents = function()
    {
        var defer = $q.defer();
        var httppromise = $http.get("/students.json");
        httppromise.then(function(result){
             var students=result.data.map(function(item){
                item.seniority = item.age > 10 ? "S" : "J";
                return item; 
            });
            defer.resolve(students);
          });
         return defer.promise;
        //return students;
    }
}]);