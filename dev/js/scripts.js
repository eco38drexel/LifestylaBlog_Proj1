import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();

function preloaderAni(){
    const tl = gsap.timeline();

    var Preloader = ["#pants-complete", "#sweatshirt-complete", "#shoe-complete"];
    tl.from("#shoe-complete",{drawSVG: "0%", duration: 5})
    .to("#shoe",{duration: 1, alpha:0},"sameTime")
    .from("#sweatshirt-complete",{duration: 5, drawSVG: "0%"})
    .to("#sweatshirt",{delay: 5, duration: 1, alpha:0},"sameTime")
    .from("#pants-complete",{duration: 5, drawSVG: "0%"});
    // tl.fromTo(Preloader, {drawSVG:"0% 100%"}, {duration: 1, drawSVG:"100%", stagger: 2})
    return tl;
}

function heroAnimation(){
    const tl = gsap.timeline();
    tl.from("#sneakers",{duration:1.5,y:"-=300"})
    .from("#hero",{duration:2,alpha:0},"-=1.5")
    .from("#hero-content h1",{duration:2,alpha:0});
    return tl;
}

function bannerAnimation(){
    const tl = gsap.timeline({repeat:10});
    tl.from("#be", {duration:10, x:"-=300", repeat:10, ease:"none"})
    return tl;
}

mainTL.add(preloaderAni());



// gsap.registerEffect({
//     name:"loop",
//     effect: (targets) => {
//         return gsap.from(targets, {duration:10, x:"-=300", repeat:10, ease:"none"})
//     }
// })

// gsap.effects.loop("#be")


GSDevTools.create();
