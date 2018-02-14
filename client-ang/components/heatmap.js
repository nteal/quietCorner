angular.module('app')
  .component('heatmap', {
    bindings: {
      selectedDate: '<',
    },
    controller($scope) {
      const heatmap = this;
      $scope.$watch('$ctrl.selectedDate', () => {
        if (Object.prototype.toString.call(heatmap.selectedDate) === '[object Date]') {
          // TODO: make http req to get heatmap for correct date
          // console.log('selected date is: ', heatmap.selectedDate, '(called in heatmap.js)');
        } else {
          console.log('looks like your date is not a date...');
        }
      });
    },
    templateUrl: '/templates/heatmap.html',
  });
