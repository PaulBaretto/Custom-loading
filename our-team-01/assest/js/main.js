

gsap.registerPlugin(ScrollTrigger)

let section = gsap.utils.toArray('.about-us-main-section');

gsap.to(section, {
    xPercent: -100 * (section.length - 1),
    ease: "none",
    ScrollTrigger: {
        trigger:".our-team-main",
        pin:true,
        scrub:1,
    }
})



// let abo_Holder = document.querySelector('.abu-holder');
// let about_img = document.querySelector('.img-holder img')

// gsap.registerPlugin(ScrollTrigger)
// gsap.to(about_img, {
//     scrollTrigger: {
//         trigger: about_img,
//         toggleActions:'restart pause reverse none',
//         start:"top 80%",
//         scrub: true,
//         end:"80% center"
//     },
//     y: 95,
//     duration:1
// });

// gsap.to(abo_Holder, {
//     scrollTrigger: {
//         trigger: abo_Holder,
//         toggleActions:'restart pause reverse none',
//         start: "top 80%",
//         scrub: true,
//         end: "80% center"
//     },
//     y: 95,
//     duration:1
// });
