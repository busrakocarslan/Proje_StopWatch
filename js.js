const start=document.getElementById("start");
const pause=document.getElementById("pause");
const reset=document.getElementById("reset");
pause.style.display="none"

const dakikatext=document.getElementById("dakika")
const saniyetext=document.getElementById("saniye")
const milisaniyetext=document.getElementById("salise")


let dakika=0;
let saniye=0;
let milisaniye=0;



const başla=()=>{
        intervalID=setInterval(()=>{
        milisaniye++;
        if (milisaniye === 100){
            milisaniye=0;
            saniye++;}
        if(saniye === 60){
            saniye=0;
            dakika++
            }
        start.style.display="none"
        pause.style.display="inline"
        milisaniyetext.textContent=milisaniye.toString().padStart(2, "0");
        saniyetext.textContent=saniye.toString().padStart(2, "0");
        dakikatext.textContent=dakika.toString().padStart(2, "0");
            
        

},10)

return intervalID

}

const durdur = () => {
    if (intervalID) {
      clearInterval(intervalID);
      start.style.display="inline"
      start.textContent="Continue"
    }
  };

  const bitiş=()=>{
    if (intervalID) {
        clearInterval(intervalID)
    dakika=0,
    saniye=0,
    milisaniye=0,
    milisaniyetext.textContent=milisaniye.toString().padStart(2, "0"),
    saniyetext.textContent=saniye.toString().padStart(2, "0"),
    dakikatext.textContent=dakika.toString().padStart(2, "0")
    start.style.display="inline"
    pause.style.display="none"
    start.textContent="Start"
   
    

  }
};

start.addEventListener("click",(e)=>{
    e.defaultPrevented;
    başla()
})
pause.addEventListener("click",(e)=>{
    e.defaultPrevented;
    durdur()
})
reset.addEventListener("click",(e)=>{
    e.defaultPrevented;
    bitiş()
})
