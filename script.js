/* global variables */
let view = $('<p class="view">VIEW</p>');
let overlay = $('#overlay');
let overlayText =  overlay.find('p');
let imgTechWriting = $('<img src="img/image1.png" alt="Tech writing workflow" width="100%"/>');
let imgWebDev = $('<img src="img/image2.gif" alt="Example interactive user guide" width="100%"/>');
/* Highlight work items */
function handleWorkItems(){
    changeWorkItem();
    restoreWorkItem();
}
/* Handle the hover effect for work items */
function changeWorkItem() {
    $('.work-item').on('mouseenter', function(){
        $(this).css('background', 'rgba(0,0,0,0.85)');
        $(this).find('p:first-of-type').css('color', 'cornflowerblue');
        $(this).find('p:last-of-type').hide();
        $(this).find('img').css({opacity:'0.7', border: '2.5px solid cornflowerblue',
            'box-shadow': 'inset 0 0 250px cornflowerblue', 'border-radius':'50%', background:'white'});
        $(this).find('.divider').append(view).css({background: 'rgba(0,0,0,0.3)',
            'box-shadow': 'inset 0 0 60px cornflowerblue'});
    });
}
/* Handle the process of removing the highlight effect (restoring back to normal) */
function restoreWorkItem() {
    $('.work-item').on('mouseleave', function(){
        $(this).css('background', 'rgba(0,0,0,0.2)');
        $(this).find('p:first-of-type').css('color', 'black');
        $(this).find('img').css({opacity:'1', border: 'none', 'border-radius':'0%', background:'none','box-shadow':'none'});
        $(this).find(view).css('color', 'white').remove();
        $(this).find('p:last-of-type').fadeIn();
    }); 
}
/* Handle the overlay popup */
function handleViewClick(){
    $('.work-item').on('click', function(){
        /* populate the overlay info */
        if ($(this).find('img').attr('alt')==="Technical Writing"){
            overlayText.before(imgTechWriting);
        } else if ($(this).find('img').attr('alt')==="Web Development"){
            overlayText.before(imgWebDev);
        } else if ($(this).find('img').attr('alt')==="Play Video") {
            overlayText.before(
                '<video controls="" autoplay muted width="90%"><source src="https://nflx-pta-prod-us-east-1.s3.amazonaws.com/class/95/widget/163/1580249570854-DolbyVision_Working_With.mp4?AWSAccessKeyId=ASIASFT37IGOYPGJDAGE&Expires=1586807383&Signature=CHfdqqAN0eExx%2FEPDVLVz%2B45iXA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEEsaCXVzLWVhc3QtMSJHMEUCIQDs6ko%2Bh1%2BeZrtHOA8%2FFinH%2FxVn2SAtLCWzJUEFYLnQrwIgS7NiTpjKf9nSFkvK8McgJlFSovg5HHWVp0uH9Aq%2BBhYq5wEIZBAAGgwxNDk1MTAxMTE2NDUiDKlGVcDgbuuwP34lSCrEAUBskIicaW15rlw%2FRrViJPnj%2FucdsRXrc6hskbaL%2F2eM1mw2Vt%2BkkXgxBi%2BOlpHTixmIBF05wmWbi%2FI0Dekeeybaj2A0VprKScYzxPXliTeU2mnyeK8rPQWVaq1WTDdRPvSMWq996uY0gLHmsJ6QZE1KXlrJbXE1zHCPaIOil2q7nhuAhvRN9h5hTwzD8sbRjMuBQxT04PouCwmxeFGuzTeIWRSkf6BNVOL08Yr60QdarOC2TTx4RlSgPVt2H%2FASrz24KEkwsu7S9AU64wEJdCusdL8azqKxZ5wiF1UJdD1QsZRPAUjeZ7jH6r%2FbLhg34qZWTNZgsD2%2B1EgunpaTC%2FWj2sI0AkdX9aI1nOQAJI%2F1eCD0pfhIvgTlsPKygui4tFNjJRuNIu3WT3xVRNrojfQvho6YaEHfjUWMcYOHq%2FGlpiaYY4jK5ij8fWJVQqm2nV%2Fj74qmdnRBbU%2BM4M%2BBn%2F5oVM4T7mkPlv6JigGS2da4XRRPrAnzap82xnpyHhZES1tuJikJjhLlV0pjBuEbbjGEvpl7pgLmDttRu6VTDDw9vfnF52Apd%2BvhSd57MLUTMQ%3D%3D" type="video/mp4"></video>'
            );
        }
        let motto = $(this).find('.motto').text();
        overlayText.text(motto);
        overlay.fadeIn(300); 
        /* Register the closing of the popup overlay */
        closeOverlay();
         /* Prevent the work item to change state on touch devices */
        $(this).css('background', 'rgba(0,0,0,0.2)');
        $(this).find('p:first-of-type').css('color', 'black');
        $(this).find('img').css({opacity:'1', border: 'none', 'border-radius':'0%', background:'none','box-shadow':'none'});
        $(this).find(view).css('color', 'white').remove();
        $(this).find('p:last-of-type').fadeIn();
    });
}
/* Closing the overlay*/
function closeOverlay() {
    $('#close, #overlay').click(function() {
        overlay.fadeOut(0);
        overlay.find('img').remove();
        overlay.find('video').remove();
     });
}
/* Handle nav menu on small screens */
function toggleMobileMenu() {
    $('.hamburger-menu').on('click', '#hamburger', function(){
        $(this).closest('nav').find('.mobile-menu').slideToggle(0);       
    });
    $('.mobile-menu').on('click', function() {
        $(this).closest('nav').find('#hamburger').trigger('click');
    });
}
/* Implementing autoscroll functionality */
function handleAutoScroll() {
    $('a[href^="#"]').on('click', function(event) { 
        let scrollTarget = $(this.getAttribute('href')); 
        if( scrollTarget.length ) {
            $('html, body').stop().animate({scrollTop: scrollTarget.offset().top }, 800);   
        }
    });
}
function initiatePortfolio(){
   handleWorkItems();
   handleViewClick();
   toggleMobileMenu();
   handleAutoScroll();
}

$(initiatePortfolio);