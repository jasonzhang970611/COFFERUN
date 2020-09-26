(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var truck = new Truck('ncc-1701', new DataStore());
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    window.truck = truck;
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);

  // formHandler.addSubmitHandler(truck.createOrder.bind(truck));
    formHandler.addSubmitHandler(function (data) {
        truck.createOrder.call(truck, data);
        checkList.addRow.call(checkList, data);
    });
  console.log(formHandler);
})(window);