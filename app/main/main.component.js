'use strict';

angular.module('main').component('main', {
  templateUrl: 'main/main.template.html',
  // bindings: {
  //   hero: '='
  // }
  controller: ['$routeParams', 'Phone', '$scope',
      function MainCtrl($routeParams, Phone, $scope) {
          $scope.divValue = 'Hello World.';
          this.hero = {
    		    name: 'Spawn'
    		  };
		      this.sex = '0';
          this.comment = 'Hello World!';
          this.$onInit = function (){
            console.log('main component on init.');
          }
      }
    ]
});