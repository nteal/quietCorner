angular.module('app')
  .component('app', {
    bindings: {},
    controller() {
      const appMod = this;
      // initialize app's selectedDate to be current date
      // create updateAppDate function to pass to heatMapContainer, then to heatMapUI
      this.updateAppDate = function (selectedDate) {
        appMod.selectedDate = selectedDate;
      }.bind(appMod);
    },
    templateUrl: '/templates/app.html',
  });

