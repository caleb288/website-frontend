const burger  = document.getElementById("burger");
const navlink  = document.getElementById("navlink");
const close  = document.getElementById("close");


if(burger) {
    burger.addEventListener("click" , () => {
       navlink.classList.add('act')
    })
}
if (close) {
    close.addEventListener("click" , () => {
        navlink.classList.remove("act")
    }) 
}