
const btn = document.getElementById("btn");
const ratings = document.getElementsByName("li");
const front= document.getElementById("fro");
const back= document.getElementById("bac");


btn.onclick = function() {
    front.style.display = "none";
    back.style.display = "block";

}
