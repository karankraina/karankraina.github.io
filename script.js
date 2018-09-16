$.fn.gotoAnchor = function (anchor) {
    location.href = this.selector;
}

$('#1').gotoAnchor();

$(document).ready(function () {
    $("#btn1").on("tap", function () {
        //alert("click working")
        // $("#btn1").removeClass("bounceIn").addClass("rollOut").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
            window.location.href = "learning/main.html"
        // });
    });
    $("#btn2").on("tap", function () {
        //alert("click working")
        // $("#btn1").removeClass("bounceIn").addClass("rollOut").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
            window.location.href = "lalded/index.html"
        // });
    });
    $("#btn3").on("tap", function () {
        //alert("click working")
        // $("#btn1").removeClass("bounceIn").addClass("rollOut").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
            window.location.href = "translate.html"
        // });
    });
    $("#btn4").on("tap", function () {
        //alert("click working")
        // $("#btn1").removeClass("bounceIn").addClass("rollOut").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
            $("vadsa").gotoAnchor();
        });
    // });
});