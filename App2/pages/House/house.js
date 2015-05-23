// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
  
    WinJS.UI.Pages.define("/pages/House/house.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {

        },
        ready: function (element, options) {
            // TODO: Initialize the page here.
           
            var templateElement = document.querySelector("#templateDiv");
            var renderElement = document.querySelector("#templateControlRenderTarget");

            templateElement.winControl.render(options)
                    .done(function (result) {
                        renderElement.appendChild(result);
                    });

            /////////////////
            var bought;

            //Show the flyout
            function showConfirmFlyout() {
                bought = false;
                document.getElementById("confirmFlyout").winControl.show(document.getElementById("buyButton"));
            }

            // When the Buy button is pressed, hide the flyout since the user is done with it.
            function confirmOrder() {
                bought = true;
                alert("You have completed your purchase.");
                document.getElementById("confirmFlyout").winControl.hide();
            }

            // On dismiss of the flyout, determine if it closed because the user pressed the buy button. If not, then the
            // flyout was light dismissed.
            function onDismiss() {
                if (!bought) {
                    log("The purchase was not completed.");
                }
            }


            WinJS.UI.processAll().then(function () {
                document.getElementById("buyButton").addEventListener("click", showConfirmFlyout, false);
                document.getElementById("confirmButton").addEventListener("click", confirmOrder, false);
                document.getElementById("confirmFlyout").addEventListener("afterhide", onDismiss, false);
            });
            //////////

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
            //document.getElementById('house').addEventListener('invoked', this.goThere());
        }
    });


   

})();
