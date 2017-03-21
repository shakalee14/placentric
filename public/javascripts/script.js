var body = document.getElementsByTagName("body")[0];

body.addEventListener("loader", loader(), false)

var myVar;

function loader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("services").style.display = "block";
}

$(document).ready(function(){
  $("#myModal").modal('show');
});