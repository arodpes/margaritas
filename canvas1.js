


//window.onload=dibujar;

function dibujar(){
    var miLienzo = document.getElementById("miLienzo");
    miLienzo.width=miLienzo.width;//borrar contenido
    var ctx = miLienzo.getContext('2d');
    ctx.beginPath();
    a=parseFloat(document.forms["formulario"]["a"].value);
    b=parseFloat(document.forms["formulario"]["b"].value);
    c=parseFloat(document.forms["formulario"]["c"].value);
    centro=parseFloat(document.forms["formulario"]["centro"].value);
    aumento=parseFloat(document.forms["formulario"]["aumento"].value);
    vueltas=parseFloat(document.forms["formulario"]["vueltas"].value);
    puntos=parseFloat(document.forms["formulario"]["puntos"].value);   
    ctx.moveTo(calculoX(a,b,c,0,centro,aumento),calculoY(a,b,c,0,centro,aumento));
    for (angulo=0;angulo<=vueltas*Math.PI;angulo=angulo+Math.PI/puntos)
    {
        ctx.lineTo(calculoX(a,b,c,angulo,centro,aumento),calculoY(a,b,c,angulo,centro,aumento));
    }
    ctx.stroke();
}
function calculoX(a,b,c,tita,centro,aumento){
    return ((a*Math.cos(c*tita)+b)*Math.cos(tita)*aumento)+centro;
}
function calculoY(a,b,c,tita,centro,aumento){
    return ((a*Math.cos(c*tita)+b)*Math.sin(tita)*aumento)+centro;
}
 
