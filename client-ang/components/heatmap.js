angular.module('app')
  .component('heatmap', {
    bindings: {
      selectedDate: '<',
    },
    controller($scope, $http, $sce) {
      const heatmap = this;

      this.heatmap = $sce.trustAsHtml('<h3>put heatmap here</h3><h3>put heatmap here</h3><h3>put heatmap here</h3><h3>put heatmap here</h3>');
      this.heatCoords = [];

      let nola = new google.maps.LatLng(29.956541124848762, -90.07314188983946);
      let map = new google.maps.Map(document.getElementById('map'), {
        center: nola,
        zoom: 13,
        mapTypeId: 'satellite',
      });


      $scope.$watch('$ctrl.selectedDate', () => {
        if (Object.prototype.toString.call(heatmap.selectedDate) === '[object Date]') {
          // TODO: uncomment following lines, update endpoint, and use response data correctly in `then` statement
          // $http.post('/heatmap', { date: heatmap.selectedDate })
          //   .then((response) => {
          //     console.log(response.data);
          //     heatmap.heatmap = $sce.trustAsHtml(response.data);
          //   })
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
