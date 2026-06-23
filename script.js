const slides=document.querySelector(".slides");
const items=[...document.querySelectorAll(".slide")];
const dots=document.querySelector(".dots");
let current=0;
let timer;

function go(index){
  if(!slides||!items.length)return;
  current=(index+items.length)%items.length;
  slides.style.transform=`translateX(-${current*100}%)`;
  [...dots.children].forEach((dot,i)=>dot.classList.toggle("active",i===current));
}

function start(){
  clearInterval(timer);
  timer=setInterval(()=>go(current+1),5000);
}

items.forEach((_,index)=>{
  const button=document.createElement("button");
  button.type="button";
  button.setAttribute("aria-label",`${index+1}번째 사진 보기`);
  button.addEventListener("click",()=>{go(index);start();});
  dots.appendChild(button);
});

document.querySelector(".prev")?.addEventListener("click",()=>{go(current-1);start();});
document.querySelector(".next")?.addEventListener("click",()=>{go(current+1);start();});

go(0);
start();
