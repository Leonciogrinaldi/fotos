var reconocimiento=window.webkitSpeechRecognition;
var voz=new reconocimiento;

function habla(){
    document.getElementById("texto").innerHTML="";
    voz.start();
}

voz.onresult=function(parametro){
    console.log(parametro);
    var palabras=parametro.results[0][0].transcript;
    console.log(palabras);
    if(palabras=="Toma mi selfie"){
        console.log("te voy a tomar tu foto en 5 segundos");
        repite();
    }
    document.getElementById("texto").innerHTML=palabras;
}

function repite(){
    synth=window.speechSynthesis;
    var texto_escuchado="te voy a tomar tu foto en 5 segundos";
    var convertir=new SpeechSynthesisUtterance(texto_escuchado);
    synth.speak(convertir);
    Webcam.attach(camara);
    setTimeout(function(){
        tomar_foto();
    },5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 camara=document.getElementById("camara");

 function tomar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("imagen").innerHTML='<img id="foto" src="'+data_uri+'">';
    })
 }

 function guardar_foto(){
    enlace=document.getElementById("guardar");
    var img=document.getElementById("foto").src;
    enlace.href=img;
 }