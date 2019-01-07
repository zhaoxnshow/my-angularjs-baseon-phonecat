angular.module('hero-detail').component('heroDetail', {
  templateUrl: 'hero-detail/hero-detail.template.html',
  bindings: {
    hero: '=',
    sex: '=',
    comment: '@'
  }
});