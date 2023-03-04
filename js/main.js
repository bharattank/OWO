jQuery(document).ready(function (e) {
    $bodyhtml = e("html, body"), jQuery(".search-icon").click(function () {
        jQuery(".search-box1").toggle()
    });
    var a = jQuery("#owl-demo");
    a.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 3],
            [1e3, 4],
            [1280, 4]
        ],
        navigation: !0
    }), jQuery('[data-toggle="tooltip"]').tooltip(), jQuery(".down-arrow").bind("click", function () {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, 1200), !1
    });
    var o = e(window),
            l = e(".down-arrow"),
            i = 220,
            r = 500;
    o.on("scroll", function () {
        e(this).scrollTop() > i ? l.fadeIn(r) : l.fadeOut(r)
    }), o.on("load", function () {
        e(".loader-box").fadeOut("slow")
    }), e("a.page-scroll").on("click", function (t) {
        t.preventDefault();
        var a = e(this);
        $bodyhtml.stop().animate({
            scrollTop: e(a.attr("href")).offset().top
        }, 1500, "swing")
    }), e(".test-popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), e(".footer-popup-images").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), jQuery(".video-play").length > 0 && jQuery(".video-play").magnificPopup({
        type: "iframe",
        removalDelay: 300,
        mainClass: "mfp-fade"
    }), jQuery(".business-video").length > 0 && jQuery(".business-video").magnificPopup({
        type: "iframe",
        removalDelay: 300,
        mainClass: "mfp-fade"
    }), e(window).scroll(function () {
    });
    
    $("a.page-scroll").on('click',function(){
        $("button.navbar-toggle").trigger("click");        
    });
});
function contactAddressMap() {
    var e = new google.maps.LatLng(-33.8687999, 151.1392549),
            t = document.getElementById("googleMap"),
            a = {
                center: e,
                zoom: 10,
                scrollwheel: !1,
                styles: [{
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                                color: "#444444"
                            }]
                    }, {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{
                                color: "#f2f2f2"
                            }]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{
                                visibility: "off"
                            }]
                    }, {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{
                                saturation: -100
                            }, {
                                lightness: 45
                            }]
                    }, {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{
                                visibility: "simplified"
                            }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                                visibility: "off"
                            }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                                visibility: "off"
                            }]
                    }, {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{
                                color: "#46bcec"
                            }, {
                                visibility: "on"
                            }]
                    }]
            },
    o = new google.maps.Map(t, a),
            l = new google.maps.Marker({
                position: e,
                icon: "http://preview.templety.com/owo/image/map-icon.png"
            });
    l.setMap(o)
}