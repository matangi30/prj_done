//button traslate
var btnTraslate = document.querySelector('#btn-traslate');
//console.log(btnTraslate)

//textarea
var txtarea = document.querySelector('#text-input');
//console.log(txtarea);

var output = document.querySelector('#text-output');

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getUrl(text){
    return url  + "?" +"text=" + text 
}


//give an ouput after click on button

function clickeventhandle() {
    var input = txtarea.value;
    fetch(getUrl(input))
    .then(Response => Response.json())
    .then(json => {
                     console.log(json);
                     output.innerText =  json.contents.text
})
    

    document.getElementById("text-input").style.borderColor ="red";
    //output.innerText = "Taslate " + txtarea.value;
};
btnTraslate.addEventListener("click", clickeventhandle);
