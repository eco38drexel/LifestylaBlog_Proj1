import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin);

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

mainTL.from("#sneakers",{duration:1.5,y:"-=300"})
.from("#hero",{duration:2,alpha:0},"-=1.5")
.from("#hero-content h1",{duration:2,alpha:0});

gsap.registerEffect({
    name:"loop",
    effect: (targets) => {
        return gsap.from(targets, {duration:10, x:"-=300", repeat:10, ease:"none"})
    }
})

gsap.effects.loop("#be")


GSDevTools.create();

var Preloader = "pants-complete, sweatshirt-complete, shoe-complete",
    tl = gsap.timeline({repeat:1});

tl.fromTo(Preloader, {drawSVG:"100%"}, {duration: 1, drawSVG:"100%", stagger: 2})