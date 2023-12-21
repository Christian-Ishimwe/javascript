const panels=document.querySelectorAll(".panel")
panels.forEach((element) =>{
    element.addEventListener("click", () =>{
        element.classList.toggle("open")
    })
})

// panels.forEach((element) =>{
//     element.addEventListener("transitionend", () =>{
//         element.classList.toggle("open-active")
//     })
// })