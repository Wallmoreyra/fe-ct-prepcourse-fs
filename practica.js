function primo(numero){
    var esONo = true;
    if(numero === 2){
        esONo = true;
    }else if (numero === 0 || numero < 0){
        esONo = false;
    }else if(numero > 2){
        for(var i = 2; i < numero; i++){
            if(numero % i === 0){
                esONo = false;
            }
        }
    }
   
    console.log(esONo);
}

primo(2);
primo(3);
primo(4);
primo(6);
primo(11);
primo(13);
primo(14);
primo(0);
primo(-1);

function cantidad(numero1){
    var cant = numero1 + "";
    console.log(cant.length);
};

cantidad(12);
cantidad(1111);


var arrayra = ["casa", "perro", "gato"];

function unirPalabras (palabras){
    var palabraUni = "";
    for (var i = 0; i < palabras.length; i++)
        if( i === palabras.length - 1){
            palabraUni = palabraUni + palabras[i];
        }else{
            palabraUni = palabraUni + palabras[i] + " ";
        }
    

    return palabraUni;
}

console.log(unirPalabras(arrayra));

function multipl(){
    var multi = 1;
    if(arguments.length === 1){
        return 12;
     }else if (arguments.length > 1){
        for(var i = 0; i < arguments.length; i++){
            multi = multi * arguments[i];
        }
        return multi;
     }else if (arguments.length === 0){
        return 0;
     }
}

console.log(multipl(12));
console.log(multipl(1,2,10));
console.log(multipl());

var numero2 = 22;
numero2 = numero2 + "";

console.log(numero2.split(''));
console.log(numero2[0] == 2);

function wololo(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var result = [];
    var cont2 = 0;
    for(var i = 0; i < 10; i++){
       var cont1 = num[i] + 2;
       cont2 ++;
       if (cont1 === i ){
          console.log("Se interrumpió la ejecución");
          break;
          
       }
       result.push(cont1);
    }
    if (result.length === 10){
        console.log(result);
    }
    
 }

 var arreg01 = [1,2,3,4,5,6,7,8,9,10,11,22,33];
 var arreg02 = [2,33,0,55,66,77,88,99,-1];

 wololo(arreg01);
 wololo(arreg02);
