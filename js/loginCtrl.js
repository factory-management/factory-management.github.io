
( function() {

      'use strict';
    
myApp.controller('loginCtrl', function($scope) {
      $scope.signInScreen = true;
      $scope.signUpScreen = false;
      $scope.forgotPswdScreen = false;
      $scope.pswdResetScreen = false; 
      $scope.successSignUpScreen = false;
      $scope.pswdblankValidation = false;
      $scope.emailblankValidation=false;

    $scope.signInSubmit = function(){
      $scope.emailblankValidation=true;
      $scope.pswdblankValidation = true;
    }
    $scope.signUp = function(){
      $scope.signUpScreen = true;
      $scope.signInScreen = false;
      
      alert($scope.signUpScreen);
    }

     var myDate = new Date();
        var hrs = myDate.getHours();
        if (hrs < 12)
             $scope.greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
             $scope.greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
             $scope.greet = 'Good Evening';
    })
}());
