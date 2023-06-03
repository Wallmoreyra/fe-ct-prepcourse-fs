/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloNuevo = [];

   for (var clave in objeto){
      let nuevoArray = [clave, objeto[clave]];
      arregloNuevo.push(nuevoArray);
   }

   return arregloNuevo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var returnObj = {};
    var arreglo = string.split('').sort(); 

    for(i = 0; i < arreglo.length; i++){   
        if (returnObj[arreglo[i]]){        
            returnObj[arreglo[i]] += 1;
        }else{
            returnObj[arreglo[i]] = 1;     
        }
    }

    return returnObj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloM = [];
   var arregloC = [];
   var resu = '';

   var arreglo = string.split('');
   for(let i = 0; i < arreglo.length; i++){
      if(arreglo[i].match(/[A-Z]/)){
         arregloM.push(arreglo[i]);
      }else {
         arregloC.push(arreglo[i]);
      }
   }
   arregloM = arregloM.join('');
   arregloC = arregloC.join('');
   resu = arregloM + arregloC;
   return resu;


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ');
   var palabrasEsp = palabras.map(function (palabra) {
      return palabra.split('').reverse().join('');
   });
   var fraseEsp = palabrasEsp.join(' ');
   return fraseEsp;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var capi = numero.toString().split('').reverse().join('');
   capi = parseInt(capi);
   if(capi === numero){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var eliLetras = ['a', 'b', 'c'];
   var exprec = new RegExp(eliLetras.join('|'), 'gi');
   var resu = string.replace(exprec, '');
   return resu;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var ordenado = arrayOfStrings.slice().sort(function(a, b){
      return a.length - b.length;
   });
   return ordenado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resul = [];
   for(let i = 0; i < array1.length; i++){
      for(let a = 0; a < array2.length; a++){
         if(array1[i] === array2[a]){
            resul.push(array1[i]);
         }
      }
   }
   return resul;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
