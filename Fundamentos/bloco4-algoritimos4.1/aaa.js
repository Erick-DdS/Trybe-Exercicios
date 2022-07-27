let num = 150;
let divisiveis = 0;

for(let i = 1; i <= num; i++){
    if(i % 3 == 0){
        divisiveis += 1;
    }
}

if(divisiveis == 50){
    console.log('A quantidade de valores divisiveis é', divisiveis);
}else{
    console.log("Mensagem secreta");
}