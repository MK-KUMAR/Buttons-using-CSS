/*           */
function readmore(){
const text= document.getElementById("less");
const btn= document.getElementById("btn");
const dot= document.getElementById("dot");
if(text.style.display==="none"){
    btn.innerHTML="Read Less";
    text.style.display="inline";
    dot.style.display="none";
}
else{
    btn.innerHTML="Read More";
    text.style.display="none";
    dot.style.display="inline";
}
}

