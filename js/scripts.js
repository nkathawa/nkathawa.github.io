let workSlideIndex=1;
let edSlideIndex=1;

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

// Next/previous controls
function plusSlides(n, className) {
  if(className == 'educationSlides') {
    showSlides(edSlideIndex += n, 'educationSlides'); 
  } else {
    showSlides(workSlideIndex += n, 'workSlides'); 
  }
}

// Thumbnail image controls
function currentSlide(n, className) {
  if(className == 'educationSlides') {
    showSlides(edSlideIndex = n, 'educationSlides'); 
  } else {
    showSlides(workSlideIndex = n, 'workSlides'); 
  }
}

function showSlides(n, className) {
  let i;
  let slides = document.getElementsByClassName(className);
  let dots = document.getElementsByClassName("dot");
  let dots1 = document.getElementsByClassName("dot1");

  if(className == 'educationSlides') {
      if (n > slides.length) {edSlideIndex = 1}
      if (n < 1) {edSlideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
      }
      slides[edSlideIndex-1].style.display = "block";
      dots1[edSlideIndex-1].className += " active";
  } else {
    if (n > slides.length) {workSlideIndex = 1}
      if (n < 1) {workSlideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[workSlideIndex-1].style.display = "block";
      dots[workSlideIndex-1].className += " active";
  }
}

function downloadPDF() {
  // Path to the PDF file
  var pdfPath = "static/Navin_Kathawa_Resume.pdf";

  // Creating a temporary link element
  var link = document.createElement("a");
  link.href = pdfPath;
  link.download = "Navin_Kathawa_Resume.pdf";

  // Appending the link to the document body
  document.body.appendChild(link);

  // Simulating a click on the link
  link.click();

  // Removing the link from the document body
  document.body.removeChild(link);
}