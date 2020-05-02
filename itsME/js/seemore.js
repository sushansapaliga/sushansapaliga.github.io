function loadMore(){
    // var element = document.getElementsByClassName("d-none");
    // console.log(element);
    // for(var i =0 ; i< element.length; i++){
    //     element[i].classList.remove("d-none");
    // }

    while(true){
        var element = document.getElementsByClassName("d-none");
        if (element.length > 0){
            element[0].classList.remove("d-none");
        }else{
            break;
        }
    }

    document.getElementById("seemore").classList.add("d-none");
}


document.getElementById("seemore").addEventListener("click", loadMore);