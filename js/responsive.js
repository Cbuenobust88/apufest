
if ($(window).width() > 767) {
    $("img[src$='600x400']").each(function() {
        var new_src = $(this).attr("src").replace('600x400', '1200x800'); 
        $(this).attr("src", new_src); 
    });
}
