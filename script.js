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
