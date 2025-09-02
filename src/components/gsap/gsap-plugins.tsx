"use client"
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const GsapPlugins = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText)



    return null
}
export default GsapPlugins
