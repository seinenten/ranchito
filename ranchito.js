var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var cantidadp = aleatorio (1,6);
var cantidadc = aleatorio (1,6);
var cantidadv = aleatorio (1,6);
var xd = aleatorio(0,420);
var yd = aleatorio(0,420);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png",
    cargaOk: false
};

var vaca = {
    url:  "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png",
    cargaOk: false
}

var pollo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png",
    cargaOk: false
}

var perro = {
    url: "perro.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

perro.imagen = new Image();
perro.imagen.src = perro.url;
perro.imagen.addEventListener("load",cargarPerro);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
}

function cargarPerro(){
    perro.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOk){
        
        for(var v=0;v<cantidadv;v++){
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x*60;
            var y = y*60;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
    if(cerdo.cargaOk){
        for(var v=0;v<cantidadc;v++){
            var xc = aleatorio(0,7);
            var yc = aleatorio(0,7);
            var xc = xc*60;
            var yc = yc*60;
            papel.drawImage(cerdo.imagen,xc,yc);
        }
    }
    if(pollo.cargaOk){
        for(var v=0;v<cantidadp;v++){
            var xp = aleatorio(0,7);
            var yp = aleatorio(0,7);
            var xp = xp*60;
            var yp = yp*60;
            papel.drawImage(pollo.imagen,xp,yp);
        }
    }
    if(perro.cargaOk){
        papel.drawImage(perro.imagen,xd,yd);
    }
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max-min+1)+min);
    return resultado;
}

document.addEventListener("keydown",dibujarTeclado);


function dibujarTeclado(evento){
    var movimiento = 5;

    switch(evento.keyCode){
        case teclas.DOWN:
            papel.drawImage(perro.imagen,xd,yd+movimiento);
            yd= yd +movimiento;
        break;
        case teclas.UP:
            papel.drawImage(perro.imagen,xd,yd-movimiento);
            yd= yd-movimiento;
            console.log("arriba");
        break;
        case teclas.LEFT:
            papel.drawImage(perro.imagen,xd-movimiento,yd);
            xd= xd -movimiento;
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            papel.drawImage(perro.imagen,xd+movimiento,yd);
            xd= xd +movimiento;
            console.log("derecha");
        break;
    }
}