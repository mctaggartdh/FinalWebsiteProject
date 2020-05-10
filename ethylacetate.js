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