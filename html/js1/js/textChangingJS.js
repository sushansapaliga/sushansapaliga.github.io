
var workToDo = "addInp1";
var textChangingTimerController;

function delLetter(lett){
    var finalLet = "";
    for(var i=0;i< lett.length-1;i++){
        finalLet = finalLet + lett[i];
    }
    return finalLet;
}

function performanceName(){
    var k = document.getElementById("changeText").innerHTML;
    var finalLet1 = "";

    if(k == "_"){
        k = "";
    }
    
    if (workToDo == "delInp1" || workToDo == "delInp2"){
        finalLet1 = delLetter(k);
    }else if(workToDo == "addInp1"){
        var letters = inpData[0];
        finalLet1 = k + letters[k.length];
    }else if( workToDo == "addInp2"){
        var letters = inpData[1];
        finalLet1 = k + letters[k.length];
    }

    if(finalLet1 == ""){
        finalLet1 = "_";
    }
    document.getElementById("changeText").innerHTML = finalLet1;
}

function changeText(){
    var k = document.getElementById("changeText").innerHTML;
    if( k == inpData[0] && workToDo == "addInp1" ){
        workToDo = "delInp1";
    }else if( k == "_" && workToDo == "delInp1" ){
        workToDo = "addInp2";
    }else if( k == inpData[1] && workToDo == "addInp2" ){
        workToDo = "delInp2";
    }else if(k == "_" && workToDo == "delInp2"){
        workToDo = "addInp1";
    }
    performanceName();
}

function onceLoaded(){

    inpData[0] += " ";
    inpData[1] += " "; 
    document.getElementById("changeText").innerHTML = inpData[0];
    textChangingTimerController = setInterval(function(){ changeText() }, 150);
}

onceLoaded();