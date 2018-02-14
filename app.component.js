var myapp = angular.module('myapp')

myapp.component('studentDetails',{ 
templateUrl : 'student-details.tpl.html',
bindings :{
    myTitle : '@',
    currentStudent : '<'
},
controller : [function(){
    this.myname = "custom component"
}]});

myapp.component('homepage',{
    template : '<div> this is home page from component</div>'
});


myapp.component('aboutpage',{
    template : '<div> this is about page from component</div>'
});