let scrollC = document.querySelector(".lenguajesgallery")
let scrollC2 = document.querySelector(".mentorsgallery")
let backarrow = document.getElementById("backarrow")
let nextarrow = document.getElementById("nextarrow")
let backarrow2 = document.getElementById("backarrow2")
let nextarrow2 = document.getElementById("nextarrow2")

backarrow.addEventListener("click", () => {
    scrollC.scrollLeft -= 150;
})

nextarrow.addEventListener("click", () => {
    scrollC.scrollLeft +=150;
})

backarrow2.addEventListener("click", () => {
    scrollC2.scrollLeft -= 150;
})

nextarrow2.addEventListener("click", () => {
    scrollC2.scrollLeft +=150;
})