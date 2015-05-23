// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var items = [];
    WinJS.UI.Pages.define("/pages/Redmond/redmond.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var listView = document.getElementById("listView2").winControl;
            listView.oniteminvoked = handler;
            function handler(eventInfo) {
                eventInfo.detail.itemPromise.then(function (item) {
                    WinJS.Navigation.navigate("/pages/House/house.html", item.data);
                });
            }
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

    var itemArray = [
                    
                    {
                        title: "Cream House", text: "Tukwila", description: "Donec tincidunt pretium fermentum. Nulla leo ante, consectetur ut varius vitae, malesuada eleifend quam. Suspendisse id dolor turpis. Cras ultricies ex nec lorem tempus lobortis. Nunc ut leo cursus, fermentum libero sit amet, varius dui. In ut velit eleifend, rutrum dolor quis, imperdiet tortor. Maecenas viverra a magna sed porta. Vestibulum et molestie odio.",
                        rating: "3.3", price: "$22/day", space: "9'x 4'", picture: "http://upload.wikimedia.org/wikipedia/commons/3/34/Melbourne_cream_house.jpg"
                    },
                     {
                         title: "Bones", text: "15th avenue", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin vitae odio sit amet facilisis. Mauris diam dui, semper eget interdum ultricies, lacinia vitae tellus. Morbi eu eleifend urna. Nullam ultricies risus a dolor sagittis, a volutpat dolor dignissim. Proin lacinia eget purus eget fermentum. Curabitur egestas massa ante, nec commodo magna tempor a. Mauris tincidunt, elit ac tincidunt pulvinar, tortor lacus vehicula ligula, vel lobortis sapien nulla at urna. Duis condimentum metus ac felis iaculis feugiat. Donec quis lorem ut magna faucibus blandit eget vel quam. Donec vitae lobortis ipsum. Pellentesque libero mauris, hendrerit et augue id, varius elementum quam. Quisque ornare faucibus convallis. Nam in urna quam.",
                         rating: "3", price: "$15/day", space: "3'x 3'", picture: "http://www3.featuredwebsite.com/users/47417/images/houseeee.jpg"
                     },
                    {
                        title: "My abode", text: "Capitor Hill", description: "Quisque nec lobortis leo. Mauris vitae luctus augue. Cras volutpat est leo, in vestibulum enim fermentum at. Donec risus purus, viverra et purus sit amet, facilisis dignissim augue. Donec fringilla aliquam ultrices. Nulla venenatis leo posuere enim porta, ac laoreet felis tincidunt. Nunc ante lorem, tempus at posuere quis, pulvinar a quam. Nullam in convallis odio. Donec sodales risus est, ac pharetra urna lacinia ut. Nam vestibulum, massa eu maximus bibendum, erat massa ornare lacus, eu aliquet libero eros quis tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse hendrerit turpis maximus, finibus felis vitae, iaculis lectus.",
                        rating: "5", price: "$20/day", space: "10'x 10'", picture: "http://charlie.realtytimes.com/media/k2/items/cache/fbd74a47b254fb70312d08b81fbfb87a_L.jpg"
                    },
                    {
                        title: "MacMillan House", text: "Mercer Island", description: "Quisque nec lobortis leo. Mauris vitae luctus augue. Cras volutpat est leo, in vestibulum enim fermentum at. Donec risus purus, viverra et purus sit amet, facilisis dignissim augue. Donec fringilla aliquam ultrices. Nulla venenatis leo posuere enim porta, ac laoreet felis tincidunt. Nunc ante lorem, tempus at posuere quis, pulvinar a quam. Nullam in convallis odio. Donec sodales risus est, ac pharetra urna lacinia ut. Nam vestibulum, massa eu maximus bibendum, erat massa ornare lacus, eu aliquet libero eros quis tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse hendrerit turpis maximus, finibus felis vitae, iaculis lectus.",
                        rating: "2", price: "$10/day", space: "11'x 2'", picture: "https://www.bowdoin.edu/reslife/images/MacMillan.jpg"
                    },
                    {
                        title: "My abode", text: "Capitor Hill", description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut est et odio rutrum gravida. Ut pretium fermentum ligula, eu facilisis erat feugiat eget. Duis pharetra auctor mi, et efficitur nisi laoreet id. Nulla ullamcorper mattis dolor at pharetra. Sed imperdiet orci eget ex auctor venenatis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vulputate nec quam in viverra.",
                        rating: "5", price: "$25/day", space: "15'x 10'", picture: "http://clv.h-cdn.co/assets/cm/15/10/640x480/gallery_54f0d9d889efa_-_01-millertinyhouse-048-edit1-lgn.jpg"
                    },
                   
                    {
                        title: "Ye Ol' House", text: "Kenmore", description: "Integer vitae cursus ligula. Donec sollicitudin efficitur quam, semper vulputate ante congue ut. Vestibulum cursus accumsan malesuada. Nullam consequat in magna ut pharetra. Duis sit amet auctor nisi, eu malesuada ligula. Nunc tempor lectus ac libero molestie, faucibus iaculis augue ultrices. Aliquam sed sem mauris. In interdum sem ut vehicula fermentum. Morbi magna mauris, hendrerit ut quam luctus, feugiat porttitor nunc. Nullam malesuada dignissim nibh. Sed viverra luctus urna sit amet tempus. Suspendisse quis purus eu nisi mollis cursus. Integer ut luctus velit, eu eleifend mi.",
                        rating: "4", price: "$13/day", space: "10'x 13'", picture: "http://blog.preservationnation.org/wp-content/uploads/2012/05/colonial-house.jpg"
                    }
    ];
    for (var i = 0; i < 10; i++) {
        itemArray.forEach(function (item) {
            items.push(item);
        });
    }


    WinJS.Namespace.define("Redmond.ListView", {
        data: new WinJS.Binding.List(items)
    });


    //function doClickItem() {

    //}



    WinJS.UI.processAll();

})();
