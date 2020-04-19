
var workToDo = "addName";

function delLetter(lett){
    var finalLet = "";
    for(var i=0;i< lett.length-1;i++){
        finalLet = finalLet + lett[i];
    }
    return finalLet;
}

function performanceName(){
    var k = document.getElementById("nameChange").innerHTML;
    if(k == " "){
        k = "";
    }
    var finalLet1 = "";
    
    if (workToDo == "delName"){
        finalLet1 = delLetter(k);
    }

    if(finalLet1 == ""){
        finalLet1 = " ";
    }
    document.getElementById("nameChange").innerHTML = finalLet1;
}

function changeMyName(){
    var k = document.getElementById("nameChange").innerHTML;
    if( k == "Sushan Sapaliga" && workToDo == "addName" ){
        workToDo = "delName";
    }else if( k == "" && workToDo == "delName" ){
        workToDo = "addDev";
    }else if( k == "A Developer" && workToDo == "addDev" ){
        workToDo = "delDev";
    }else if(k == "" && workToDo == "delDev"){
        workToDo = "addName";
    }
    performanceName();
}

function onceLoaded(){
    setInterval(function(){ changeMyName() }, 300);
}

onceLoaded();