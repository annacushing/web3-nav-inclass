var canYouSeeNav=!1;gsap.set("#nav-bg",{transformOrigin:"50% 50%"}),gsap.set("#outline",{alpha:0}),gsap.set(".burger-lines",{transformOrigin:"50% 50%"});var lineToLine=gsap.timeline({paused:!0});lineToLine.to("#top-line",{duration:.25,y:5},"move-lines").to("#bottom-line",{duration:.25,y:-5},"move-lines"),$("#burger-container").on("mouseenter",function(){console.log("mouse enter"),!1===canYouSeeNav&&lineToLine.play()}),$("#burger-container").on("mouseleave",function(){console.log("mouse leave"),!1===canYouSeeNav&&lineToLine.reverse()});var lineToX=gsap.timeline({paused:!0});lineToX.to("#burger-container",{duration:.25,rotate:-180},"create-x").to("#top-line",{duration:.25,rotate:45},"create-x").to("#bottom-line",{duration:.25,rotate:-45},"create-x").from("#outline",{duration:.5,drawSVG:"0"},"create-x"),$("#burger-container").on("click",function(){console.log("click"),!1===canYouSeeNav?(gsap.set("#outline",{alpha:1}),lineToX.play(),gsap.to("#nav-bg",{duration:.5,scale:100}),canYouSeeNav=!0):(lineToX.reverse(),canYouSeeNav=!1)}),$(document).ready(function(){gsap.registerPlugin(DrawSVGPlugin)});