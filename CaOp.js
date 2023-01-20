const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')();
var matriz= new Array();
for (var i = 0; i < 10; i++) {
    matriz[i] = new Array();
}
var aux = true
var aux2 = true
var sinootro
var banear = true
var array=[0,1,2,3,4,5,6,7,8,9]
var baneados=[]
repetidos = false
encontrado = false;
caminos = ""


matriz[0][0]=0;
matriz[0][1]=1;
matriz[0][2]=1;
matriz[0][3]=1;
matriz[0][4]=1;
matriz[0][5]=1;
matriz[0][6]=0;
matriz[0][7]=1;
matriz[0][8]=1;
matriz[0][9]=1;

matriz[1][0]=1;
matriz[1][1]=0;
matriz[1][2]=1;
matriz[1][3]=1;
matriz[1][4]=1;
matriz[1][5]=0;
matriz[1][6]=1;
matriz[1][7]=1;
matriz[1][8]=1;
matriz[1][9]=0;

matriz[2][0]=1;
matriz[2][1]=1;
matriz[2][2]=0;
matriz[2][3]=1;
matriz[2][4]=1;
matriz[2][5]=1;
matriz[2][6]=1;
matriz[2][7]=1;
matriz[2][8]=1;
matriz[2][9]=1;

matriz[3][0]=1;
matriz[3][1]=1;
matriz[3][2]=1;
matriz[3][3]=0;
matriz[3][4]=1;
matriz[3][5]=1;
matriz[3][6]=1;
matriz[3][7]=1;
matriz[3][8]=1;
matriz[3][9]=1;

matriz[4][0]=1;
matriz[4][1]=1;
matriz[4][2]=1;
matriz[4][3]=1;
matriz[4][4]=0;
matriz[4][5]=1;
matriz[4][6]=1;
matriz[4][7]=1;
matriz[4][8]=1;
matriz[4][9]=1;

matriz[5][0]=1;
matriz[5][1]=0;
matriz[5][2]=1;
matriz[5][3]=1;
matriz[5][4]=1;
matriz[5][5]=0;
matriz[5][6]=1;
matriz[5][7]=1;
matriz[5][8]=1;
matriz[5][9]=1;

matriz[6][0]=0;
matriz[6][1]=1;
matriz[6][2]=1;
matriz[6][3]=1;
matriz[6][4]=1;
matriz[6][5]=1;
matriz[6][6]=0;
matriz[6][7]=1;
matriz[6][8]=1;
matriz[6][9]=1;

matriz[7][0]=1;
matriz[7][1]=1;
matriz[7][2]=1;
matriz[7][3]=1;
matriz[7][4]=1;
matriz[7][5]=1;
matriz[7][6]=1;
matriz[7][7]=0;
matriz[7][8]=1;
matriz[7][9]=1;

matriz[8][0]=1;
matriz[8][1]=1;
matriz[8][2]=1;
matriz[8][3]=1;
matriz[8][4]=1;
matriz[8][5]=1;
matriz[8][6]=1;
matriz[8][7]=1;
matriz[8][8]=0;
matriz[8][9]=1;

matriz[9][0]=1;
matriz[9][1]=0;
matriz[9][2]=1;
matriz[9][3]=1;
matriz[9][4]=1;
matriz[9][5]=1;
matriz[9][6]=1;
matriz[9][7]=1;
matriz[9][8]=1;
matriz[9][9]=0;
array2 = array
console.log("Bienvenido a camino óptimo\n¿En qué nodo te encuentras?: ")
nodoinicial=validacion()
console.log("¿A qué nodo quieres ir?: ")
nododestino=validacion()
while(aux){
ask = prompt("¿Quieres banear nodos? Presiona Sí//No: ")
sinootro=SiNoOtro(ask)
switch (sinootro){
    case 0:
        aux=false
    case 1:
        while (banear){
            console.log("Qué nodo quieres banear?")
            n=validacion()
            repetidos=false
            for(i=0;i<baneados.length;i++){
                if(n==baneados[i]){
                    repetidos= true
                }
            }
            if(n==nododestino||n==nodoinicial||repetidos){
                console.log("No puedes banear el nodo destino ni el nodo inicial ni el mismo nodo 2 veces")
            }
            else{
            baneados.push(n)
            console.log("Nodo baneado")
            while(aux2){
            otro=prompt("¿Quieres banear otro nodo? Sí//No: ")
            sinootro=SiNoOtro(otro)
                switch (sinootro){
                    case 0:
                        baneados=bubbleSort(baneados)
                        for(i=0;i<baneados.length;i++){
                            array2.splice(baneados[i]-1,1);
                        }
                        banear = false
                        aux=false
                        aux2=false
                    break
                    case 1:
                        aux2=false
                        break
                    case 2:
                        console.log("Respuesta inválida")
                    break
                }
            }
            aux2=true
            }
        }
    break
    case 2:
        console.log("Respuesta inválida")    
    break
}
}
aux=true

console.log("Calculando rutas más cortas...")
//Nivel 1
if (matriz[nodoinicial-1][nododestino-1]==1){
    console.log("Solo camina directo hacia tu destino :)")
    encontrado= true
} 
else if (nodoinicial == nododestino){
    console.log("Estás en tu destino")
    encontrado = true
}
//Nivel 2
if (!encontrado){
    for(let j=0;j<array2.length;j++){
        if(matriz[nodoinicial-1][array2[j]]==1 && matriz[array2[j]][nododestino-1]==1){
            encontrado=true
            caminos = caminos+"\nDirigete al nodo "+(array2[j]+1)+" y después camina hacia el nodo "+nododestino
        }
        if (j==array2.length-1 && caminos != ""){
            caminos="Aquí están todas las rutas igual de cortas:" + caminos
        }
    }
    if(encontrado) console.log(caminos)
    else console.log("No existe camino hacia tu destino")
    
}
function validacion(){
    valid = false
while(!valid){
    n=prompt("Ingresa un número entero del 1 al 10, por favor: ")
    if(n>0&&n<11&&n%1==0){
        n=parseInt(n)
        valid = true
    }    
}
return n
}
function bubbleSort(array){
	
    for(var i = 0; i <= array.length-1; i++){
        for(var j = 0; j < ( array.length - i -1); j++){
            if(array[j] < array[j+1]){
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            }
        }
    }
    return array
}

function SiNoOtro(string){
    var n
    string=string.toUpperCase()
    if (string=="NO"){
        n=0
    }
    else if(string=="SI"|| string =="SÍ"){
        n=1
    }
    else {
        n=2
    }
    return n
}