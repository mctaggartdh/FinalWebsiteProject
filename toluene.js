solNmrS = document.getElementById("tolnmrsmall");
NmrDiv = document.getElementById("tolnmrdiv");
solNmrB = document.getElementById("tolnmrbig");

solIrS = document.getElementById("tolirsmall");
IrDiv = document.getElementById("tolirdiv");
solIrB = document.getElementById("tolirbig");

solNmrS.addEventListener("mouseover", mouseOver);
solNmrS.addEventListener("mouseout", mouseOut);

solIrS.addEventListener("mouseover", mouseOver2);
solIrS.addEventListener("mouseout", mouseOut2);

function mouseOver() {
    NmrDiv.style.visibility = "visible";
    solNmrB.style.opacity = 1;
}

function mouseOut() {
    NmrDiv.style.visibility = "hidden";
    solNmrB.style.opacity = 0;
}

function mouseOver2() {
    IrDiv.style.visibility = "visible";
    solIrB.style.opacity = 1;
}

function mouseOut2() {
    IrDiv.style.visibility = "hidden";
    solIrB.style.opacity = 0;
}

moreInfo = document.getElementById("moreinfo");
popUp = document.getElementById("popup");
Close = document.getElementById("close");

moreInfo.addEventListener("click", infoClick);
moreInfo.addEventListener("mouseover", infoHover);
moreInfo.addEventListener("mouseout", infoOut);
Close.addEventListener("click", closeClick);
Close.addEventListener("mouseover", closeHover);
Close.addEventListener("mouseout", closeOut);

function infoClick() {
    popUp.style.visibility = "visible";
}

function closeClick() {
    popUp.style.visibility = "hidden";
}

function infoHover() {
    moreInfo.style.color = "rgb(0, 0, 252)";
}

function infoOut() {
    moreInfo.style.color = "";
}

function closeHover() {
    Close.style.color = "rgb(0, 0, 252)";
}

function closeOut() {
    Close.style.color = "";
}