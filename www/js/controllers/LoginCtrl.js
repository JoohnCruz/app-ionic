angular.module('starter.login', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {

    $scope.data = {};

    $scope.login = function() {
        LoginService
        	.loginUser($scope.data.username, $scope.data.password)
				.success(loginSuccess)
				.error(loginError);
    }

    function loginSuccess(data){
   		console.log('trace - login success');
	}


	function loginError(data){
		var alertPopup = $ionicPopup.alert({
	            	    title: 'Falha ao Conectar!',
	            	    template: 'Verifique seu usuario e senha!'
	   	});
	}
})



