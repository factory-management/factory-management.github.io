
( function() {

      'use strict';
    
myApp.controller('loginCtrl', function($scope) {
      $scope.signInScreen = true;
      $scope.pswdblankValidation = false;
      $scope.emailblankValidation=false;

    $scope.signInSubmit = function(){
      $scope.emailblankValidation=true;
      $scope.pswdblankValidation = true;
    }
    $scope.signUpSubmit = function(){
      $scope.signUpemailblankValidation=true;
      $scope.signUpPswdblankValidation = true;
    }
    $scope.resetPswd = function(){
      $scope.resetMailblankValidation=true;
    }
    $scope.signUp = function(){
      $scope.forgotPswdScreen = false;
      $scope.signInScreen = false;
      $scope.signUpScreen = true; 
           /*alert($scope.signUpScreen);*/
    }
    $scope.signIn = function(){
      $scope.signUpScreen = false;
      $scope.signInScreen = true;
    }
    $scope.forgotPswd = function(){
      $scope.signInScreen = false;
      $scope.forgotPswdScreen = true;
      /*alert($scope.signUpScreen);*/
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
