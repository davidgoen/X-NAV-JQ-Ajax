$(document).ready(function() {
	var cont = 0;
	$("#textonuevo").click(function(){
		$.ajax({
			url: "http://localhost:8000/texto.txt",
			})
		.done(function( txt ) {
			$( "#texto" ).append("<br>" + " " + cont + " " + txt +  "</br>");
			cont ++;
		});
	});
});
