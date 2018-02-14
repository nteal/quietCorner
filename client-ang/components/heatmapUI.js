angular.module('app')
  .component('heatmapUi', {
    bindings: {
      updateAppDate: '<',
    },
    controller() {
      // make datepicker
      const heatUiMod = this;
      this.selectDate = (newDate) => {
        const selectedDate = new Date(newDate);
        // update app's selectedDate:
        this.updateAppDate(selectedDate);
      };
      this.date = new Date();
      this.dateNum = this.date.getDate();
      this.minDate = new Date();
      this.minDate.setDate(heatUiMod.dateNum - 1);
      this.maxDate = new Date();
      this.maxDate.setDate(heatUiMod.dateNum + 7);
    },
    templateUrl: '/templates/heatmapUI.html',
  });
