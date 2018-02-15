angular.module('app')
  .component('heatmapUi', {
    bindings: {
      updateAppDate: '<',
    },
    controller() {
      const heatUiMod = this;

      // create startDate (current date), minDate, and maxDate for date picker to use:
      this.date = new Date();
      this.dateNum = this.date.getDate();
      this.minDate = new Date();
      this.minDate.setDate(heatUiMod.dateNum - 1);
      this.maxDate = new Date();
      this.maxDate.setDate(heatUiMod.dateNum + 7);

      this.selectDate = (newDate) => {
        const selectedDate = new Date(newDate);
        // update app's selectedDate:
        this.updateAppDate(selectedDate);
      };
    },
    templateUrl: '/templates/heatmapUI.html',
  });
