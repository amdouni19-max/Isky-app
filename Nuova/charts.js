function drawCircle(percent){

let canvas=document.getElementById("mainChart");
let ctx=canvas.getContext("2d");

ctx.clearRect(0,0,160,160);

/* background */
ctx.beginPath();
ctx.arc(80,80,60,0,2*Math.PI);
ctx.strokeStyle="#eee";
ctx.lineWidth=12;
ctx.stroke();

/* progress */
ctx.beginPath();
ctx.arc(80,80,60,-Math.PI/2,(percent/100)*2*Math.PI-Math.PI/2);
ctx.strokeStyle="#007aff";
ctx.lineWidth=12;
ctx.stroke();

/* text */
ctx.font="20px Arial";
ctx.fillText(percent+"%",60,90);
}
