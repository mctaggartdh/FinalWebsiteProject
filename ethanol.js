ethNmrS = document.getElementById("ethanolnmrsmall");
NmrDiv = document.getElementById("ethanolnmrdiv");
ethNmrB = document.getElementById("ethanolnmrbig");

ethIrS = document.getElementById("ethanolirsmall");
IrDiv = document.getElementById("ethanolirdiv");
ethIrB = document.getElementById("ethanolirbig");

ethNmrS.addEventListener("mouseover", mouseOver);
ethNmrS.addEventListener("mouseout", mouseOut);

ethIrS.addEventListener("mouseover", mouseOver2);
ethIrS.addEventListener("mouseout", mouseOut2);

function mouseOver() {
    NmrDiv.style.visibility = "visible";
    ethNmrB.style.opacity = 1;
}

function mouseOut() {
    NmrDiv.style.visibility = "hidden";
    ethNmrB.style.opacity = 0;
}

function mouseOver2() {
    IrDiv.style.visibility = "visible";
    ethIrB.style.opacity = 1;
}

function mouseOut2() {
    IrDiv.style.visibility = "hidden";
    ethIrB.style.opacity = 0;
}