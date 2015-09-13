// This is this JavaScript file for the Relaxr blog


$(document).ready(function() {

	// $( ".learnmore" ).click(function(){
 //  		$("#learnmoretext").removeClass("hide");
 //  		$(".learnmore").addClass("hide");
	// });


	$( ".learnmore" ).click(function() {
		event.preventDefault();
		$(".learnmore").hide();
	  	$( "#learnmoretext" ).slideDown("fast");
	    // Animation complete.
	}); //shows more text on the Learn More sidebar

	$(".less").click(function() {
		event.preventDefault();
		$("#learnmoretext").slideUp("fast", function() {
			$(".learnmore").show();
		});
	}); //hides the extra Learn More text in the sidebar


	$(".readmore.blog1").click(function() {
		event.preventDefault();
		$(".readmore.blog1").hide();
		$("#show-this-on-click-blog1").slideDown("fast", function() {
			$(".readless.blog1").show();
		});
	}); //show the rest of a blog post #1

	$(".readless.blog1").click(function() {
		event.preventDefault();
		$(".readless.blog1").hide();
		$("#show-this-on-click-blog1").slideUp("fast", function() {
			$(".readmore.blog1").show();
		});
	}); //collapes the rest of the blog post #1


	$(".readmore.blog2").click(function() {
		event.preventDefault();
		$(".readmore.blog2").hide();
		$("#show-this-on-click-blog2").slideDown("fast", function() {
			$(".readless.blog2").show();
		});
	}); //show the rest of a blog post #2

	$(".readless.blog2").click(function() {
		event.preventDefault();
		$(".readless.blog2").hide();
		$("#show-this-on-click-blog2").slideUp("fast", function() {
			$(".readmore.blog2").show();
		});
	}); //collapes the rest of the blog post #2

}); //end of document ready function
