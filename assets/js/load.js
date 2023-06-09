function loadPay() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        for(var i=0; i< jsonList.length; i++){
            htmlScript += "<div class=\"row align-items-center my-2 fondoSec rounded-4\">";
            htmlScript += "<div class=\"col-12 col-md-3\"><p class=\"sin-padding\">" + jsonList[i].fecha + "</p></div>";
            htmlScript += "<div class=\"col-12 col-md-3\"><p class=\"sin-padding\">S/. " + jsonList[i].monto + "</p></div>";
            htmlScript += "<div class=\"col-12 col-md-3\"><p class=\"sin-padding\">" + jsonList[i].estado + "</p></div>";
            htmlScript += "<div class=\"col-12 col-md-3\"><button type=\"button\" class=\"btn btn-light\" onclick=\"location.href='enlace1.html';\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-clipboard\" viewBox=\"0 0 16 16\">";
            htmlScript += "<path d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z\"/><path d=\"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z\"/>";
            htmlScript += "</svg></button></div>";
            htmlScript += "</div>";
        }
        document.getElementById("pay").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/pay.json", true);
    xhttp.send();
}
function loadMentor() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        for(var i=0; i< jsonList.length; i++){
            htmlScript += "<div class=\"mentores__item\">";
            htmlScript += "<div class=\"mentores__item__picture\"><img src=\"./assets/img/" + jsonList[i].img + ".png\" alt=\"\"></div>";
            htmlScript += "<div class=\"mentores__item__description\"><p><span><i class=\"bx bx-medal bx-flip-horizontal\" style=\"color:#777\"></i></span><span>" + jsonList[i].nombre + " " + jsonList[i].apellido + "</span><span>S/. "+ jsonList[i].costo +"</span></p>";
            htmlScript += "<p><span><i class=\"bx bx-medal bx-flip-horizontal\" style=\"color:#777\"></i></span><span>" + jsonList[i].lenguaje[0] + ", "+ jsonList[i].lenguaje[1] + "</span><span><form action=\"appointment.html\" method=\"get\"><input type=\"text\" id=\"id\" name=\"id\" value=\""+ i +"\"><button type=\"submit\" class=\"btn btn-outline-light\">Reservar</button></form></span></p>";
            htmlScript += "</div>";
            htmlScript += "</div>";
        }
        document.getElementById("mentor").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/mentor.json", true);
    xhttp.send();
}

function loadHistory() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        for(var i=0; i< jsonList.length; i++){
            htmlScript += "<div class=\"row align-items-center obj\" ><div class=\"col-7 text-end\">";
            htmlScript += "<p class=\"sin-padding\">" + jsonList[i].fecha +", " + jsonList[i].Nombre + "</p>";
            htmlScript += "</div>";
            htmlScript += "<div class=\"col-5 text-start\">";
            htmlScript += "<button type=\"button\" class=\"btn btn-outline-light\" onclick=\"location.href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZ28yQscb_AhWCg4QIHW3lAAsQwqsBegQIDhAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU';\">";
            htmlScript += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"30\" fill=\"currentColor\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/></svg></button></div></div>"
        }
        document.getElementById("history").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/history.json", true);
    xhttp.send();
}
function loadReservation() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        for(var i=0; i< jsonList.length; i++){
            htmlScript += "<div class=\"row align-items-center obj\" ><div class=\"col-7 text-end\">";
            htmlScript += "<p class=\"sin-padding\">" + jsonList[i].fecha +", " + jsonList[i].Nombre + "</p>";
            htmlScript += "</div>";
            htmlScript += "<div class=\"col-5 text-start\">";
            htmlScript += "<button type=\"button\" class=\"btn btn-outline-light\" onclick=\"location.href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZ28yQscb_AhWCg4QIHW3lAAsQwqsBegQIDhAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU';\">";
            htmlScript += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"30\" fill=\"currentColor\" class=\"bi bi-link\" viewBox=\"0 0 16 16\"><path d=\"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z\"/><path d=\"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z\"/></svg></button></div></div>"
        }
        document.getElementById("reservation").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/reservation.json", true);
    xhttp.send();
}



function getURLParameter(p) {
    var url = new URL(window.location.href);
    var value = url.searchParams.get(p);
    return value;
}

function loadReserva() {
    const xhttp = new XMLHttpRequest();
    var nombre=getURLParameter('nombre');
    var apellido=getURLParameter('apellido');
    var costo=getURLParameter('costo');
    var img=getURLParameter('img');
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        htmlScript += "<div class=\"col-12 col-lg-4 my-2\">";
        htmlScript += "<img class=\"mentor rounded-5\" src=\"./assets/img/"+ img +".png\" alt=\"foto mentor\">";
        htmlScript += "</div>";
        htmlScript += "<div class=\"col-6 col-lg-4 my-2\"><p class=\"us-title\">" + nombre + " " + apellido +"</p></div>";
        htmlScript += "<div class=\"col-6 col-lg-4 my-2\"><p class=\"us-title\">S/. " + costo +"/h</p></div>";
        document.getElementById("reserva").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/mentor.json", true);
    xhttp.send();
}

function loadReserva2() {
    const xhttp = new XMLHttpRequest();
    var i=getURLParameter('id');
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        htmlScript += "<div class=\"col-12 col-lg-4 my-2\">";
        htmlScript += "<img class=\"mentor rounded-5\" src=\"./assets/img/"+ jsonList[i].img +".png\" alt=\"foto mentor\">";
        htmlScript += "</div>";
        htmlScript += "<div class=\"col-6 col-lg-4 my-2\"><p class=\"us-title\">" + jsonList[i].nombre + " " + jsonList[i].apellido +"</p></div>";
        htmlScript += "<div class=\"col-6 col-lg-4 my-2\"><p class=\"us-title\">S/. " + jsonList[i].costo +"/h</p></div>";
        document.getElementById("res").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/mentor.json", true);
    xhttp.send();
}

function loadDesc(){
    const xhttp = new XMLHttpRequest();
    var texto=getURLParameter('texto');
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        htmlScript += "Descripción: " + texto;
        document.getElementById("desc").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/mentor.json", true);
    xhttp.send();
}

function loadSum(){
    const xhttp = new XMLHttpRequest();
    var id=getURLParameter('id');
    xhttp.onload = function () {
        var jsonList = JSON.parse(this.responseText);
        var htmlScript = "";
        htmlScript += "<input type=\"text\" id=\"id\" name=\"id\" value=\""+ id +"\"><button type=\"submit\" class=\"btn btn-outline-light\">Reservar</button>";
        document.getElementById("btn").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/mentor.json", true);
    xhttp.send();
}
loadReserva2();
loadSum();
loadPay();
loadMentor();
loadReserva();
loadDesc();
loadHistory();
loadReservation();