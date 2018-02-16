angular.module('app')
  .component('heatmap', {
    bindings: {
      selectedDate: '<',
    },
    controller($scope, $http, $sce) {
      const heatmap = this;

      this.heatmap = $sce.trustAsHtml('<h3>put heatmap here</h3>');

      // make http request whenever selectedDate is updated
      $scope.$watch('$ctrl.selectedDate', () => {
        if (Object.prototype.toString.call(heatmap.selectedDate) === '[object Date]') {
          // TODO: uncomment following lines, update endpoint, and use response data correctly in `then` statement
          // $http.post('/heatmap', { body: { date: heatmap.selectedDate } })
          //   .then((response) => {
          //     heatmap.heatmap = $sce.trustAsHtml(response.data);
          //    })
          //   .catch((err) => { console.log('sorry, got an error trying to get the heat map :/'); });

          // TODO: delete following line before production:
          console.log('selected date is: ', heatmap.selectedDate, '(called in heatmap.js)');
        } else {
          console.log('Hmm, looks like the date is not actually a date. Sorry about that! ');
        }
      });
    },
    templateUrl: '/templates/heatmap.html',
  });
