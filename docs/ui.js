function renderTasks(){
const list=document.getElementById("taskList");

const tasks=[
"Sveglia",
"Allenamento",
"Dieta",
"Studio",
"Business",
"Preghiera",
"Revisione",
"Dormire"
];

list.innerHTML="";

tasks.forEach((t,i)=>{
list.innerHTML+=`
<label>
<input type="checkbox" ${db[getToday()].tasks[i]?"checked":""}
onchange="toggleTask(${i},this)">
${t}
</label><br>`;
});
}

function renderWorkout(){
let box=document.getElementById("workoutBox");

let w=db[getToday()].workout||"";

box.innerHTML=`
<h3>Allenamento</h3>
<button onclick="setWorkout('A')">A</button>
<button onclick="setWorkout('B')">B</button>
<button onclick="setWorkout('C')">C</button>
<p>Oggi: ${w}</p>
`;
}
