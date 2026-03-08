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

function toggleMenu(){

const nav=document.getElementById("navMenu")

nav.classList.toggle("active")

}

function toggleTheme(){

document.body.classList.toggle("light")

const theme=document.body.classList.contains("light")

localStorage.setItem("theme",theme)

}

if(localStorage.getItem("theme")==="true"){

document.body.classList.add("light")

}

let currentLang="ja"

const translations={

en:{
about:"About",
projects:"Projects",
links:"Links",
news:"News",
news1_title:"Server Update",
news1_text:"The Minecraft server was updated.",
news2_title:"New Mod",
news2_text:"A new Minecraft mod has been released."
},

ja:{
about:"概要",
projects:"プロジェクト",
links:"リンク",
news:"最新情報",
news1_title:"サーバー更新",
news1_text:"Minecraftサーバーを最新版に更新しました。",
news2_title:"新しいMOD",
news2_text:"新しいMinecraft MODを公開しました。"
}

}

function toggleLanguage(){

currentLang=currentLang==="ja" ? "en":"ja"

document.querySelectorAll("[data-lang]").forEach(el=>{

const key=el.getAttribute("data-lang")

if(translations[currentLang][key]){

el.textContent=translations[currentLang][key]

}

})

}
