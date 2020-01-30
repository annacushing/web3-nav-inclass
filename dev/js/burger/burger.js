var canYouSeeNav = false;

var navWidth = $("nav").width();
console.log(navWidth);

$(window).resize(function() {
    navWidth = $("nav").width();
    console.log(navWidth);
});

// hide outline
gsap.set("#outline", {
    alpha: 0
});
// reset the roation pin for the lines
gsap.set(".burger-lines", {
    transformOrigin: "50% 50%"
});
