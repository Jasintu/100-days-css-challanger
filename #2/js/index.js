let changeMenu = document.getElementById("content")
let table1 = document.getElementById("table")
let table2 = document.getElementById("table2")
let table3 = document.getElementById("table3")
let container = document.getElementById("container")
let changeMenu2 = document.getElementById("content2")

var set = 1;

changeMenu.addEventListener("click", function(){
    if(set == 1){

        set = 2;
        table3.style.animation = "animation 0.2s"
        setTimeout(() => {
            table2.style.display = "none"
            table3.style.top = "50%"
            table3.style.left = "38%"
            table3.style.transform = "translate(-50%, -50%)"
            table3.style.animation = "animation2L 0.2s"
            table3.style.transform = "rotate(45deg)"
        }, 150)
        
        table1.style.animation = "animation 0.2s"
        setTimeout(() => {
            table1.style.top = "50%"
            table1.style.left = "38%"
            table1.style.transform = "translate(-50%, -50%)"     
            table1.style.animation = "animation2R 0.2s"
            table1.style.transform = "rotate(-45deg)"       
        }, 150)

    } else if (set === 2) {

        set = 1;
        table2.style.display = ""
        table3.style.animation = "animation3R 0.2s"
        table3.style.transform = "rotate(0deg)"
        table3.style.top = "45%"
        table3.style.left = "50%"
        table3.style.transform = "translate(-50%, -50%)"   
        
        table1.style.animation = "animation3L 0.2s"
        table1.style.transform = "rotate(0deg)"   
        table1.style.top = "55%"
        table1.style.left = "50%"
        table1.style.transform = "translate(-50%, -50%)"   

    }
})
