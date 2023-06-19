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
            htmlScript += "<p><span><i class=\"bx bx-medal bx-flip-horizontal\" style=\"color:#777\"></i></span><span>" + jsonList[i].lenguaje[0] + ", "+ jsonList[i].lenguaje[1] + "</span><span><form action=\"appointment.html\" method=\"get\"><input type=\"text\" id=\"nombre\" name=\"nombre\" value=\""+ jsonList[i].nombre +"\"><input type=\"text\" id=\"apellido\" name=\"apellido\" value=\""+ jsonList[i].apellido +"\"><input type=\"text\" id=\"costo\" name=\"costo\" value=\""+ jsonList[i].costo +"\"><input type=\"text\" id=\"img\" name=\"img\" value=\""+ jsonList[i].img +"\"><button type=\"submit\" class=\"btn btn-outline-light\">Reservar</button></form></span></p>";
            htmlScript += "</div>";
            htmlScript += "</div>";
        }
        document.getElementById("mentor").innerHTML = htmlScript;
    }
    xhttp.open("GET", "assets/js/mentor.json", true);
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

function resumeReserva() {
    var params = new URLSearchParams(window.location.search);

    // Get the value of the 'name' parameter
    var name = params.get('nombre');
    console.log(name); // Output: John
    return name
}

loadPay();
loadMentor();
loadReserva();
resumeReserva();