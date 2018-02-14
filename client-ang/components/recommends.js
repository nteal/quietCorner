angular.module('app')
  .component('recommends', {
    bindings: {},
    controller: function (dummyData) {
      this.name = 'name';
      this.image = '';
      this.description = '';
      this.recommendsArr = [];
      this.getRecs = function () {
        console.log('getRecs!');
        // TODO: make http request
          //assign this.recommendsArr to real data!
        this.recommendsArr = dummyData;
      },
      this.getRecs();
    },
    templateUrl: 'templates/recommends.html',
  });
