angular.module('app')
  .component('heatmapUi', {
    bindings: {},
    controller: function () {
      // make datepicker
      this.date = new Date();
      this.minDate = new Date();
      this.maxDate = new Date();
    },
    templateUrl: '/templates/heatmapUI.html',
  });
