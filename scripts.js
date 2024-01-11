let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

let countdownDate = new Date("January 12, 2024 00:00:00").getTime()

setInterval(function (papa) {

    let currentDate = new Date().getTime()

    let timeRemaining = countdownDate - currentDate

    let d = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    let h = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    let s = Math.floor((timeRemaining % (1000 * 60)) / 1000)

    days.innerHTML = d < 10 ? "0" + d : d
    hours.innerHTML = h < 10 ? "0" + h : h
    minutes.innerHTML = m < 10 ? "0" + m : m
    seconds.innerHTML = s < 10 ? "0" + s : s

}, 1000);