angular.module('app')
  .component('recommends', {
    bindings: {
      selectedDate: '<',
    },
    // TODO: delete dummy data from dependencies (and everywhere else)
    controller($scope, $http, dummyData) {
      const recommendsMod = this;

      this.name = 'name';
      this.image = '';
      this.description = '';
      this.recommendsArr = [];

      // create grid styling for recommendations:
      this.getGridWidth = index => (index === 1 ? 'su-col-2' : 'su-col-edge-2');

      // make http req whenever selectedDate is updated
      $scope.$watch('$ctrl.selectedDate', () => {
        if (Object.prototype.toString.call(recommendsMod.selectedDate) === '[object Date]') {
          // TODO: uncomment following lines, update endpoint, and use response data correctly in `then` statement
          // $http.post('/recommendations', { date: recommendsMod.selectedDate })
          //   // currently expecting response to give back array of objs
          //   // expecting objs to have name, description, and image url for each event
          //   // need to update recommendsMod.recommendsArr to be the array of objs you get back
          //   .then((response) => { console.log('recommends data is:', response.data); })
          //   .catch((err) => { console.log('sorry, got an error trying to get the recommendations :/'); });

          // TODO: delete following two lines:
          this.recommendsArr = dummyData.slice(0, 3);
          console.log(recommendsMod.selectedDate);
        } else {
          console.log('looks like your selected date is not a date :/');
        }
      });
    },
    templateUrl: 'templates/recommends.html',
  });
