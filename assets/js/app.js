// let footer = document.getElementById('service');

// window.addEventListener('scroll', () => {

//     let value = window.scrollY;

//     footer.style.marginBottom = value * 2.5 + 'px';
// });

gsap.registerPlugin(ScrollTrigger)

const splitType = document.querySelectorAll('.reveal-type')

splitType.forEach((char,i) => {
    const text = new SplitType(char, {types: 'chars'})

    gsap.from(text.char,{
        ScrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: 0.2,
        stagger: 0.1
    })
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)


function hamburgertoggle() {
    const menuToggle = document.querySelector('.hamburgermenu input');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function(){
        nav.classList.toggle('slide');
    });
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-90px";
}
}

// Back To Top
$(document).ready(function() {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;

    jQuery(window).on('scroll', function() {
        if(jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

hamburgertoggle();