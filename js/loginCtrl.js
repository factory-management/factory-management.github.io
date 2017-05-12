
( function() {

      'use strict';
    
myApp.controller('loginCtrl', function($scope) {
      $scope.pswdblankValidation = false;
      $scope.emailblankValidation=false;

    $scope.signInSubmit = function(){
        $scope.emailblankValidation=true;
        $scope.pswdblankValidation = true;
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
