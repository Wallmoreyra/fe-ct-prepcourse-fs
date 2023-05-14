var deportes = {
    conBalon:['Football', 'Basketball', 'Rugby'],
    sinBalon:['Boxeo', 'Surf', 'Trekking'],
};

// Acceder
var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios:{ esProgramador: true }
};
console.log(persona.edad);

// Asignar
persona.nombre = 'Martin';
console.log(persona.nombre);
persona.edad = 32;
console.log(persona.edad);

// Crear
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

// Borrar
delete autos.marcas;
console.log(autos);

var misFunciones = {
    saludar: function (){
        console.log('Hola');
    },
}
misFunciones.saludar();

// DOT NOTATION
var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes'],
};
console.log(atuendos.manos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

// HAS OWN PROPERTY
var libro = {
    autor: 'Borges',
    genero: 'Policial',
    año: 1990
};
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);

// KEYS
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = {
    continentes: 7,
    paises: 195,
    oceanos: 5
}

// For in
for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor: ' + mundo[prop]);
}

// THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: 'true',
    dueña: 'Maria Lopez',
    info: function(){
        console.log('Mi perro es un ' + this.raza);
    },
};
mascota.info();