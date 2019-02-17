$(document).ready(function () {

    M.AutoInit();

    // --- Validate if exist the class indicators --- //
    $('.slider').slider();
    sliderInterval = setInterval(() => {
        if ($('.slider').find('ul').hasClass('indicators')) {
        } else {
            $('.slider').slider();
        }
    }, 1000);

    var elem = document.querySelector('.collapsible.expandable');
    M.Collapsible.init(elem, {
        accordion: false
    });

});