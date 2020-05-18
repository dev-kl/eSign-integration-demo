var app=angular.module('myApp', ['ngRoute'])

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {

      //config.headers['Access-Control-Allow-Origin'] = '*';
      config.headers['MyName'] = 'Ashish';

      return config;
    }
  };
});

app.run(function($rootScope){
	$rootScope.aadhaarId="";
	$rootScope.saCode="";
    $rootScope.salt="";
})

app.config(["$routeProvider","$httpProvider", function($routeProvider,$httpProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$routeProvider
	.when('/', {
		templateUrl : 'home.html'
	})
	.when('/index', {
		templateUrl : 'home.html'                       // eSign Init API (_init)
	})
	.when('/status', {
		templateUrl : 'status.html',                    //Document Download API ( _download)
		controller  : 'StatusController'
	})
	.when('/upload', {
		templateUrl : 'upload.html',                 //Document Upload API ( _upload )
		controller : 'UploadController'
	})
	.otherwise({redirectTo: '/'});

}]);

