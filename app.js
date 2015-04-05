var app=angular.module("myApp",['ui.unique']);
app.controller("MainController",function($scope){
	$scope.items=[
	{id:1,fn:'John',ln:'Smith'},
	{id:2,fn:'Johnny',ln:'Sith'},
	{id:3,fn:'Jhon',ln:'Smth'},
	{id:4,fn:'John',ln:'Sth'},
	{id:5,fn:'Jnod',ln:'Smith'},
	{id:6,fn:'Jasd',ln:'Shdasd'},
	];
});
