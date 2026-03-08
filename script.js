
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
})


function acceptCookies(){

localStorage.setItem("cookieAccepted","true")
document.getElementById("cookieBanner").style.display="none"

}

if(localStorage.getItem("cookieAccepted")){

document.getElementById("cookieBanner").style.display="none"

}


function closeAnnouncement(){

document.getElementById("announcement").style.display="none"

}


const reveals=document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

reveals.forEach(r=>{

const top=r.getBoundingClientRect().top
const windowHeight=window.innerHeight

if(top<windowHeight-100){

r.classList.add("active")

}

})

})
