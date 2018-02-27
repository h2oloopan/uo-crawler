var page = require('webpage').create();
var url = 'https://www.urbanoutfitters.com/en-ca/shop/champion-uo-novelty-graphic-hoodie-sweatshirt?category=SHOPBYBRAND&color=045&quantity=1&type=REGULAR';

function sendMail(sizes) {
    var email = {
        from: "vivi@vivi23.com",
        to: "panshengying@hotmail.com",
        subject: "Champion & UO Novelty Graphic Hoodie Available!",
        text: "Available sizes: " + sizes.join()
    }
}


page.onConsoleMessage = function(msg) {
    console.log('Sandbox Message: ' + msg);
}
page.open(url, function(status) {
    if (status === 'success') {
        console.log("UO page loaded!");
        page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', function() {
            page.evaluate(function() {
                // lastest version on the web
                var sizesWanted = ["XS", "S", "XL"];
                var xs = $('input.js-size-select[value="XS"]');
                var s = $('input.js-size-select[value="S"]');
                var xl = $('input.js-size-select[value="XL"]');
                var hasXS = xs.attr("disabled") !== "disabled";
                var hasS = s.attr("disabled") !== "disabled";
                var hasXL = xl.attr("disabled") !== "disabled";

                console.log("Has XS? " + hasXS);
                console.log("Has XL? " + hasXL);
                /*
                var availables = [];
                if (hasXS) {
                    availables.push("XS");
                }
                if (hasS) {
                    availables.push("S");
                }
                if (availables.length > 0) {
                    sendMail(availables);
                }
                */
            });
            phantom.exit(0);
        });
    } else {
        phantom.exit(1);
    }
});