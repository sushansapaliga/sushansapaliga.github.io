
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
    var finalLet1 = "";

    if(k == "_"){
        k = "";
    }
    
    if (workToDo == "delName" || workToDo == "delDev"){
        finalLet1 = delLetter(k);
    }else if(workToDo == "addName"){
        var letters = "Sushan Sapaliga";
        finalLet1 = k + letters[k.length];
    }else if( workToDo == "addDev"){
        var letters = "A Developer";
        finalLet1 = k + letters[k.length];
    }

    if(finalLet1 == ""){
        finalLet1 = "_";
    }
    document.getElementById("nameChange").innerHTML = finalLet1;
}

function changeMyName(){
    var k = document.getElementById("nameChange").innerHTML;
    if( k == "Sushan Sapaliga" && workToDo == "addName" ){
        workToDo = "delName";
    }else if( k == "_" && workToDo == "delName" ){
        workToDo = "addDev";
    }else if( k == "A Developer" && workToDo == "addDev" ){
        workToDo = "delDev";
    }else if(k == "_" && workToDo == "delDev"){
        workToDo = "addName";
    }
    performanceName();
}

function onceLoaded(){
    setInterval(function(){ changeMyName() }, 150);
}

onceLoaded();