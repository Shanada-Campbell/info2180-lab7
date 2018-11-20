// JavaScript File
window.onload=function(){
    let button = document.getElementById("lookup");
    let checkbox = document.getElementById("checkbox");
    let country = document.getElementById("country");
    button.addEventListener("click",function(){
        let hRequest = new XMLHttpRequest();
        let cvalue = country.value;
        hRequest.onreadystatechange = function(){
            if (hRequest.readyState === 4 && hRequest.status === 200)
            { 
               document.getElementById("result").innerHTML = "<h3>Result</h3>" + hRequest.responseText;
            }
        };
        if(checkbox.checked){
            hRequest.open("GET","world.php?all=true",true);
        }else{
            hRequest.open("GET","world.php?country=" + cvalue,true);
        }
        hRequest.send();
    }); 
};