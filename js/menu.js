
$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.bt-menu').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'});
			$('.how').hide(100);
			;
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'});
			$('.slideshow').show(100);
		
			;
			
					
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}