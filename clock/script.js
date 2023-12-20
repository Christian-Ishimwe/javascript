const secondsHand=document.querySelector(".second-hand")
const minutesHand=document.querySelector(".minute-hand")
const hourHand=document.querySelector(".hour-hand")
function setDate(){
    const now= new Date()
    const seconds=now.getSeconds()
    const minutes=now.getMinutes()
    const hours=now.getHours()
    console.log(hours)
    const secondsDegree=((seconds/60) *360) + 90
    const minutesDegree=((minutes/60) *360) + 90
    const hourDegree=((hours/24) *360) + 90
    secondsHand.style.transform=`rotate(${secondsDegree}deg)`
    minutesHand.style.transform=`rotate(${minutesDegree}deg)`
    hourHand.style.transform=`rotate(${hourDegree}deg)`
    
   
}
setInterval(setDate, 1000)