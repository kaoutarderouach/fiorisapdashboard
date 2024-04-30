sap.ui.define([], function () {
    "use strict"
    return {
        statusText: function (sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "OK":
                    return resourceBundle.getText("invoiceStatusA");
                case "Critical":
                    return resourceBundle.getText("invoiceStatusB");
                case "Warning":
                    return resourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        }
    }
})
