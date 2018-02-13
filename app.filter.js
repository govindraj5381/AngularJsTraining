var myapp = angular.module('myapp')

myapp.filter('customName', [function(){
return function(value, greetings){
 //return greetings + "value from filter is "+ value;
 return greetings + " "+ value.substr(0,2).toUpperCase();
};
}]);
