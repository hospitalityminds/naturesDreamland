$(function() {

    $('.isnavMenuBtn').on('click', function() {
        $('body').toggleClass('menu-open');
    });

});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".ss-header").css("box-shadow", "0 2px 10px rgba(0,0,0,.6)");

    } else {
        $(".ss-header").css("box-shadow", "0 0 0 rgba(0,0,0,0)");
    }
});




var detectios = '';
if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
    detectios = 'touchend click';
else if (/Android/i.test(navigator.userAgent))
    detectios = 'touchend';
else
    detectios = 'click';

$(document).on(detectios, function(e) {
    if ($(window).width() < 1200) {
        if (!$(e.target).closest('.gpMenu').length) {
            if ($('.gpMenu').is(":visible")) {

            }
        }
    }
});


$(document).ready(function() {

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function() {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

    const videoElement = document.getElementById('vid');
    videoElement.addEventListener('suspend', () => {
        // suspend invoked
        // show play button
    });

    videoElement.addEventListener('play', () => {
        // video is played
        // remove play button UI
    });

    $('body').on('click touchstart', function() {
        const videoElement = document.getElementById('vid');
        if (videoElement.playing) {
            // video is already playing so do nothing
        } else {
            // video is not playing
            // so play video now
            videoElement.play();
        }
    });
});

//  **************  AOS Animation  ***********

AOS.init({
    easing: 'ease',
    duration: 1000,
    disable: function() {
        var maxWidth = 500;
        return window.innerWidth < maxWidth;
    }
});


// *****  Window on Scroll  ******

// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 300) {
//       $(".social-bar").addClass("social-none");

//     } else {
//       $(".social-bar").removeClass("social-none");
//     }
//   });





$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});



// $(window).load(function() {
//     $('.loader').css("display","none");
// });


document.querySelector('#audio-btn').addEventListener("click", function() {

    var isplaying = document.querySelector('.audio');

    // isplaying.forEach(playing =>{

    if (isplaying.getAttribute('src') == "garba.mp3") {
        isplaying.setAttribute("src", " ");
    } else {
        isplaying.setAttribute("src", "garba.mp3");
    }
    // });

});




$('body').on('click touchstart', function() {
    const videoElement = document.querySelector('.audio');

    // videoElement.forEach(element =>{

    if (videoElement.playing) {} else {
        videoElement.play();
    }
    //    });
});