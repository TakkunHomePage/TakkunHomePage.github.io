particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
})

function openCookieSettings(){
    window.location.href = "cookie.html";
}

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

function saveCookieSettings(){

const analytics=document.getElementById("analyticsCookie").checked
const marketing=document.getElementById("marketingCookie").checked

localStorage.setItem("cookieSettings",JSON.stringify({
analytics:analytics,
marketing:marketing
}))

alert("Cookie設定を保存しました")

}


function resetCookieSettings(){

localStorage.removeItem("cookieSettings")

location.reload()

}


window.addEventListener("load",()=>{

const settings=JSON.parse(localStorage.getItem("cookieSettings"))

if(settings){

document.getElementById("analyticsCookie").checked=settings.analytics
document.getElementById("marketingCookie").checked=settings.marketing

}

})
