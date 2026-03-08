const MIN_LOAD_TIME = 2500;
const startTime = Date.now();

if (typeof particlesJS !== "undefined") {

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
})

}

function openCookieSettings(){
window.location.href="cookie.html";
}

function acceptCookies(){

localStorage.setItem("cookieAccepted","true")

const banner=document.getElementById("cookieBanner")

if(banner){
banner.style.display="none"
}

}

if(localStorage.getItem("cookieAccepted")){

const banner=document.getElementById("cookieBanner")

if(banner){
banner.style.display="none"
}

}

function closeAnnouncement(){

const a=document.getElementById("announcement")

if(a){
a.style.display="none"
}

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

const analytics=document.getElementById("analyticsCookie")?.checked
const marketing=document.getElementById("marketingCookie")?.checked

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

const analytics=document.getElementById("analyticsCookie")
const marketing=document.getElementById("marketingCookie")

if(analytics) analytics.checked=settings.analytics
if(marketing) marketing.checked=settings.marketing

}


const loader=document.getElementById("loader")

if(loader){

const elapsed=Date.now()-startTime
const remaining=MIN_LOAD_TIME-elapsed

setTimeout(()=>{

loader.classList.add("loaderFade")

setTimeout(()=>{
loader.style.display="none"
},500)

}, remaining>0 ? remaining : 0)

}

})
