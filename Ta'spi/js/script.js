"use strict"

const rosary = () => {
    const num = document.querySelector(".num");
    num.value = parseInt(num.value) + 1;
}

const btnEl = document.querySelector(".btn");
btnEl.addEventListener('click', rosary);

const rosaryResed = () => {
    const num = document.querySelector(".num");
    num.value = 0;
}

const resetBtn = document.querySelector(".resed")
resetBtn.addEventListener('click', rosaryResed)
