var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:0.25, rotate:-180},"create-x")
.to("#top-line",{duration:0.25, rotate:45},"create-x")
.to("#bottom-line",{duration:0.25, rotate:-45},"create-x")
.from("#outline",{duration:0.5, drawSVG:"0"},"create-x");

$("#burger-container").on("click", function(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#outline",{alpha:1});
        lineToX.play();
        gsap.to("main",{duration:0.25, x:-navWidth});
        gsap.to("nav",{duration:0.25, x:-navWidth});
        canYouSeeNav = true;
    }else{
        lineToX.reverse();
        gsap.to("main",{duration:0.25, x:0});
        gsap.to("nav",{duration:0.25, x:0});
        canYouSeeNav = false;
    }
});
