
var t2TabFontMaintainer = 0; 

function t2ChangeFontFamily(){
    document.getElementById("t2Text").style.fontFamily = t2FontStyle[t2TabFontMaintainer];
    t2TabFontMaintainer ++;
    t2TabFontMaintainer = t2TabFontMaintainer % t2FontStyle.length;
    
}


function t2OnceLoaded(){
    setInterval(function(){ t2ChangeFontFamily(); },1500);
}

t2OnceLoaded();