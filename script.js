for(var i=1;i<13;i++){
    const line=document.createElement('div');
    line.className="vline";
    line.style.left=i*(100/12)+"%";
    document.body.appendChild(line);
}
for(var i=1;i<6;i++){
    const line=document.createElement('div');
    line.className="hline";
    line.style.top=i*(100/6)+"%";
    document.body.appendChild(line);
}
document.addEventListener("mousemove",function(e){
const cir=document.querySelector(".maincir");
var rleft=cir.offsetLeft;
var rtop=cir.offsetTop;
var x=e.clientX;
var y=e.clientY;
document.querySelector("#musdisc").style.animationName="rot";
document.querySelector("#song").play();
});
const fireanimation=["move","move1","move2","move3"];
function fireflies(){
    for(var i=0;i<90;i++){
    const fire=document.createElement("div");
    fire.className="ffly";
    fire.style.left=Math.random()*100+"%";
    fire.style.top=Math.random()*100+"%";
    fire.style.animationName=fireanimation[Math.floor(Math.random()*4)];
    var dur=Math.random()*49;
    if(dur<10){
        dur+=20;
    }
    dur=Math.floor(dur);
    fire.style.animationDuration=dur+"s";
    document.body.appendChild(fire);
}
}

const scroller = document.querySelector('#maincover');
const scroller1 = document.querySelector('#second');
const scroller2 = document.querySelector('#third');
let scrollPosition = 0;

document.body.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default browser scrolling

  scrollPosition += event.deltaY * 0.1; 
  scroller.style.transform = `translateX(-${scrollPosition}px)`;
  scroller.style.borderRadius = `${scrollPosition}px`;
  scroller2.style.borderRadius = `${scrollPosition}px`; 
  scroller1.style.transform = `translateX(-${scrollPosition}px)`;
  scroller2.style.transform = `translateX(-${scrollPosition}px)`;
});

fireflies();


