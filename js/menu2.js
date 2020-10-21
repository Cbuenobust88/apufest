
$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.bt-menu').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'});
			$('.slideshow').hide(100);
			let myElement = document.querySelector("#navegador");
			myElement.style.marginTop = "340px";
			;
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'});
			$('.slideshow').show(100);
			let myElement = document.querySelector("#navegador");
			myElement.style.marginTop = "0px";
			;
			
					
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}