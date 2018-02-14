angular.module('app')
  .component('recommends', {
    bindings: {
      selectedDate: '<',
    },
    controller($scope, dummyData) {
      const recommendsMod = this;
      this.name = 'name';
      this.image = '';
      this.description = '';
      this.recommendsArr = [];
      $scope.$watch('$ctrl.selectedDate', () => {
        if (Object.prototype.toString.call(recommendsMod.selectedDate) === '[object Date]') {
          // TODO: make http request using recommendsMod.selectedDate instead of following line:
          this.recommendsArr = dummyData;
          console.log(recommendsMod.selectedDate);
        } else {
          console.log('looks like your selected date is not a date :/');
        }
      });
    },
    templateUrl: 'templates/recommends.html',
  });
