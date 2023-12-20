const inputs=document.querySelectorAll("input")
inputs.forEach((element) =>{
    
    element.addEventListener("change" , handleUpdates)
})

function handleUpdates(){
    const suffix=this.dataset.sizing || ""
    
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value + suffix}`)
    
    console.log(this.name)
    // console.log(suffix.sizing)
}