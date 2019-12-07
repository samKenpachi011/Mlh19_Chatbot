$(document).ready(function() {
    var $playButton = $("#Play");
    var $logo = $("ul.deviceableLogo");

    // Run the animation no page load
    setTimeout(function() {
        $playButton.trigger("click");
    }, 1400);

    // Toggle the animation
    $playButton.click(function() {
        $logo.toggleClass("explode");
    });

    // Clicking the logo works as well
    $logo.click(function() {
        $(this).toggleClass("explode");
    });

    // Toggle Rotation
    $("#DoRotate").change(function() {
        $logo.toggleClass("rotate");
        $playButton.trigger("click");
    });

    // For fun
    $(".deviceableLogo").draggable()

});