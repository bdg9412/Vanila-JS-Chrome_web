const title = document.getElementById("title");

title.innerText = "got ya!";

title.style .color = "gray";
//------------------------------------------
function handleTitleClick() {
    console.log("title was clicked!");
}

function handleMousEnter(){
    console.log("mouse hover!");
}

function handleMouseLeave(){
	console.log("mouse leave!");
}

title.addEventListener("click", handleTitleClick); // 클릭 이벤트시 handleTitleClick 호출
title.addEventListener("mouseenter", handleMousEnter); // 마우스 호버시 handleMousEnter 호출
title.addEventListener("mouseleave", handleMouseLeave); // 마우스 호버 해제시 handleMous

//-----------------------------------------------------------------------------------
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);