/* solving float issues */

/*

if viewport is more than but less than */


$(document).ready(function(){
	var $projects = $('.project');
	var $numProjects = $('.project').length;
	console.log("numProjects = " + $numProjects);
	var $lastProject = $('.project').last();
	/* gets viewport width */
	var viewportWidth = $(window).width();
	// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	var $centerOddOnes = function(evt){
		viewportWidth = $(window).width();
		console.log(viewportWidth);
		if (viewportWidth >= 700 && viewportWidth < 900) {
			console.log('tablet');
			/* just auto remove prev class */
			$lastProject.prev().removeClass('centered_project');
    		if ($numProjects % 2 !== 0) {
    			$lastProject.addClass('centered_project');    			
    		} else {
    			$lastProject.removeClass('centered_project');
    			$lastProject.prev().removeClass('centered_project');
    		}
    	} else if (viewportWidth > 900) {

    		if (($numProjects + 2) % 3 == 0) { // 1 dangler
    			$lastProject.addClass('centered_project');
    		} else if (($numProjects + 1) % 3 == 0 ) { // 2 danglers
    			$lastProject.addClass('centered_project');
    			$lastProject.prev().addClass('centered_project');
    		} else {
    			$lastProject.removeClass('centered_project');
    		}
    	}
	}
	/* centers leftovers on page load */	
	$centerOddOnes();



	$(window).on('resize orientationChange', function(event){
		viewportWidth = $(window).width();
		console.log(viewportWidth);
		if (viewportWidth >= 700 && viewportWidth < 900) {
			console.log('tablet');
			/* just auto remove prev class */
			$lastProject.prev().removeClass('centered_project');
    		if ($numProjects % 2 !== 0) {
    			$lastProject.addClass('centered_project');    			
    		} else {
    			$lastProject.removeClass('centered_project');
    			$lastProject.prev().removeClass('centered_project');
    		}
    	} else if (viewportWidth > 900) {
    		console.log('desktop');
    		if (($numProjects + 2) % 3 == 0) { // 1 dangler
    			$lastProject.addClass('centered_project');
    		} else if (($numProjects + 1) % 3 == 0 ) { // 2 danglers
    			$lastProject.addClass('centered_project');
    			$lastProject.prev().addClass('centered_project');
    		} else {
    			$lastProject.removeClass('centered_project');
    		}
    	}


	});

});







// and if 

// then set last child of project to float: none