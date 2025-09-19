let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];

function clickME(){
    let arrayLength=bgColorsArray.length;
    let randomIndex=Math.ceil(Math.random()*arrayLength);
    let randomColor=bgColorsArray[randomIndex-1];
    let container=document.getElementById("bgContainer");
    container.style.backgroundColor=randomColor;
}
