let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor");
let imgBox = document.querySelector(".img")

main.addEventListener("mousemove", (dets) =>{
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
    })
})

imgBox.addEventListener("mouseenter", () =>{
    cursor.innerHTML = "View More",
    gsap.to(cursor, {
        scale: 4,
    })
})
imgBox.addEventListener("mouseleave", () =>{
    gsap.to(cursor, {
        // x:elem.x,
        // y:elem.y,
        scale: 1,
    })
})



