/*BURGERMENU JavaScript*/

/*Når siden loader op, skal den kalde funtionen sidenVises*/
window.addEventListener("load", sidenVises);


/*Her vælger vi #menuknap id'et og giver den en clickeffekt, som fører os til functionen toggleMenu*/
function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

/*toggleMenu er vores tænd og sluk knap, der enten lader vores burgermenu være ☰ hvis den ikke er trykket,*/
/*men hvis den er trykket er id'et #menu hidden og ☰ ændre sig til et X*/
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
