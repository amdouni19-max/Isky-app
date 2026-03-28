initDay();

const today=getToday();

/* NAV */
function go(id,el){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");

document.querySelectorAll("nav div").forEach(n=>n.classList.remove("active"));
el.classList.add("active");
}

/* TASK */
function toggleTask(i,el){
db[today].tasks[i]=el.checked;
saveDB();
updateUI();
}

/* WATER */
function addWater(){
db[today].water++;
saveDB();
updateUI();
}

/* WORKOUT */
function setWorkout(w){
db[today].workout=w;
saveDB();
renderWorkout();
updateUI();
}

/* UPDATE */
function updateUI(){

let tasks=db[today].tasks;
let done=tasks.filter(x=>x).length;

let percent=Math.round(done/8*100);

/* chart */
drawCircle(percent);

/* text */
document.getElementById("progressText").innerText=percent+"% completato";

/* water */
document.getElementById("waterText").innerText=db[today].water+" / 8";

/* stato */
document.getElementById("statusText").innerText=
"Task: "+done+" / 8";

/* coach */
document.getElementById("coachText").innerText=[
"Spingi oggi",
"Non mollare",
"Disciplina"
][Math.floor(Math.random()*3)];
}

/* SPLASH */
let w=0;
let int=setInterval(()=>{
w+=5;
loaderBar.style.width=w+"%";
if(w>=100){
clearInterval(int);
splash.style.display="none";
}
},40);

/* INIT */
renderTasks();
renderWorkout();
updateUI();
