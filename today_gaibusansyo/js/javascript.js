var today = new Date();
var todayHtml = today.getFullYear() + "/" + (today.getMonth() + 1)+ "/" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.write("<p class='date'>" + todayHtml + "</p>");

window.onload = function() {
    var HTML = document.getElementById('js');
    // console.log(HTML);
    HTML.innerHTML = "<p class='date'>" + todayHtml + "</p>";
}