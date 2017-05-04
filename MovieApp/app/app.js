'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller("APIctrl",function($scope,$http){

        $scope.Lista=[];
  $http.get("http://www.omdbapi.com/?s=Batman")
      .then(function(response)
      {
        $scope.myData= response.data;
       angular.forEach($scope.myData.Search,function(value,key){
       $scope.Lista.push(value);
       });
      });
        $scope.Pretraga=function(){
            $http.get("http://www.omdbapi.com/?s="+$scope.movie)
                .then(function(response){
                    $scope.Lista=[];
                    $scope.myData=response.data;
                    angular.forEach($scope.myData.Search,function(value,key){
                        $scope.Lista.push(value);
                    });
                });
        };
});




