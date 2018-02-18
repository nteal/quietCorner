angular.module('app')
  .component('recommend', {
    bindings: {
      image: '<',
      name: '<',
      description: '<',
    },
    controller() {},
    templateUrl: 'templates/recommend.html',
  });
