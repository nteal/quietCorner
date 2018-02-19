angular.module('app')
  .component('heatmapContainer', {
    bindings: {
      updateAppDate: '<',
      selectedDate: '<',
    },
    controller() {
      console.log('check in heatmapCont', this.updateAppDate);
    },
    templateUrl: '/templates/heatmapContainer.html',
  });
