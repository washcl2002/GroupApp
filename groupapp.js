var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'view.html',
    controller: 'resultCtrl'
  });
  
  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'resultCtrl'
  });
  });

// app.factory('instagram', ['$http', function($http){
//   return {
//     fetchPopular: function(callback){
//             // 
//             var endPoint = "https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=b5a2b89acaf74f47aebb9aca4653bc4e&callback=JSON_CALLBACK";
            
// // http://essquare.co/#access_token=
// // https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN
//             $http.jsonp(endPoint).success(function(response){
//                 callback(response.data);
//             });
//     }
//   }
// }]);

app.controller('resultCtrl', ['$scope', 'instagram' ,function ($scope, instagram){

   // instagram.fetchPopular(function(data){
   //  console.log(data)
     //$scope.pics = data;
   // });
function search($scope){
	searchterm = $scope.srch;

		var endPoint = "https://api.instagram.com/v1/tags/" + searchterm + "/media/recent?client_id=b5a2b89acaf74f47aebb9aca4653bc4e&callback=JSON_CALLBACK";
            
// http://essquare.co/#access_token=
// https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
console.log(data);
}
}]);


