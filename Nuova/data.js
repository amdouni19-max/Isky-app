let db = JSON.parse(localStorage.getItem("iskyDB")) || {};

function getToday(){
return new Date().toISOString().slice(0,10);
}

function initDay(){
let d=getToday();

if(!db[d]){
db[d]={
tasks:Array(8).fill(false),
water:0,
workout:"",
};
}
}

function saveDB(){
localStorage.setItem("iskyDB",JSON.stringify(db));
}
