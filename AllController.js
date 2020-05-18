"use strict";

angular.module("myApp").controller('UploadController', function($scope, $http,$rootScope){
	//below is client credential, will be provided while onboarding.

	$scope.salt= "";  //your client code
	$scope.saCode= "";  //your salt
	
	$scope.purpose="testing";
	$scope.calculateHash=function(){

		$scope.hash=Sha256.hash($scope.saCode+"|"+$scope.requestId+"|"+$scope.docNo+"|"+$scope.salt);
	}
	
})

angular.module("myApp").controller('HomeController', function($scope, $http,$rootScope){
    //below is client credential, will be provided while onboarding.

	$scope.salt= "";  //your client code
	$scope.saCode= "";  //your salt

	$scope.purpose="testing";
	$scope.calculateHash=function(){

		$scope.hash=Sha256.hash($scope.saCode+"|"+"ESIGN"+"|"+$scope.requestId+"|"+$scope.timeStamp+"|"+$scope.salt);
	}
	$scope.message="Welcome to AadhaarBridge ESIGN Demo";
})

angular.module("myApp").controller('StatusController', function($scope,$http,$rootScope,$location){

	$scope.init=function(){

		$scope.salt= "";  //your client code
		$scope.saCode= "";  //your salt

        $scope.success=$location.search().success;
		$scope.result=$location.search().status;
		console.log($scope.result);
		$scope.uuid=$location.search().uuid;
		console.log($scope.uuid);
		$scope.requestId=$location.search().requestId;
		console.log($scope.requestId);
		
		$scope.errorCode=$location.search().err;
		console.log($scope.errorCode);
		$scope.hash=$location.search().hash;
		console.log("recieved result hash "+$scope.hash);

		
		var hashString=$scope.salt+"|"+$scope.uuid+"|"+$scope.requestId+"|"+""+"|"+$scope.saCode+"|"+$scope.success;
		var calculateHash=Sha256.hash(hashString);
		console.log("Hash string is:"+hashString);
		console.log("calculated result hash :"+calculateHash);
		if(calculateHash==$scope.hash){
			$scope.matchSuccessHash=true;
		}else{
			$scope.matchSuccessHash=false;
		}
		
	}
	$scope.message="Hi this is StatusController changes shown";
})