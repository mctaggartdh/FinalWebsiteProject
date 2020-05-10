solNmrS = document.getElementById("diethylnmrsmall");
NmrDiv = document.getElementById("diethylnmrdiv");
solNmrB = document.getElementById("diethylnmrbig");

solIrS = document.getElementById("diethylirsmall");
IrDiv = document.getElementById("diethylirdiv");
solIrB = document.getElementById("diethylirbig");

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