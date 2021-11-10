import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();

function preloaderAni(){
    const tl = gsap.timeline();

    tl.from("#shoe-complete",{drawSVG: 0, duration: 8, delay: 0.5, ease: "none"})
    .to("#shoe",{duration: 1, alpha: 0},"sameTime")
    .from("#sweatshirt-complete",{duration: 6, drawSVG: "0%", ease: "none", delay: 0.5})
    .to("#sweatshirt",{delay: 5, duration: 1, alpha:0},"sameTime")
    .from("#pants-complete",{duration: 5, drawSVG: "0%", ease: "none"})
    .to("#preload-full", {duration: 2, alpha:0, onComplete:backToTop});
    return tl;
}

function backToTop(){
    window.scrollTo(0,0)
    gsap.set("#preload-full", {display: "none"})
}

function heroAnimation()
{
    const tl = gsap.timeline();
    tl.from("#sneakers",{duration:1.5,y:"-=300",alpha:0}, {display:"none"})
    .from("#hero",{duration:2,alpha:0},"-=1.5")
    .from("#hero-content h1",{duration:2,alpha:0});
    return tl;
}

function bannerAnimation()
{
    const tl = gsap.timeline({repeat:10});
    tl.from("#be", {duration:10, x:"-=300", repeat:10, ease:"none"})
    return tl;
}

mainTL.add(preloaderAni())
.add(heroAnimation())
.add(bannerAnimation());



// gsap.registerEffect({
//     name:"loop",
//     effect: (targets) => {
//         return gsap.from(targets, {duration:10, x:"-=300", repeat:10, ease:"none"})
//     }
// })

// gsap.effects.loop("#be")


GSDevTools.create();
