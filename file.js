function time(){
var year=new Date()
var current_year=year.getFullYear()
 document.getElementById("year").textContent=current_year   
}
setInterval(time, 1000);

