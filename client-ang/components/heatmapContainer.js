angular.module('app')
  .component('heatmapContainer', {
    bindings: {
      updateAppDate: '<',
    },
    controller() {
      console.log('check in heatmapCont', this.updateAppDate);
    },
    templateUrl: '/templates/heatmapContainer.html',
  });
