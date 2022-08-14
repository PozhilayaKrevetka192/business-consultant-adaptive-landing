"use strict"

let isMenuActive = false
const menu = document.querySelector(".header__menu")
const body = document.querySelector("body")
const burger = document.querySelector(".burger")

const toggleMenu = () => {
    if (isMenuActive) {
        menu.classList.remove("active")
        body.classList.remove("locked")
        burger.classList.remove("active")
        isMenuActive = false
    } else {
        menu.classList.add("active")
        body.classList.add("locked")
        burger.classList.add("active")
        isMenuActive = true
    }
}

