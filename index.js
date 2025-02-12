let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

let homeContainer = document.querySelector(".home-container");
let guestContainer = document.querySelector(".guest-container");

let home = 0;
let guest = 0;

function plus1h() {
    home += 1;
    updateScoreH()
}

function plus2h() {
    home += 2;
    updateScoreH()
}

function plus3h() {
    home += 3;
    updateScoreH()
}

function plus1g() {
    guest += 1;
    updateScoreG()
}

function plus2g() {
    guest += 2;
    updateScoreG()
}

function plus3g() {
    guest += 3;
    updateScoreG()
}

function updateScoreH() {
    homeEl.textContent = home;
    updateBorder();
}

function updateScoreG() {
    guestEl.textContent = guest;
    updateBorder();
}


function updateBorder() {
    if (home > guest) {
        homeContainer.style.border = "3px solid #26929E";
        guestContainer.style.border = "none";
    } else if (guest > home) {
        guestContainer.style.border = "3px solid #26929E";
        homeContainer.style.border = "none";
    } else {
        homeContainer.style.border = "none";
        guestContainer.style.border = "none";
    }
}


function resetGame() {
    home = 0;
    guest = 0;
    homeEl.textContent = home;
    guestEl.textContent = guest;
    updateBorder();
}

