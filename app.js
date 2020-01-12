const clock = document.querySelector('.clock-view');
      


eventListener();

function eventListener(){
    document.addEventListener('DOMContentLoaded', dateView);
}

function dateView(){
    const date = new Date();
     h = date.getHours();
     m = date.getMinutes();
     s = date.getSeconds();

     m = checkTime(m);
     s = checkTime(s);
     //
     d = date.getDate();
     y = date.getFullYear();

     monthList = ['Stycznia','Lutego','Marca','Kwietnia','Maja','Czerwca','Lipieca','Sierpnia','Września','Października','Listopada','Grudnia'];  
     month = monthList[date.getMonth()];


     clock.innerHTML = h+":"+m+":"+s+" Dzień: "+d+" "+month+" "+y;
     const t = setTimeout(dateView,500);    
    
}


function checkTime(i){
    if (i < 10) {i = "0" + 1};
    return i;

}