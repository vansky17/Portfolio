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
                '<video controls="" autoplay muted width="90%"><source src="https://userdocsmanager.s3.us-east-2.amazonaws.com/DolbyVision_Working_With.mp4" type="video/mp4"></video>'
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