const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});



function firstPageAni() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
    .to(".boundinglem", {
      y: '0',
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
      stagger: .2
    })
    .from("#herofooter", {
      y: '-10',
      opacity: 0,
      duration: 1.5,
      dalay: -3,
      ease: Expo.easeInOut
    })
}

var timeout;
function circlechaptakaro() {
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale , yscale);
    timout = setTimeout(function() {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);

  });
}

circlechaptakaro();

function circleMouseFollower(xscale , yscale) {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale} , ${yscale})`;
  })
}
circleMouseFollower();
firstPageAni();

//  teeno element ko select karo uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai 
// jiska matlab hai mouse ki x and y position pata karo , ab mouse ki x y position ke badle us image ko show karo and us image ko move karo ,
// move karte waqt rotate karo and jaisa mouse te
// move karte waqt rotate karo and jaisa mouse te chale waise waise rotation Bhi tej ho jaye

document.querySelectorAll(".elem").forEach(function(elem) {
  var rotate =0 ;
  var diffrot =0;

  elem.addEventListener("mouseleave", function(dets) {
    gsap.to(elem.querySelectorAll("img"), {
      opacity: 0,
      ease: Power3,
      duration:0.5,
    });
  });
  
  elem.addEventListener("mousemove", function(dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelectorAll("img"), {
      opacity: 1,
      ease: Power3,
      top : diff,
      left:dets.clientX,
      rotate : gsap.utils.clamp(-20,20,diffrot),
    });
  });
});







  
    

