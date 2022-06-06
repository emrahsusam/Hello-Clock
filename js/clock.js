
//Prompt Question- What's your name?
let sayName = prompt("Lütfen Adınızı Girin");
//Your Answer - Name
let info = document.getElementById("myName");
info.innerHTML = `${info.innerHTML}${sayName}`

   //Weekdays 
   let weekdays = new Array(7);
   weekdays[0] = "Pazar";
   weekdays[1] = "Pazartesi";
   weekdays[2] = "Salı";
   weekdays[3] = "Çarşamba";
   weekdays[4] = "Perşembe";
   weekdays[5] = "Cuma";
   weekdays[6] = "Cumartesi";

//Digital Clock Function
function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let day = weekdays[date.getDay()]; // Weekdays in Turkish

 
    
    

//Double writing not => 1-2-3.. like => 01-02-03..    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Show clock function 
    let time = h + ":" + m + ":" + s + " " + day;
    document.getElementById("myClock").innerHTML = time;
  
  setTimeout(function(){ showTime() }, 1000);
}

showTime();