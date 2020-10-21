$(function() {
        
    var documentEl = $(document),
        fadeElem = $('.fade-scroll');
    
    
    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();
        
        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/100);
        }); 
    });
    
});


$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    },3000);
  
    setTimeout(function() {
        $(".content2").fadeIn(1500);
    },12000);
  });
  
	
