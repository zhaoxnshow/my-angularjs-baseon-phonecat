'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('atm-common').
  component('atmTextareaFullscreen', {
    templateUrl: 'common-components/atm-textareafullscreen/atm-textareafullscreen.template.html',
    controller: ['$routeParams',
      function AtmTextareaFullscreenController($routeParams) {
        this.isBig = false;
        this.clickIcon = function(){
          this.isBig = !this.isBig;
        }
        
      }
    ]
  });