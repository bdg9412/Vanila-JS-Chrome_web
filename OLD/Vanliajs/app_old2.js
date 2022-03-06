const title = document.getElementById("title");
let flag = false;
function handleTitleClick(){
    console.log(flag);
    if (flag==false){
        title.style.color = "blue";
        console.log(title.classList[1])
        flag = true;
    }
    else{
        title.style.color = "gray";
        flag = false;
    }

}

title.addEventListener("click", handleTitleClick)