const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration : 1.5


    })


    gsap.to(".boundingelem",{
        y:0,
        ease : Expo.easeInOut,
        duration :2,
        delay : -.5,
        stagger: .2
    })

    gsap.from("#herofooter",{
        y : -10,
        opacity : 0 ,
        duration : 1.5,
        ease : Expo.easeInOut
       
    })
}

function mouseMove(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}

function target(){

    


    document.querySelectorAll(".elem").forEach(function(elem){
        var rotate = 0;
        var diffrow =0;


        elem.addEventListener("mouseleave",function(dets){
            gsap.to(elem.querySelector("img"),{
                opacity: 0,
                ease: Power3,
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrow  = dets.clientX -rotate;
            rotate = dets.clientX;
            
            gsap.to((elem.querySelector("img")),{
                opacity : 1,
                ease : Power1,
                top : diff,
                left : dets.clientX,
                rotate : gsap.utils.clamp(-20,20,diffrow)
            })
        });
    });
    
}


mouseMove();
firstPageAnim();
target();


