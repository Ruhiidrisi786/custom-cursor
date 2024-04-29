let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor");
let imgBox = document.querySelector(".img")

main.addEventListener("mousemove", (elem) =>{
    gsap.to(cursor, {
        x: elem.x,
        y: elem.y,
        // ease: 'ease out',
        duration: 1,
    })
})

imgBox.addEventListener("mouseenter", (elem) =>{
    gsap.to(cursor, {
        x:elem.x,
        y:elem.y,
        scale: 4,
    })
})
imgBox.addEventListener("mouseleave", (elem) =>{
    gsap.to(cursor, {
        x:elem.x,
        y:elem.y,
        scale: 1,
    })
})
