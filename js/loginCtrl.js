
( function() {

      'use strict';
    
myApp.controller('loginCtrl', function($scope, $state) {
    var vm = this;
    vm.signInScreen = true;
    $scope.active1 = false;
    $scope.active2 = false;
    $scope.active3 = false;
    
    var myDate = new Date();
    var hrs = myDate.getHours();
      if (hrs < 12)
          $scope.greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
            $scope.greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
            $scope.greet = 'Good Evening';

    vm.signInSubmit = function(){   
      if((vm.signIn.email =='') || (vm.signIn.email ==undefined) || (vm.signIn.password =='') || (vm.signIn.password ==undefined)){
              $scope.emailblankValidation=true;
              $scope.pswdblankValidation = true;
          }else{
              $state.go('task')
        }
    };
    vm.signUpSubmit = function(){
      if((vm.signUp.email =='') || (vm.signUp.email ==undefined) || (vm.signUp.password =='') || (vm.signUp.password ==undefined)){
              $scope.signUpemailblankValidation=true;
              $scope.signUpPswdblankValidation=true;
          }else{
              vm.signUpScreen = false;
              vm.successSignUpScreen =true;
        }
    };
    vm.resetPswd = function(){
      $scope.resetMailblankValidation=true;
      if((vm.reset.email =='') || (vm.reset.email ==undefined)){
              $scope.resetMailblankValidation=true;
          }else{
              vm.forgotPswdScreen=false;
              vm.pswdResetScreen=true;
        }  
    }

    vm.signUp = function(){
      vm.forgotPswdScreen = false;
      vm.signInScreen = false;
      vm.pswdResetScreen = false;
      vm.signUpScreen = true;
    }
    vm.signIn = function(){
      vm.signUpScreen = false;
      vm.signInScreen = true;
    }
    vm.forgotPswd = function(){
      vm.signInScreen = false;
      vm.forgotPswdScreen = true;
    }      
  })
}());
