//SCROLL TO BOTTOM


jQuery(document).ready(function() {

    var duration = 700;
    
    
    jQuery('.btn--scroll').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: $('#main').offset().top }, duration);
        return false;
    })
});
