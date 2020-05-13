ethAceNmrS = document.getElementById("ethylacenmrsmall");
NmrDiv = document.getElementById("ethylacenmrdiv");
ethAceNmrB = document.getElementById("ethylacenmrbig");

ethAceIrS = document.getElementById("ethylaceirsmall");
IrDiv = document.getElementById("ethylaceirdiv");
ethAceIrB = document.getElementById("ethylaceirbig");

ethAceNmrS.addEventListener("mouseover", mouseOver);
ethAceNmrS.addEventListener("mouseout", mouseOut);

ethAceIrS.addEventListener("mouseover", mouseOver2);
ethAceIrS.addEventListener("mouseout", mouseOut2);

function mouseOver() {
    NmrDiv.style.visibility = "visible";
    ethAceNmrB.style.opacity = 1;
}

function mouseOut() {
    NmrDiv.style.visibility = "hidden";
    ethAceNmrB.style.opacity = 0;
}

function mouseOver2() {
    IrDiv.style.visibility = "visible";
    ethAceIrB.style.opacity = 1;
}

function mouseOut2() {
    IrDiv.style.visibility = "hidden";
    ethAceIrB.style.opacity = 0;
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