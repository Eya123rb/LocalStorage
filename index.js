function save (){
var x = document.getElementById("show").value;
localStorage.setItem("name",x);


}

function show (){
var x= localStorage.getItem("name");  
document.getElementById("box").innerHTML = x;

}
function del (){

localStorage.removeItem("name")
document.getElementById("box").innerHTML = ` `;
}
