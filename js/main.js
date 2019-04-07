$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});


function onSubmitForm() {
	if (document.form.math.value == 23) {
		return true;
	}
	else {
		alert("7 + 16 != "+ document.form.math.value);
		return false;
	}
}

// Select all links with hashes
jQuery(document).ready(function($)
{
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) 
    {
        // On-page links
        if(
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
        ) 
        {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) 
            {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate(
                {
                        scrollTop: target.offset().top - 60
                }, 500, function() 
                {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) 
                    { 
                        // Checking if the target was focused
                        return false;
                    } 
                    else 
                    {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
});

jQuery(document).ready(function($){
    $("a[href='#']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});