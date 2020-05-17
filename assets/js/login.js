$(function(){
	
	$.support.css3d = supportsCSS3D();
	
	var formContainer = $('#formContainer');
	

	$('.flipLink').click(function(e){
		
		formContainer.toggleClass('flipped');
		

		if(!$.support.css3d){
			$('#login').toggle();
		}
		e.preventDefault();
	});
	
	formContainer.find('form').submit(function(e){

		e.preventDefault();
	});
	
	

	function supportsCSS3D() {
		var props = [
			'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
		], testDom = document.createElement('a');
		  
		for(var i=0; i<props.length; i++){
			if(props[i] in testDom.style){
				return true;
			}
		}
		
		return false;
	}
	
	$("#b").click(function() {
    var password = "IDon";
    /*var pass1= "vodafone";*/
    if($("#pass").val() !== password) {
        alert("Incorrect password!");
    }
    else {
        window.location.href = "start.html";  
    }
});
});
