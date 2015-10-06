var app = angular.module('multiPageApp' , ['ngRoute', 'ngStorage']);

app.controller('Tab1', function($scope, $route, $routeParams, $location, $localStorage) {

    $scope.list = [];
    $scope.dumb = $localStorage;
    if($scope.dumb.list)
    {
        $scope.list = $scope.dumb.list;
    }

    $scope.addItem = function(){
        $scope.list.push({
            name: $scope.listitem
        });
        $scope.dumb.list = $scope.list;
    };
    $scope.removeItem = function(index){
    $scope.list.splice(index, 1);
      $scope.dumb.list = $scope.list;
    };

  });

app.controller('Tab2', function($scope, $route, $routeParams, $location, $localStorage) {

    $scope.list2 = [];
    $scope.dumb = $localStorage;
    if($scope.dumb.list2)
    {
        $scope.list2 = $scope.dumb.list2;
    }

    $scope.addItem = function(){
        $scope.list2.push({
            name: $scope.listitem
        });
        $scope.dumb.list2 = $scope.list2;
    };
    $scope.removeItem = function(index){
        $scope.list2.splice(index, 1);
        $scope.dumb.list2 = $scope.list2;
    };

   });


app.controller('Tab3', function($scope, $route, $routeParams, $location, $localStorage){

    $scope.list3 = [];
    $scope.dumb = $localStorage;
    if($scope.dumb.list3)
    {
        $scope.list3 = $scope.dumb.list3;
    }

    $scope.addItem = function(){
        $scope.list3.push({
            name: $scope.listitem
        });
        $scope.dumb.list3 = $scope.list3;
    };
    $scope.removeItem = function(index){
        $scope.list3.splice(index, 1);
        $scope.dumb.list3 = $scope.list3;
    };
});
  
  app.controller('MainCtrl', function($scope, $route, $routeParams, $location, $localStorage) {
      //Wipe out all local storage
      //$localStorage.$reset();
   });

 app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/tab1', {
    templateUrl: 'tab1.html',
    controller:'Tab1'
  })

  .when('/tab2', {
   templateUrl: 'tab2.html',
   controller : 'Tab2'
  })

  .when('/tab3', {
    templateUrl: 'tab3.html',
    controller : 'Tab3'

  }).
  otherwise({
        redirectTo: '/'
      });
});