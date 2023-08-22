let menu = document.querySelector(".menu")
let content = document.querySelector(".content")
let list = document.querySelector("#list")
let backMenu = document.querySelector(".backMenu")
let search = document.querySelector("#search")
let input = document.querySelector(".input")

let funcBtn = 1

list.addEventListener("click", function(){
    if(funcBtn === 1){
        content.classList.remove("classAnimationIntoLeft")
        menu.classList.remove("classAnimationIntoLeft")
        content.classList.add("classAnimationInto")
        menu.classList.add("classAnimationInto")
        backMenu.style.animation = "animationMenuLeft 1s"
        setTimeout(() => {
            content.style.marginLeft = "150px"
            menu.style.marginLeft = "150px"    
        }, 900)
        funcBtn = 2
    }else if(funcBtn === 2){
        content.classList.remove("classAnimationInto")
        menu.classList.remove("classAnimationInto")
        content.classList.add("classAnimationIntoLeft")
        menu.classList.add("classAnimationIntoLeft")
        backMenu.style.animation = "animationMenuLeft2 1s"
        setTimeout(() => {
            content.style.marginLeft = "0px"
            menu.style.marginLeft = "0px"    
        }, 900)     
        funcBtn = 1
    }
})

let funcMenu = 1

search.addEventListener("click", function(){
    if(funcMenu === 1){
        input.style.display = "flex"
        input.style.animation = "search 0.5s"
        funcMenu = 2
    }else if(funcMenu === 2){
        input.style.animation = "searchLeft 0.5s"
        setTimeout(() => {
            input.style.display = "none"
        }, 480) 
        funcMenu = 1
    }
})